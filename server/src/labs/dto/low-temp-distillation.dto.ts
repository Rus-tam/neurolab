import { IsNumber } from "class-validator";
import { LargeNumberLike } from "crypto";

export class LowTempDistillationDTO {
    @IsNumber()
    gas_feed_temperature: number;

    @IsNumber()
    gas_feed_mass_flow: number;

    @IsNumber()
    gas_feed_pressure: number;

    @IsNumber()
    gas_feed_ch4_mass_frac: number;

    @IsNumber()
    gas_feed_c2h6_mass_frac: number;

    @IsNumber()
    gas_feed_c3h8_mass_frac: number;

    @IsNumber()
    gas_feed_ic4h10_mass_frac: number;

    @IsNumber()
    gas_feed_nc4h10_mass_frac: number;

    @IsNumber()
    gas_feed_ic5h12_mass_frac: number;

    @IsNumber()
    gas_feed_nc5h12_mass_frac: number;

    @IsNumber()
    comp_frac: number;

    @IsNumber()
    stream_3_pressure: number;
}













