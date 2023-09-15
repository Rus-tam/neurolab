import { Injectable } from "@nestjs/common";
import { DBRef } from "typeorm";
import { DbService } from "@db/db.service";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
}
