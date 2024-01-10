import { Module } from "@nestjs/common";
import { HttpModule as NestHttpModule } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";

@Module({
  imports: [
    NestHttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: configService.get<string>("NEURO_APP"),
        timeout: configService.get<number>("HTTP_TIMEOUT"),
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [NestHttpModule],
})
export class HttpModule {}
