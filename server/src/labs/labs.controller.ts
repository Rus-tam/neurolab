import { Body, Controller, Get, Logger, Post, UseGuards } from "@nestjs/common";
import { LabsService } from "@labs/labs.service";
import { AmineTreatmentDTO, SimpleIsoDto } from "@labs/dto";
import { IJWTPayload, ISimpleIsoResult } from "@types";
import { DbService } from "@db/db.service";
import { CurrentUser } from "@decorators";
import { JwtAuthGuard } from "@auth/guards/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from "@db/entities/user.entity";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";

@Controller("labs")
export class LabsController {
  logger = new Logger();
  constructor(private readonly labService: LabsService, private readonly dbService: DbService) {}

  @UseGuards(AuthGuard("jwt"))
  @Post("/simple-isomerization")
  async calculateSimpleIso(
    @Body() inputData: SimpleIsoDto,
    @CurrentUser() currentUser: UserEntity,
  ): Promise<ISimpleIsoResult> {
    console.log(inputData);
    const results = await this.labService.getSimpleIsomerizationResults(inputData);
    await this.dbService.createSimpleIsoNote(inputData, results, currentUser);

    return results;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("/amine-treatment")
  async calculateAmineTreatment(
    @Body() inputData: AmineTreatmentDTO,
    @CurrentUser() currentUser: UserEntity,
  ) {
    // console.log("OOOOOOOOOOO", inputData);
    const results = await this.labService.getAmineTreatmentResults(inputData);
    console.log(results);
  }

  @UseGuards(AuthGuard("jwt"))
  @Get("/simple-isomerization")
  async getSimpleIsoResult(@CurrentUser() currentUser: UserEntity): Promise<SimpleIsoResultEntity[]> {
    return this.dbService.fetchSimpleIsoRes(currentUser.id);
  }
}
