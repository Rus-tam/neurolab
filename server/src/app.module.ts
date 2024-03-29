import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DbModule } from "./db/db.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";
import { LabsModule } from "./labs/labs.module";
import { AxiosModule } from "./axios/axios.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: "postgres",
          host: config.get<string>("POSTGRES_HOST"),
          port: config.get<number>("POSTGRES_PORT"),
          username: config.get<string>("POSTGRES_USER"),
          password: config.get<string>("POSTGRES_PASSWORD"),
          database: config.get<string>("POSTGRES_DATABASE"),
          autoLoadEntities: true,
          synchronize: true,
          logging: false,
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
export class AppModule {}
