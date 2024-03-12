import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { AmineTreatmentDTO, SimpleIsoDto, LowTempDistillationDTO } from "@labs/dto";
import { ISimpleIsoResult } from "@types";
import { IAmineTreatmentResult } from "@types";
import { HttpService } from "@nestjs/axios";
import { AxiosResponse } from "axios";
import { map, Observable, firstValueFrom } from "rxjs";
import { LabsError } from "@errors";

@Injectable()
export class LabsService {
  logger = new Logger();
  constructor(private readonly httpService: HttpService) { }

  async getSimpleIsomerizationResults(dto: SimpleIsoDto): Promise<ISimpleIsoResult> {
    try {
      const simpleIsoResObserver: Observable<AxiosResponse<ISimpleIsoResult>> = this.httpService.post(
        "/simple_isomerization",
        dto,
      );

      return (await firstValueFrom(simpleIsoResObserver)).data;
    } catch (err) {
      this.logger.error("Произошла ошибка вычисления в лабораторной раобте - `Простая изомеризация`");
      throw new NotFoundException(LabsError.CalculationError);
    }
  }

  async getAmineTreatmentResults(dto: AmineTreatmentDTO): Promise<IAmineTreatmentResult> {
    try {
      const amineTreatmentResObserver = this.httpService.post("/amine_treatment", dto);
      return (await firstValueFrom(amineTreatmentResObserver)).data;
    } catch (err) {
      this.logger.error("Произошла ошибка вычисления в лабораторной работе - `Аминовая очистка`");
      throw new NotFoundException(LabsError.CalculationError);
    }
  }

  async getLowTempDistillationResults(dto: LowTempDistillationDTO) {
    try {
      const lowTempDistResObserver = this.httpService.post('/low-temp-distillation', dto);
      console.log('TTTTT', dto);
      return (await firstValueFrom(lowTempDistResObserver)).data;
    } catch (err) {
      this.logger.error('Произошла ошибка вычисления в лабораторной работе - `Низкотемпературная ректификация`');
      throw new NotFoundException(LabsError.CalculationError);
    }
  }

  private deleteNegativeValues(data: Float32Array | Int32Array | Uint8Array) {
    const onlyPositiveValues = data.map((item) => (item < 0 ? (item = 0) : item));

    return onlyPositiveValues;
  }
}
