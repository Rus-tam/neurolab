import { Injectable } from "@nestjs/common";
import { TensorFlowServiceService } from "@labs/tensorFlowService.service";
import { SimpleIsoDto } from "@labs/dto";
import * as tf from "@tensorflow/tfjs-node";
import { ISimpleIsoResult } from "@types";

@Injectable()
export class LabsService {
  constructor(private readonly tfService: TensorFlowServiceService) {}

  async getSimpleIsomerizationResults(dto: SimpleIsoDto): Promise<ISimpleIsoResult> {
    const model = this.tfService.simpleIsomerizationModel;

    const input = tf.tensor([
      parseFloat(dto.vesselVolume),
      parseFloat(dto.feedTemperature),
      parseFloat(dto.feedMassFlow) / 3600,
    ]);

    const result = await (model.predict(input.reshape([-1, 3])) as tf.Tensor).dataSync();

    return {
      product_concentration: result["0"],
      product_temperature: result["1"],
    };
  }
}
