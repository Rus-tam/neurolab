import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@db/entities/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { TokenEntity } from "@db/entities/token.entity";
import { UserDTO } from "@db/dto";
import { DbErrors } from "@errors";
import * as bcrypt from "bcrypt";
import { IJWTPayload, ISimpleIsoResult, Roles } from "@types";
import { v4 } from "uuid";
import { add } from "date-fns";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";

@Injectable()
export class DbService {
  logger = new Logger();
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(TokenEntity)
    private readonly tokenRepository: Repository<TokenEntity>,
    @InjectRepository(SimpleIsoResultEntity)
    private readonly simpleIsoResRepository: Repository<SimpleIsoResultEntity>,
  ) {}

  async createUser(dto: UserDTO) {
    let Role: Roles;
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (user) {
      this.logger.error("Такая подгруппа уже существует");
      throw new ConflictException(DbErrors.ExistingStudentGroup);
    }

    if (dto.role === "STUDENT") {
      Role = Roles.STUDENT;
    } else if (dto.role === "PROFESSOR") {
      Role = Roles.PROFESSOR;
    } else if (dto.role === "ADMIN") {
      Role = Roles.ADMIN;
    }

    const hashedPassword = await this.hashPassword(dto.password);

    const newUser = this.userRepository.create({
      group: dto.group,
      email: dto.email,
      student1: dto.student1,
      student2: dto.student2,
      student3: dto.student3,
      password: hashedPassword,
      professorName: dto.professorName,
      role: Role,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.userRepository.save(newUser);

    return newUser;
  }

  async findUserById(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: [
        "id",
        "group",
        "email",
        "role",
        "student1",
        "student2",
        "student3",
        "professorName",
      ],
    });
    if (!user) {
      this.logger.error("Пользователь не найден");
      throw new NotFoundException(DbErrors.NotFound);
    }
    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      this.logger.error("Пользователь не найден");
      throw new NotFoundException(DbErrors.NotFound);
    }
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  async createRefreshToken(user: UserEntity) {
    const existingTokens = await this.tokenRepository.findOneBy({ userId: user.id });
    if (existingTokens) {
      await this.deleteToken(existingTokens.id);
    }
    return this.tokenRepository.save({
      token: v4(),
      exp: add(new Date(), { minutes: 45 }),
      user,
      userId: user.id,
    });
  }

  async getToken(token: string): Promise<TokenEntity> {
    return this.tokenRepository.findOne({
      where: { token },
    });
  }

  async deleteToken(id: string): Promise<DeleteResult> {
    return this.tokenRepository.delete({ id });
  }

  async createSimpleIsoRes(
    result: ISimpleIsoResult,
    user: UserEntity,
  ): Promise<SimpleIsoResultEntity> {
    const newEntry = this.simpleIsoResRepository.create({
      product_concentration: result.product_concentration,
      product_temperature: result.product_temperature,
      createdTime: new Date(),
      user,
    });

    await this.simpleIsoResRepository.save(newEntry);

    return newEntry;
  }
}
