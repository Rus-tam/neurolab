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
import { GetHeader } from "@decorators";
import { ITokens } from "@types";

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
    return new UserResponse(user);
  }

  @Post("/login")
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const tokens = await this.authService.login(dto);
    const user = await this.dbService.findUserByEmail(dto.email);

    if (!tokens || !user) {
      this.logger.error(`Не удается войти с данными ${JSON.stringify(dto)}`);
    }

    this.setRefreshTokenToCookies(tokens, res);

    return {
      accessToken: tokens.accessToken,
    };
  }

  private setRefreshTokenToCookies(tokens: ITokens, res: Response) {
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

    res.status(HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
  }

  @Get("/refresh")
  async refreshToken(
    @GetHeader(REFRESH_TOKEN) refreshtoken: string,
    @Res() res: Response,
  ) {
    console.log("REFRESH_TOKEN", refreshtoken);
    if (!refreshtoken) {
      throw new UnauthorizedException(AuthErrors.NotAuthorized);
    }
    const tokens = await this.authService.refreshTokens(refreshtoken);
    if (!tokens) {
      throw new UnauthorizedException(AuthErrors.NotAuthorized);
    }
    this.setRefreshTokenToCookies(tokens, res);
  }
}
