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
    feed_gas_ic4h10: number;

    @IsNumber()
    feed_gas_ic5h12: number;

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

    @IsNumber()
    sep_vap_mass_flow: number;

    @IsNumber()
    sep_liq_mass_flow: number;

    @IsNumber()
    sep_vap_ch4: number;

    @IsNumber()
    sep_vap_c2h6: number;

    @IsNumber()
    sep_vap_c3h8: number;

    @IsNumber()
    sep_vap_ic4h10: number;

    @IsNumber()
    sep_vap_nc4h10: number;

    @IsNumber()
    sep_vap_ic5h12: number;

    @IsNumber()
    sep_vap_nc5h12: number;

    @IsNumber()
    sep_liq_ch4: number;

    @IsNumber()
    sep_liq_c2h6: number;

    @IsNumber()
    sep_liq_c3h8: number;

    @IsNumber()
    sep_liq_ic4h10: number;

    @IsNumber()
    sep_liq_nc4h10: number;

    @IsNumber()
    sep_liq_ic5h12: number;

    @IsNumber()
    sep_liq_nc5h12: number;

    @IsNumber()
    cooled_gas_temperature: number;

    @IsNumber()
    expander_power: number;

    @IsNumber()
    column_bot_prod_temp: number;

    @IsNumber()
    column_top_prod_temp: number;

    @IsNumber()
    column_top_prod_mass_flow: number;

    @IsNumber()
    column_bot_prod_mass_flow: number;

    @IsNumber()
    col_top_ch4: number;

    @IsNumber()
    col_top_c2h6: number;

    @IsNumber()
    col_top_c3h8: number;

    @IsNumber()
    col_top_ic4h10: number;

    @IsNumber()
    col_top_nc4h10: number;

    @IsNumber()
    col_top_ic5h12: number;

    @IsNumber()
    col_top_nc5h12: number;

    @IsNumber()
    col_bot_ch4: number;

    @IsNumber()
    col_bot_c2h6: number;

    @IsNumber()
    col_bot_c3h8: number;

    @IsNumber()
    col_bot_ic4h10: number;

    @IsNumber()
    col_bot_nc4h10: number;

    @IsNumber()
    col_bot_ic5h12: number;

    @IsNumber()
    col_bot_nc5h12: number;
}













