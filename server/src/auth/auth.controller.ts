import {
  Controller,
  Post,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
  Res,
  Logger,
  UnauthorizedException,
  HttpStatus,
  Get,
} from "@nestjs/common";
import { DbService } from "@db/db.service";
import { UserDTO } from "@db/dto";
import { UserResponse } from "@responses";
import { LoginDto } from "@auth/dto";
import { Response } from "express";
import { AuthService } from "@auth/auth.service";
import { AuthErrors } from "@errors";
import { ConfigService } from "@nestjs/config";
import { IBriefUserInfo, ITokens } from "@types";
import { UserEntity } from "@db/entities/user.entity";
import { Cookie } from "@decorators";

const REFRESH_TOKEN = "refreshtoken";

@Controller("auth")
export class AuthController {
  logger = new Logger();
  constructor(
    private readonly dbService: DbService,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("/register")
  async createUser(@Body() dto: UserDTO) {
    const user = await this.dbService.createUser(dto);
    console.log(user);
    return new UserResponse(user);
  }

  @Post("/login")
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const tokens = await this.authService.login(dto);
    const user = await this.dbService.findUserByEmail(dto.email);
    const briefUserInfo: IBriefUserInfo = {
      id: user.id,
      email: user.email,
      student1: user.student1,
      student2: user.student2,
      student3: user.student3,
      role: user.role,
    };

    if (!tokens || !user) {
      this.logger.error(`Не удается войти с данными ${JSON.stringify(dto)}`);
    }

    this.setRefreshTokenToCookies(tokens, res, briefUserInfo);

    return {
      accessToken: tokens.accessToken,
    };
  }

  private setRefreshTokenToCookies(tokens: ITokens, res: Response, user: IBriefUserInfo) {
    if (!tokens) {
      this.logger.error("Не удается авторизоваться");
      throw new UnauthorizedException(AuthErrors.Unauthorized);
    }

    res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
      httpOnly: true,
      sameSite: "lax",
      expires: new Date(tokens.refreshToken.exp),
      secure: this.configService.get("NODE_ENV", "development") === "production",
      path: "/",
    });

    res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken, user });
  }

  @Get("/refresh")
  async refreshToken(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    user: IBriefUserInfo,
    @Res() res: Response,
  ) {
    console.log("USER", user);
    if (!refreshToken) {
      throw new UnauthorizedException(AuthErrors.NotAuthorized);
    }
    const tokens = await this.authService.refreshTokens(refreshToken);
    if (!tokens) {
      throw new UnauthorizedException(AuthErrors.NotAuthorized);
    }
    this.setRefreshTokenToCookies(tokens, res, user);
  }
}
