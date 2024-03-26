export interface ILowTempDistFeedGas {
    id: string;
    feed_gas_temperature: number;
    feed_gas_pressure: number;
    feed_gas_n2: number;
    feed_gas_co2: number;
    feed_gas_ch4: number;
    feed_gas_c2h6: number;
    feed_gas_c3h8: number;
    feed_gas_ic4h10: number;
    feed_gas_nc4h10: number;
    feed_gas_ic5h12: number;
    feed_gas_nc5h12: number;
    column_power: number;
    cooled_gas_pressure: number;
}

export interface ILowTempDistSepProd {
    id: string;
    sep_vap_mass_flow: number;
    sep_vap_ch4: number;
    sep_vap_c2h6: number;
    sep_vap_c3h8: number;
    sep_vap_ic4h10: number;
    sep_vap_nc4h10: number;
    sep_vap_ic5h12: number;
    sep_vap_nc5h12: number;
    sep_liq_mass_flow: number;
    sep_liq_ch4: number;
    sep_liq_c2h6: number;
    sep_liq_c3h8: number;
    sep_liq_ic4h10: number;
    sep_liq_nc4h10: number;
    sep_liq_ic5h12: number;
    sep_liq_nc5h12: number;
}

export interface ILowTempDistColProd {
    id: string;
    cooled_gas_temperature: number;
    expander_power: number;
    column_top_prod_temp: number;
    column_bot_prod_temp: number;
    column_top_prod_mass_flow: number;
    column_bot_prod_mass_flow: number;
    col_top_ch4: number;
    col_top_c2h6: number;
    col_bot_ch4: number;
    col_bot_c2h6: number;
    col_bot_c3h8: number;
    col_bot_ic4h10: number;
    col_bot_nc4h10: number;
    col_bot_ic5h12: number;
    col_bot_nc5h12: number;
}

export interface IFetchLowTempDistRes {
    feedGas: ILowTempDistFeedGas[];
    sepProd: ILowTempDistSepProd[];
    colProducts: ILowTempDistColProd[]
}