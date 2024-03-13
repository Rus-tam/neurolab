import { Body, Controller, Get, InternalServerErrorException, Logger, Post, UseGuards } from "@nestjs/common";
import { LabsService } from "@labs/labs.service";
import { AmineTreatmentDTO, LowTempDistillationDTO, SimpleIsoDto } from "@labs/dto";
import { IFetchAmineRes, ISimpleIsoResult } from "@types";
import { DbService } from "@db/db.service";
import { CurrentUser } from "@decorators";
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from "@db/entities/user.entity";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";
import { LabsError } from "@errors";
import { AmineTreatmentEntity } from "@db/entities/amine-treatment-result.entity";

@Controller("labs")
export class LabsController {
  logger = new Logger();
  constructor(private readonly labService: LabsService, private readonly dbService: DbService) { }

  @UseGuards(AuthGuard("jwt"))
  @Post("/simple-isomerization")
  async calculateSimpleIso(
    @Body() inputData: SimpleIsoDto,
    @CurrentUser() currentUser: UserEntity,
  ): Promise<ISimpleIsoResult> {
    try {
      const results = await this.labService.getSimpleIsomerizationResults(inputData);
      const savedNote = await this.dbService.createSimpleIsoNote(inputData, results, currentUser);
      this.logger.log(
        `Лабораторная работа: Простая изомеризация. Пользователь: ${currentUser.student1} и др. Группа: ${currentUser.group}.
         Результат: prod_conc: ${results.product_concentration}, prod_temp: ${results.product_temperature} записаны в бд`,
      );
      return results;
    } catch (err) {
      this.logger.error(`Ошибка лабораторной работы "Простая изомеризация" - ${err.message}`);
      throw new InternalServerErrorException(LabsError.CalculationError);
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/simple-isomerization")
  async getSimpleIsoResult(@CurrentUser() currentUser: UserEntity): Promise<SimpleIsoResultEntity[]> {
    return this.dbService.fetchSimpleIsoRes(currentUser.id);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/amine-treatment")
  async calculateAmineTreatment(
    @Body() inputData: AmineTreatmentDTO,
    @CurrentUser() currentUser: UserEntity,
  ) {
    try {
      const results = await this.labService.getAmineTreatmentResults(inputData);
      const savedNote = await this.dbService.createAmineTreatmentNote(inputData, results, currentUser);
      this.logger.log(
        `Лабораторная работа: Аминовая очистка. Пользователь: ${currentUser.student1} и др. Группа: ${currentUser.group}. Результат: sweet_gas_temp: ${results["sweet_gas temperature, C"]}, rich_amine_temp: ${results["rich_amine temperature, C"]} и др. записаны в бд`,
      );
      return results;
    } catch (err) {
      this.logger.error(`Ошибка лабораторной работы "Аминовая очистка" - ${err.message}`);
      throw new InternalServerErrorException(LabsError.CalculationError);
    }
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/amine-treatment")
  async getAmineTreatmentResult(@CurrentUser() currentUser: UserEntity): Promise<IFetchAmineRes> {
    return this.dbService.fetchAmineTreatmentRes(currentUser.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post("low-temp-distillation")
  async calculateLowTempDist(@Body() inputData: LowTempDistillationDTO, @CurrentUser() currentUser: UserEntity) {
    try {
      const results = await this.labService.getLowTempDistillationResults(inputData);

    } catch (err) {
      this.logger.error(`Ошибка лабораторной работы "Низкотемпературная ректификация" - ${err.message}`);
      throw new InternalServerErrorException(LabsError.CalculationError);
    }
  }
}
