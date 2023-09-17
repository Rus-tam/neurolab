import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { DbService } from "@db/db.service";
import { JwtService } from "@nestjs/jwt";
import { TokenEntity } from "@db/entities/token.entity";
import { AuthErrors } from "@errors";
import { UserEntity } from "@db/entities/user.entity";
import { LoginDto } from "@auth/dto";
import { compareSync } from "bcrypt";

@Injectable()
export class AuthService {
  logger = new Logger();
  constructor(
    private readonly dbService: DbService,
    private readonly jwtService: JwtService,
  ) {}

  async refreshTokens(
    refreshToken: string,
  ): Promise<{ accessToken: string; refreshToken: TokenEntity }> {
    const token: TokenEntity = await this.dbService.getToken(refreshToken);
    if (!token) {
      this.logger.error("Токен не найден");
      throw new UnauthorizedException(AuthErrors.Unauthorized);
    }

    await this.dbService.deleteToken(token.id);
    if (new Date(token.exp) < new Date()) {
      this.logger.error("Срок годности токена вышел");
      throw new UnauthorizedException(AuthErrors.Unauthorized);
    }

    const user = await this.dbService.findUserById(token.userId);
    return this.generateTokens(user);
  }

  async login(dto: LoginDto) {
    const user = await this.dbService.findUserByEmail(dto.email);

    if (!user || !compareSync(dto.password, user.password)) {
      this.logger.error("Не верный логин или пароль");
      throw new NotFoundException(AuthErrors.Unauthorized);
    }

    return this.generateTokens(user);
  }

  private async generateTokens(
    user: UserEntity,
  ): Promise<{ accessToken: string; refreshToken: TokenEntity }> {
    const accessToken =
      "Bearer " +
      this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
      });

    const refreshToken: TokenEntity = await this.dbService.createRefreshToken(user);

    return { accessToken, refreshToken };
  }
}
