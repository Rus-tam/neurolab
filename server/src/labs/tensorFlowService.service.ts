import * as tf from "@tensorflow/tfjs-node";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TensorFlowServiceService implements OnModuleInit {
  simpleIsomerizationModel: tf.LayersModel;
  amineTreatmentSweetGasH2SModel: tf.LayersModel;
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.simpleIsomerizationModel = await tf.loadLayersModel(
      this.configService.get<string>("SIMPLE_ISOMERIZATION_MODEL"),
    );

    // this.amineTreatmentSweetGasH2SModel = await tf.loadLayersModel(
    //   this.configService.get<string>("AMINE_TREATMENT_SWEET_GAS_H2S_MODEL"),
    // );
  }
}
