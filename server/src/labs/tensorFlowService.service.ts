import * as tf from "@tensorflow/tfjs-node";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TensorFlowServiceService implements OnModuleInit {
  simpleIsomerizationModel: tf.LayersModel;
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.simpleIsomerizationModel = await tf.loadLayersModel(
      this.configService.get<string>("SIMPLE_ISOMERIZATION_MODEL"),
    );
  }
}
