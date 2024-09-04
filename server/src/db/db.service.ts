import { ConflictException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "@db/entities/user.entity";
import { DeleteResult, Repository } from "typeorm";
import { TokenEntity } from "@db/entities/token.entity";
import { UserDTO } from "@db/dto";
import { DbErrors } from "@errors";
import * as bcrypt from "bcrypt";
import {
  IAmineTreatmentResult,
  IFetchAmineRes,
  IJWTPayload,
  ILeanAmineData,
  ILowTempDistillationResult,
  IPredictData,
  ISimpleIsoResult,
  ISourGasData,
  Roles,
  ILowTempDistFeedGas,
  ILowTempDistSepProd,
  ILowTempDistColProd,
  IFetchLowTempDistRes
} from "@types";
import { v4 } from "uuid";
import { add } from "date-fns";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";
import { AmineTreatmentDTO, LowTempDistillationDTO, SimpleIsoDto } from "@labs/dto";
import { AmineTreatmentEntity } from "./entities/amine-treatment-result.entity";
import { LowTempDistillationEntity } from "./entities/low-temp-dist-result.entity";

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
    @InjectRepository(AmineTreatmentEntity)
    private readonly amineTreatmentResRepository: Repository<AmineTreatmentEntity>,
    @InjectRepository(LowTempDistillationEntity) private readonly lowTempDistillationRepository: Repository<LowTempDistillationEntity>,
  ) { }

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
      select: ["id", "group", "email", "role", "student1", "student2", "student3", "professorName"],
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
      exp: add(new Date(), { minutes: 90 }),
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

  // SIMPLE ISOMERIZATION
  async createSimpleIsoNote(
    inputData: SimpleIsoDto,
    result: ISimpleIsoResult,
    user: UserEntity,
  ): Promise<SimpleIsoResultEntity> {
    const newEntry = this.simpleIsoResRepository.create({
      vessel_volume: parseFloat(inputData.vessel_volume),
      feed_temperature: parseFloat(inputData.feed_temperature),
      feed_mass_flow: parseFloat(inputData.feed_mass_flow) / 3600,
      product_concentration: result.product_concentration,
      product_temperature: result.product_temperature,
      createdTime: new Date(),
      user,
    });

    await this.simpleIsoResRepository.save(newEntry);

    return newEntry;
  }

  async fetchSimpleIsoRes(userId: string): Promise<SimpleIsoResultEntity[]> {
    return this.simpleIsoResRepository.find({ where: { user: { id: userId } } });
  }

  // AMINE TREATMENT
  async createAmineTreatmentNote(
    inputData: AmineTreatmentDTO,
    result: IAmineTreatmentResult,
    user: UserEntity,
  ): Promise<AmineTreatmentEntity> {
    const { modalSGWindowStatus, modalAmineWindowStatus, ...initialData } = inputData;
    const newEntry = this.amineTreatmentResRepository.create({
      ...initialData,
      feed_gas_mol_weight: result['feed_gas_mol_weight'],
      lean_amine_mol_weight: result['lean_amine_mol_weight'],
      feed_gas_mass_density: result['feed_gas_mass_density'],
      lean_amine_mass_density: result['lean_amine_mass_density'],
      sweet_gas_temperature: result['sweet_gas_temperature'],
      sweet_gas_mol_flow: result['sweet_gas_mol_flow'],
      rich_amine_mol_flow: result['rich_amine_mol_flow'],
      rich_amine_temperature: result['rich_amine_temperature'],
      rich_amine_h2s_mol_flow: result['rich_amine_h2s_mol_flow'],
      sweet_gas_h2s_mol_flow: result['sweet_gas_h2s_mol_flow'],
      rich_amine_co2_mol_flow: result['rich_amine_co2_mol_flow'],
      sweet_gas_co2_mol_flow: result['sweet_gas_co2_mol_flow'],
      sweet_gas_mol_weight: result['sweet_gas_mol_weight'],
      rich_amine_mol_weight: result['rich_amine_mol_weight'],

      createdTime: new Date(),
      user,
    });

    await this.amineTreatmentResRepository.save(newEntry);

    return newEntry;
  }

  async fetchAmineTreatmentRes(userId: string): Promise<IFetchAmineRes> {
    const sourGasData: ISourGasData[] = await this.amineTreatmentResRepository
      .createQueryBuilder("table")
      .select([
        "table.id",
        "table.sweet_gas_temperature",
        "table.sour_gas_temperature",
        "table.sour_gas_mass_flow",
        "table.sour_gas_co2",
        "table.sour_gas_ch4",
        "table.sour_gas_c2h8",
        "table.sour_gas_c3h8",
        "table.sour_gas_ic4h10",
        "table.sour_gas_nc4h10",
        "table.sour_gas_ic5h12",
        "table.sour_gas_nc5h12",
        "table.sour_gas_h2s",
        "table.sour_gas_h2o",
        "table.sour_gas_MDEA",
      ])
      .andWhere("table.user.id = :userId", { userId })
      .getRawMany();

    const leanAmineData: ILeanAmineData[] = await this.amineTreatmentResRepository
      .createQueryBuilder("table")
      .select([
        "table.id",
        "table.amine_temperature",
        "table.amine_mass_flow",
        "table.amine_co2",
        "table.amine_ch4",
        "table.amine_c2h8",
        "table.amine_c3h8",
        "table.amine_ic4h10",
        "table.amine_nch4h10",
        "table.amine_ic5h12",
        "table.amine_nc5h12",
        "table.amine_h2s",
        "table.amine_h2o",
        "table.amine_MDEA",
      ])
      .andWhere("table.user.id = :userId", { userId })
      .getRawMany();

    const predictedData: IPredictData[] = await this.amineTreatmentResRepository
      .createQueryBuilder("table")
      .select([
        "table.id",
        "table.sweet_gas_temperature",
        "table.sweet_gas_mass_flow",
        "table.sweet_gas_H2S_ppm",
        "table.sweet_gas_CO2_ppm",
        "table.rich_amine_temperature",
        "table.rich_amine_mass_flow",
        "table.rich_amine_h2s",
        "table.rich_amine_co2",
        "table.rich_amine_h2o",
        "table.rich_amine_MDEA",
      ])
      .andWhere("table.user.id = :userId", { userId })
      .getRawMany();
    return { sourGas: sourGasData, leanAmine: leanAmineData, predictedData: predictedData };
  }

  // LOW TEMPERATURE DISTILLATION
  async createLowTempDistNote(inputData: LowTempDistillationDTO,
    result: ILowTempDistillationResult,
    user: UserEntity) {
    const newEntry = this.lowTempDistillationRepository.create({
      gas_feed_temperature: inputData['gas_feed_temperature'],
      gas_feed_mass_flow: inputData['gas_feed_mass_flow'],
      gas_feed_pressure: inputData['gas_feed_pressure'],
      gas_feed_ch4_mass_frac: inputData['gas_feed_ch4_mass_frac'],
      gas_feed_c2h6_mass_frac: inputData['gas_feed_c2h6_mass_frac'],
      gas_feed_c3h8_mass_frac: inputData['gas_feed_c3h8_mass_frac'],
      gas_feed_ic4h10_mass_frac: inputData['gas_feed_ic4h10_mass_frac'],
      gas_feed_nc4h10_mass_frac: inputData['gas_feed_nc4h10_mass_frac'],
      gas_feed_ic5h12_mass_frac: inputData['gas_feed_ic5h12_mass_frac'],
      gas_feed_nc5h12_mass_frac: inputData['gas_feed_nc5h12_mass_frac'],
      comp_frac: inputData['comp_frac'],
      stream_3_pressure: inputData['stream_3_pressure'],
      stream_1_mass_flow: result['stream_1_mass_flow'],
      stream_2_mass_flow: result['stream_2_mass_flow'],
      stream_1_methane_mass_fr: result['stream_1_methane_mass_fr'],
      stream_1_ethane_mass_fr: result['stream_1_ethane_mass_fr'],
      stream_1_propane_mass_fr: result['stream_1_propane_mass_fr'],
      stream_1_i_butane_mass_fr: result['stream_1_i_butane_mass_fr'],
      stream_1_n_butane_mass_fr: result['stream_1_n_butane_mass_fr'],
      stream_1_i_pentane_mass_fr: result['stream_1_i_pentane_mass_fr'],
      stream_1_n_pentane_mass_fr: result['stream_1_n_pentane_mass_fr'],
      stream_2_methane_mass_fr: result['stream_2_methane_mass_fr'],
      stream_2_ethane_mass_fr: result['stream_2_ethane_mass_fr'],
      stream_2_propane_mass_fr: result['stream_2_propane_mass_fr'],
      stream_2_i_butane_mass_fr: result['stream_2_i_butane_mass_fr'],
      stream_2_n_butane_mass_fr: result['stream_2_n_butane_mass_fr'],
      stream_2_i_pentane_mass_fr: result['stream_2_i_pentane_mass_fr'],
      stream_2_n_pentane_mass_fr: result['stream_2_n_pentane_mass_fr'],
      stream_3_temperature: result['stream_3_temperature'],
      expander_power: result['expander_power'],
      stream_16_temperature: result['stream_16_temperature'],
      stream_17_temperature: result['stream_17_temperature'],
      stream_16_mass_flow: result['stream_16_mass_flow'],
      stream_17_mass_flow: result['stream_17_mass_flow'],
      stream_16_methane_mass_fr: result['stream_16_methane_mass_fr'],
      stream_16_ethane_mass_fr: result['stream_16_ethane_mass_fr'],
      stream_16_propane_mass_fr: result['stream_16_propane_mass_fr'],
      stream_16_i_butane_mass_fr: result['stream_16_i_butane_mass_fr'],
      stream_16_n_butane_mass_fr: result['stream_16_n_butane_mass_fr'],
      stream_16_i_pentane_mass_fr: result['stream_16_i_pentane_mass_fr'],
      stream_16_n_pentane_mass_fr: result['stream_16_n_pentane_mass_fr'],
      stream_17_methane_mass_fr: result['stream_17_methane_mass_fr'],
      stream_17_ethane_mass_fr: result['stream_17_ethane_mass_fr'],
      stream_17_propane_mass_fr: result['stream_17_propane_mass_fr'],
      stream_17_i_butane_mass_fr: result['stream_17_i_butane_mass_fr'],
      stream_17_n_butane_mass_fr: result['stream_17_n_butane_mass_fr'],
      stream_17_i_pentane_mass_fr: result['stream_17_i_pentane_mass_fr'],
      stream_17_n_pentane_mass_fr: result['stream_17_n_pentane_mass_fr'],
      column_power: result['column_power'],
      createdTime: new Date(),
      user,
    });

    await this.lowTempDistillationRepository.save(newEntry);

    return newEntry;
  }

  async fetchLowTempDistRes(userId: string): Promise<IFetchLowTempDistRes> {
    const feedGas: ILowTempDistFeedGas[] = await this.lowTempDistillationRepository.createQueryBuilder('table').select([
      "table.id",
      "table.gas_feed_temperature",
      "table.gas_feed_mass_flow",
      "table.gas_feed_pressure",
      "table.gas_feed_ch4_mass_frac",
      "table.gas_feed_c2h6_mass_frac",
      "table.gas_feed_c3h8_mass_frac",
      "table.gas_feed_ic4h10_mass_frac",
      "table.gas_feed_nc4h10_mass_frac",
      "table.gas_feed_ic5h12_mass_frac",
      "table.gas_feed_nc5h12_mass_frac",
      "table.column_power",
      "table.stream_3_pressure"
    ]).andWhere('table.user.id = :userId', { userId }).getRawMany();

    const sepProducts: ILowTempDistSepProd[] = await this.lowTempDistillationRepository.createQueryBuilder('table').select([
      'table.id',
      'table.stream_1_mass_flow',
      'table.stream_1_methane_mass_fr',
      'table.stream_1_ethane_mass_fr',
      'table.stream_1_propane_mass_fr',
      'table.stream_1_i_butane_mass_fr',
      'table.stream_1_n_butane_mass_fr',
      'table.stream_1_i_pentane_mass_fr',
      'table.stream_1_n_pentane_mass_fr',
      'table.stream_2_mass_flow',
      'table.stream_2_methane_mass_fr',
      'table.stream_2_ethane_mass_fr',
      'table.stream_2_propane_mass_fr',
      'table.stream_2_i_butane_mass_fr',
      'table.stream_2_n_butane_mass_fr',
      'table.stream_2_i_pentane_mass_fr',
      'table.stream_2_n_pentane_mass_fr'
    ]).andWhere('table.user.id = :userId', { userId }).getRawMany();

    const colProducts: ILowTempDistColProd[] = await this.lowTempDistillationRepository.createQueryBuilder('table').select([
      'table.id',
      'table.stream_3_temperature',
      'table.expander_power',
      'table.stream_16_temperature',
      'table.stream_17_temperature',
      'table.stream_16_mass_flow',
      'table.stream_17_mass_flow',
      'table.stream_16_methane_mass_fr',
      'table.stream_16_ethane_mass_fr',
      'table.stream_17_methane_mass_fr',
      'table.stream_17_ethane_mass_fr',
      'table.stream_17_propane_mass_fr',
      'table.stream_17_i_butane_mass_fr',
      'table.stream_17_n_butane_mass_fr',
      'table.stream_17_i_pentane_mass_fr',
      'table.stream_17_n_pentane_mass_fr'
    ]).andWhere('table.user.id = :userId', { userId }).getRawMany();

    return { feedGas: feedGas, sepProd: sepProducts, colProducts: colProducts }
  }
}


