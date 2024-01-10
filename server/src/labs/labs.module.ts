import { Module } from "@nestjs/common";
import { LabsService } from "./labs.service";
import { LabsController } from "./labs.controller";
import { ConfigModule } from "@nestjs/config";
import { DbModule } from "@db/db.module";
import { AxiosModule } from "../axios/axios.module";

@Module({
  imports: [ConfigModule, DbModule, AxiosModule],
  providers: [LabsService],
  controllers: [LabsController],
})
export class LabsModule {}
