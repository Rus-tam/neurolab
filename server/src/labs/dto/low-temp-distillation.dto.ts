import { IsNumber } from "class-validator";

export class LowTempDistillationDTO {
    @IsNumber()
    column_power: number;

    @IsNumber()
    cooled_gas_pressure: number;

    @IsNumber()
    feed_gas_ch4: number;

    @IsNumber()
    feed_gas_c2h6: number;

    @IsNumber()
    feed_gas_c3h8: number;

    @IsNumber()
    feed_gas_co2: number;

    @IsNumber()
    feed_gas_ic4h10: number;

    @IsNumber()
    feed_gas_ic5h12: number;

    @IsNumber()
    feed_gas_n2: number;

    @IsNumber()
    feed_gas_nc4h10: number;

    @IsNumber()
    feed_gas_nc5h12: number;

    @IsNumber()
    feed_gas_mass_flow: number;

    @IsNumber()
    feed_gas_pressure: number;

    @IsNumber()
    feed_gas_temperature: number;
}













