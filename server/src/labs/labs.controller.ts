import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { LabsService } from "@labs/labs.service";
import { SimpleIsoDto } from "@labs/dto";
import { IJWTPayload, ISimpleIsoResult } from "@types";
import { DbService } from "@db/db.service";
import { CurrentUser } from "@decorators";
import { JwtAuthGuard } from "@auth/guards/jwt-auth.guard";
import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from "@db/entities/user.entity";

@Controller("labs")
export class LabsController {
  constructor(
    private readonly labService: LabsService,
    private readonly dbService: DbService,
  ) {}

  @UseGuards(AuthGuard("jwt"))
  @Post("/simple-isomerization")
  async getSimpleIsoResult(
    @Body() inputData: SimpleIsoDto,
    @CurrentUser() currentUser: UserEntity,
  ): Promise<ISimpleIsoResult> {
    const results = await this.labService.getSimpleIsomerizationResults(inputData);
    await this.dbService.createSimpleIsoRes(results, currentUser);

    return results;
  }
}
