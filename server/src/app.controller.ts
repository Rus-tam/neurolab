import { Controller, Get, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthGuard } from "@nestjs/passport";
import { DbService } from "@db/db.service";
import { UserEntity } from "@db/entities/user.entity";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly dbService: DbService,
  ) {}

  @Get()
  @UseGuards(AuthGuard("jwt"))
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/all-users")
  @UseGuards(AuthGuard("jwt"))
  getAllUsers(): Promise<UserEntity[]> {
    return this.dbService.getAllUsers();
  }
}
