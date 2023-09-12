import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { DbModule } from "@db/db.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { options } from "@auth/config";
import { STRATEGIES } from "@auth/strategies";
import { GUARDS } from "@auth/guards";

@Module({
  imports: [DbModule, PassportModule, JwtModule.registerAsync(options())],
  providers: [AuthService, ...STRATEGIES, ...GUARDS],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
