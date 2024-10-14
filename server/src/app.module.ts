import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./db/db.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { LabsModule } from "./labs/labs.module";
import { AxiosModule } from "./axios/axios.module";
import { dataSourceOptions } from "@db/data-source";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          ...dataSourceOptions
        };
      },
    }),
    DbModule,
    AuthModule,
    LabsModule,
    AxiosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
