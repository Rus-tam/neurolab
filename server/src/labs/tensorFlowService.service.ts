import * as tf from "@tensorflow/tfjs-node";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TensorFlowServiceService implements OnModuleInit {
  simpleIsomerizationModel: tf.LayersModel;
  amineTreatmentFeedStreamModel: tf.LayersModel;
  amineTreatmentProdCompositionModel: tf.LayersModel;
  amineTreatmentProdTemperatureModel: tf.LayersModel;
  constructor(private readonly configService: ConfigService) {}

  async onModuleInit() {
    this.simpleIsomerizationModel = await tf.loadLayersModel(
      this.configService.get<string>("SIMPLE_ISOMERIZATION_MODEL"),
    );
    this.amineTreatmentFeedStreamModel = await tf.loadLayersModel(
      this.configService.get<string>("AMINE_TREATMENT_FEED_STREAM_MODEL"),
    );
    this.amineTreatmentProdCompositionModel = await tf.loadLayersModel(
      this.configService.get<string>("AMINE_TREATMENT_PROD_COMPOSITION_MODEL"),
    );
    this.amineTreatmentProdTemperatureModel = await tf.loadLayersModel(
      this.configService.get<string>("AMINE_TREATMENT_PROD_TEMPERATURE_MODEL"),
    );
  }
}
