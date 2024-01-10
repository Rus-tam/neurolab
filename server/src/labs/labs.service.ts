import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { AmineTreatmentDTO, SimpleIsoDto } from "@labs/dto";
import { ISimpleIsoResult } from "@types";
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { map, Observable, firstValueFrom } from "rxjs";
import { LabsError } from "@errors";

@Injectable()
export class LabsService {
  logger = new Logger();
  constructor(private readonly httpService: HttpService) {}

  async getSimpleIsomerizationResults(dto: SimpleIsoDto) {
    try {
      const simpleIsoResObserver: Observable<AxiosResponse<ISimpleIsoResult>> = this.httpService.post(
        "/simple_isomerization",
        dto,
      );

      return (await firstValueFrom(simpleIsoResObserver)).data;
    } catch (err) {
      this.logger.error("Произошла ошибка вычисления!");
      throw new NotFoundException(LabsError.CalculationError);
    }
  }
  //   const res = await this.httpService.get<any>("/").pipe(
  //       map(response => console.log(response.data)))
  // )

  // const input = tf.tensor([
  //   parseFloat(dto.vessel_volume),
  //   parseFloat(dto.feed_temperature),
  //   parseFloat(dto.feed_mass_flow) / 3600,
  // ]);
  // const result = (model.predict(input.reshape([-1, 3])) as tf.Tensor).dataSync();
  // if (result["0"] > 1) {
  //   result["0"] = 1;
  // }
  // return {
  //   product_concentration: parseFloat(result["0"].toFixed(2)),
  //   product_temperature: parseFloat(result["1"].toFixed(2)),
  // };

  // async getAmineTreatmentResults(dto: AmineTreatmentDTO) {
  //   const sweetGasH2SModel = this.tfService.amineTreatmentSweetGasH2SModel;

  //   const feedComp = [
  //     dto.sour_gas_temperature,
  //     dto.sour_gas_mass_flow,
  //     dto.sour_gas_co2,
  //     dto.sour_gas_ch4,
  //     dto.sour_gas_c2h8,
  //     dto.sour_gas_c3h8,
  //     dto.sour_gas_ic4h10,
  //     dto.sour_gas_nc4h10,
  //     dto.sour_gas_ic5h12,
  //     dto.sour_gas_nc5h12,
  //     dto.sour_gas_h2s,
  //     dto.sour_gas_h2o,
  //     dto.sour_gas_MDEA,
  //     dto.amine_temperature,
  //     dto.amine_mass_flow,
  //     dto.amine_co2,
  //     dto.amine_ch4,
  //     dto.amine_c2h8,
  //     dto.amine_c3h8,
  //     dto.amine_ic4h10,
  //     dto.amine_nch4h10,
  //     dto.amine_ic5h12,
  //     dto.amine_nc5h12,
  //     dto.amine_h2s,
  //     dto.amine_h2o,
  //     dto.amine_MDEA,
  //   ];

  //   const feedCompTensor = tf.tensor(feedComp).reshape([1, 26]);
  //   const feedCompTensorNorm = this.normalizeData(feedCompTensor);
  //   console.log("first", feedCompTensorNorm);
  //   const sweetGasH2S = (sweetGasH2SModel.predict(feedCompTensor) as tf.Tensor).dataSync();
  //   // console.log("YYYYYY", feedComp[1]);

  //   console.log("second", sweetGasH2S);
  // }

  private deleteNegativeValues(data: Float32Array | Int32Array | Uint8Array) {
    const onlyPositiveValues = data.map((item) => (item < 0 ? (item = 0) : item));

    return onlyPositiveValues;
  }
}
