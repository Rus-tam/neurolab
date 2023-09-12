import { IsEmail, IsEnum, IsString } from "class-validator";
import { Roles } from "@types";
export class UserDTO {
  @IsString()
  group: string | null;

  @IsEmail()
  email: string;

  @IsString()
  student1: string;

  @IsString()
  student2: string;

  @IsString()
  student3: string;

  @IsString()
  professorName: string;

  @IsString()
  password: string;

  @IsEnum(Roles)
  role: Roles;
}
