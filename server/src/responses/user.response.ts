import { Exclude } from "class-transformer";
import { Roles } from "@types";
import { TokenEntity } from "@db/entities/token.entity";
import { UserEntity } from "@db/entities/user.entity";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";

export class UserResponse implements UserEntity {
  id: string;

  group: string;

  email: string;

  student1: string;

  student2: string;

  student3: string;

  @Exclude()
  password: string;

  role: Roles;

  @Exclude()
  token: TokenEntity;

  @Exclude()
  simpleIsoRes: SimpleIsoResultEntity;

  professorName: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(user: UserEntity) {
    Object.assign(this, user);
  }
}
