import { Body, Controller, Post } from "@nestjs/common";
import { LabsService } from "@labs/labs.service";
import { SimpleIsoDto } from "@labs/dto";
import { ISimpleIsoResult } from "@types";

@Controller("labs")
export class LabsController {
  constructor(private readonly labService: LabsService) {}

  @Post("/simple-isomerization")
  async getSimpleIsoResult(@Body() inputData: SimpleIsoDto): Promise<ISimpleIsoResult> {
    return this.labService.getSimpleIsomerizationResults(inputData);
  }
}
