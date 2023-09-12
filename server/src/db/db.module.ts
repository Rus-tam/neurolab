import { Module } from "@nestjs/common";
import { DbService } from "./db.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ENTITIES } from "@db/entities";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES]), ConfigModule],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
