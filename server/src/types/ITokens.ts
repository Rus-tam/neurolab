import { TokenEntity } from "@db/entities/token.entity";

export interface ITokens {
  accessToken: string;
  refreshToken: TokenEntity;
}
