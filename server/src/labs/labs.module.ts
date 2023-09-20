import { Module } from "@nestjs/common";
import { LabsService } from "./labs.service";
import { LabsController } from "./labs.controller";
import { ConfigModule } from "@nestjs/config";
import { TensorFlowServiceService } from "@labs/tensorFlowService.service";

@Module({
  imports: [ConfigModule],
  providers: [LabsService, TensorFlowServiceService],
  controllers: [LabsController],
})
export class LabsModule {}
