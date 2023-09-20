import { IsString } from "class-validator";

export class SimpleIsoDto {
  @IsString()
  vesselVolume: string;

  @IsString()
  feedTemperature: string;

  @IsString()
  feedMassFlow: string;
}
