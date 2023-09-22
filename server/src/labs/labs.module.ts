import { Module } from "@nestjs/common";
import { LabsService } from "./labs.service";
import { LabsController } from "./labs.controller";
import { ConfigModule } from "@nestjs/config";
import { TensorFlowServiceService } from "@labs/tensorFlowService.service";
import { DbModule } from "@db/db.module";

@Module({
  imports: [ConfigModule, DbModule],
  providers: [LabsService, TensorFlowServiceService],
  controllers: [LabsController],
})
export class LabsModule {}
