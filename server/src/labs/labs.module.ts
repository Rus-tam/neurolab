import { Module } from "@nestjs/common";
import { LabsService } from "./labs.service";
import { LabsController } from "./labs.controller";
import { ConfigModule } from "@nestjs/config";
import { DbModule } from "@db/db.module";

@Module({
  imports: [ConfigModule, DbModule],
  providers: [LabsService],
  controllers: [LabsController],
})
export class LabsModule {}
