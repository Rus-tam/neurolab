import {
  Controller,
  Post,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
} from "@nestjs/common";
import { DbService } from "@db/db.service";
import { UserDTO } from "@db/dto";
import { UserResponse } from "@responses";

@Controller("auth")
export class AuthController {
  constructor(private readonly dbService: DbService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post("/create-user")
  async createUser(@Body() dto: UserDTO) {
    const user = await this.dbService.createUser(dto);
    return new UserResponse(user);
  }
}
