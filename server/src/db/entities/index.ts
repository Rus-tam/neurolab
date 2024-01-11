import { UserEntity } from "@db/entities/user.entity";
import { TokenEntity } from "@db/entities/token.entity";
import { SimpleIsoResultEntity } from "@db/entities/simple-iso-result.entity";
import { AmineTreatmentEntity } from "./amine-treatment-result.entity";

export const ENTITIES = [UserEntity, TokenEntity, SimpleIsoResultEntity, AmineTreatmentEntity];
