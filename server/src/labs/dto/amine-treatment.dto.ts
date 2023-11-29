import { IsBoolean, IsNumber } from "class-validator";

export class AmineTreatmentDTO {
  @IsNumber()
  sour_gas_temperature: number;

  @IsNumber()
  sour_gas_mass_flow: number;

  @IsNumber()
  sour_gas_pressure: number;

  @IsNumber()
  sour_gas_co2: number;

  @IsNumber()
  sour_gas_ch4: number;

  @IsNumber()
  sour_gas_c2h8: number;

  @IsNumber()
  sour_gas_c3h8: number;

  @IsNumber()
  sour_gas_ic4h10: number;

  @IsNumber()
  sour_gas_nc4h10: number;

  @IsNumber()
  sour_gas_ic5h12: number;

  @IsNumber()
  sour_gas_nc5h12: number;

  @IsNumber()
  sour_gas_h2s: number;

  @IsNumber()
  sour_gas_h2o: number;

  @IsNumber()
  sour_gas_MDEA: number;

  @IsNumber()
  amine_temperature: number;

  @IsNumber()
  amine_mass_flow: number;

  @IsNumber()
  amine_pressure: number;

  @IsNumber()
  amine_co2: number;

  @IsNumber()
  amine_ch4: number;

  @IsNumber()
  amine_c2h8: number;

  @IsNumber()
  amine_c3h8: number;

  @IsNumber()
  amine_ic4h10: number;

  @IsNumber()
  amine_nch4h10: number;

  @IsNumber()
  amine_ic5h12: number;

  @IsNumber()
  amine_nc5h12: number;

  @IsNumber()
  amine_h2s: number;

  @IsNumber()
  amine_h2o: number;

  @IsNumber()
  amine_MDEA: number;

  @IsBoolean()
  modalSGWindowStatus: boolean;

  @IsBoolean()
  modalAmineWindowStatus: boolean;
}
