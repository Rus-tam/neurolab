import { Injectable } from "@nestjs/common";
import { TensorFlowServiceService } from "@labs/tensorFlowService.service";
import { AmineTreatmentDTO, SimpleIsoDto } from "@labs/dto";
import * as tf from "@tensorflow/tfjs-node";
import { ISimpleIsoResult } from "@types";

@Injectable()
export class LabsService {
  constructor(private readonly tfService: TensorFlowServiceService) {}

  async getSimpleIsomerizationResults(dto: SimpleIsoDto): Promise<ISimpleIsoResult> {
    const model = this.tfService.simpleIsomerizationModel;

    const input = tf.tensor([
      parseFloat(dto.vessel_volume),
      parseFloat(dto.feed_temperature),
      parseFloat(dto.feed_mass_flow) / 3600,
    ]);

    const result = (model.predict(input.reshape([-1, 3])) as tf.Tensor).dataSync();

    if (result["0"] > 1) {
      result["0"] = 1;
    }

    return {
      product_concentration: parseFloat(result["0"].toFixed(2)),
      product_temperature: parseFloat(result["1"].toFixed(2)),
    };
  }

  async getAmineTreatmentResults(dto: AmineTreatmentDTO) {
    const feedStreamModel = this.tfService.amineTreatmentFeedStreamModel;

    console.log(dto);

    const feedStreamInput = tf.tensor([
      dto.sour_gas_temperature,
      dto.sour_gas_pressure,
      dto.sour_gas_mass_flow,
      dto.sour_gas_co2,
      dto.sour_gas_ch4,
      dto.sour_gas_c2h8,
      dto.sour_gas_c3h8,
      dto.sour_gas_ic4h10,
      dto.sour_gas_nc4h10,
      dto.sour_gas_ic5h12,
      dto.sour_gas_nc5h12,
      dto.sour_gas_h2s,
      dto.sour_gas_h2o,
      dto.sour_gas_MDEA,
      dto.amine_temperature,
      dto.amine_pressure,
      dto.amine_mass_flow,
      dto.amine_co2,
      dto.amine_ch4,
      dto.amine_c2h8,
      dto.amine_c3h8,
      dto.amine_ic4h10,
      dto.amine_nch4h10,
      dto.amine_ic5h12,
      dto.amine_nc5h12,
      dto.amine_h2s,
      dto.amine_h2o,
      dto.amine_MDEA,
    ]);

    const feedStreamInputNorm = this.normalizeData(feedStreamInput);

    console.log("QQQQQQQQQQQQQQQQ", feedStreamInputNorm);

    const feedStreamResults = (
      feedStreamModel.predict(feedStreamInputNorm.reshape([1, 28])) as tf.Tensor
    ).dataSync();

    if (feedStreamResults[2] || feedStreamResults[7]) {
      feedStreamResults[2] = 0;
      feedStreamResults[7] = 0;
    }

    console.log("RRRRRRRRRRRRRRRR", feedStreamResults);
  }

  private normalizeData(data: any) {
    const min = tf.min(data);
    const max = tf.max(data);

    const normalizedData = tf.div(tf.sub(data, min), tf.sub(max, min));

    return normalizedData;
  }
}
