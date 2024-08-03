export interface ILowTempDistFeedGas {
    id: string;
    gas_feed_temperature: number;
    gas_feed_mass_flow: number;
    gas_feed_pressure: number;
    gas_feed_ch4_mass_frac: number;
    gas_feed_c2h6_mass_frac: number;
    gas_feed_c3h8_mass_frac: number;
    gas_feed_ic4h10_mass_frac: number;
    gas_feed_nc4h10_mass_frac: number;
    gas_feed_ic5h12_mass_frac: number;
    gas_feed_nc5h12_mass_frac: number;
    column_power: number;
    stream_3_pressure: number;
}

export interface ILowTempDistSepProd {
    id: string;
    stream_1_mass_flow: number;
    stream_1_methane_mass_fr: number;
    stream_1_ethane_mass_fr: number;
    stream_1_propane_mass_fr: number;
    stream_1_i_butane_mass_fr: number;
    stream_1_n_butane_mass_fr: number;
    stream_1_i_pentane_mass_fr: number;
    stream_1_n_pentane_mass_fr: number;
    stream_2_mass_flow: number;
    stream_2_methane_mass_fr: number;
    stream_2_ethane_mass_fr: number;
    stream_2_propane_mass_fr: number;
    stream_2_i_butane_mass_fr: number;
    stream_2_n_butane_mass_fr: number;
    stream_2_i_pentane_mass_fr: number;
    stream_2_n_pentane_mass_fr: number;
}

export interface ILowTempDistColProd {
    id: string;
    stream_3_temperature: number;
    expander_power: number;
    stream_16_temperature: number;
    stream_17_temperature: number;
    stream_16_mass_flow: number;
    stream_17_mass_flow: number;
    stream_16_methane_mass_fr: number;
    stream_16_ethane_mass_fr: number;
    stream_17_methane_mass_fr: number;
    stream_17_ethane_mass_fr: number;
    stream_17_propane_mass_fr: number;
    stream_17_i_butane_mass_fr: number;
    stream_17_n_butane_mass_fr: number;
    stream_17_i_pentane_mass_fr: number;
    stream_17_n_pentane_mass_fr: number;
}

export interface IFetchLowTempDistRes {
    feedGas: ILowTempDistFeedGas[];
    sepProd: ILowTempDistSepProd[];
    colProducts: ILowTempDistColProd[]
}