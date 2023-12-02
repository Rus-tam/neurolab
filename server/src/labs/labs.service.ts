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
    const productCompModel = this.tfService.amineTreatmentProdCompositionModel;
    const productTempModel = this.tfService.amineTreatmentProdTemperatureModel;

    const feedComp = [
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
    ];

    const feedStreamInput = tf.tensor([feedComp]);

    const feedStreamInputNorm = this.normalizeData(feedStreamInput);

    const feedStream = (
      feedStreamModel.predict(feedStreamInputNorm.reshape([1, 28])) as tf.Tensor
    ).dataSync();

    const feedStreamResults = this.deleteNegativeValues(feedStream);

    const prodCompInput = [
      dto.sour_gas_temperature,
      dto.sour_gas_pressure,
      dto.sour_gas_mass_flow,
      feedStreamResults[0],
      feedStreamResults[1],
      feedStreamResults[2],
      feedStreamResults[3],
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
      ((dto.sour_gas_h2s * 34) / 22.4) * 1000000,
      ((dto.sour_gas_co2 * 44) / 22.4) * 1000000,
      dto.amine_temperature,
      dto.amine_pressure,
      dto.amine_mass_flow,
      feedStreamResults[4],
      feedStreamResults[5],
      feedStreamResults[6],
      feedStreamResults[7],
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
      ((dto.amine_h2s * 34) / 22.4) * 1000000,
      ((dto.amine_co2 * 44) / 22.4) * 1000000,
    ];
    const productCompInput = tf.tensor(prodCompInput);

    const productCompInputNorm = this.normalizeData(productCompInput);

    const productComp = (
      productCompModel.predict(productCompInputNorm.reshape([1, 40])) as tf.Tensor
    ).dataSync();

    const productCompResult = this.deleteNegativeValues(productComp);

    const prodTempInitial = [
      dto.sour_gas_temperature,
      dto.sour_gas_mass_flow,
      feedStreamResults[0],
      feedStreamResults[1],
      feedStreamResults[2],
      feedStreamResults[3],
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
      dto.amine_mass_flow,
      feedStreamResults[4],
      feedStreamResults[5],
      feedStreamResults[6],
      feedStreamResults[7],
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
      ...productCompResult,
    ];
    const prodTempInput = tf.tensor(prodTempInitial);
    const prodTempInputNormal = this.normalizeData(prodTempInput);
    const prodTemp = (productTempModel.predict(prodTempInputNormal.reshape([1, 56])) as tf.Tensor).dataSync();
    const prodTempResult = this.deleteNegativeValues(prodTemp);

    return {
      sour_gas_mol_weight: feedStreamResults[0],
      sour_gas_density: feedStreamResults[1],
      sour_gas_act_liq_flow: feedStreamResults[2],
      sour_gas_act_vap_flow: feedStreamResults[3],
      lean_amine_mol_weight: feedStreamResults[4],
      lean_amine_density: feedStreamResults[5],
      lean_amine_act_liq_flow: feedStreamResults[6],
      lean_amine_act_vap_flow: feedStreamResults[7],
      sweet_gas_temp: prodTempResult[0],
      sweet_gas_co2: productCompResult[0],
      sweet_gas_ch4: productCompResult[1],
      sweet_gas_c2h8: productCompResult[2],
      sweet_gas_c3h8: productCompResult[3],
      sweet_gas_ic4h10: productCompResult[4],
      sweet_gas_nc4h10: productCompResult[5],
      sweet_gas_ic5h12: productCompResult[6],
      sweet_gas_nc5h12: productCompResult[7],
      sweet_gas_h2s: productCompResult[8],
      sweet_gas_h2o: productCompResult[9],
      sweet_gas_MDEA: productCompResult[10],
      lean_amine_temp: prodTempResult[1],
      lean_amine_co2: productCompResult[11],
      lean_amine_ch4: productCompResult[12],
      lean_amine_c2h8: productCompResult[13],
      lean_amine_c3h8: productCompResult[14],
      lean_amine_ic4h10: productCompResult[15],
      lean_amine_nch4h10: productCompResult[16],
      lean_amine_ic5h12: productCompResult[17],
      lean_amine_nc5h12: productCompResult[18],
      lean_amine_h2s: productCompResult[19],
      lean_amine_h2o: productCompResult[20],
      lean_amine_MDEA: productCompResult[21],
    };
  }

  private normalizeData(data: any) {
    const min = tf.min(data);
    const max = tf.max(data);

    const normalizedData = tf.div(tf.sub(data, min), tf.sub(max, min));

    return normalizedData;
  }

  private deleteNegativeValues(data: Float32Array | Int32Array | Uint8Array) {
    const onlyPositiveValues = data.map((item) => (item < 0 ? (item = 0) : item));

    return onlyPositiveValues;
  }
}
