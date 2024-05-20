from dto.dto import AmineTreatmentInitial, LowTempDistInitial


def prepare_initial_data(dto: AmineTreatmentInitial):
    return {
        'feed_gas temperature, C': [dto.sour_gas_temperature], 'feed_gas mass flow, kg/h': [dto.sour_gas_mass_flow],
        'feed_gas CO2 mol frac': [dto.sour_gas_co2], 'feed_gas Methane mol frac': [dto.sour_gas_ch4],
        'feed_gas Ethane mol frac': [dto.sour_gas_c2h8], 'feed_gas Propane mol frac': [dto.sour_gas_c3h8],
        'feed_gas i-Butane mol frac': [dto.sour_gas_ic4h10], 'feed_gas n-Butane mol frac': [dto.sour_gas_nc4h10],
        'feed_gas i-Pentane mol frac': [dto.sour_gas_ic5h12], 'feed_gas n-Pentane mol frac': [dto.sour_gas_nc5h12],
        'feed_gas H2S mol frac': [dto.sour_gas_h2s], 'feed_gas H2O mol frac': [dto.sour_gas_h2o],
        'feed_gas MDEAmine mol frac': [dto.sour_gas_MDEA], 'lean_amine temperature, C': [dto.amine_temperature],
        'lean_amine mass flow, kg/h': [dto.amine_mass_flow], 'lean_amine CO2 mol frac': [dto.amine_co2],
        'lean_amine Methane mol frac': [dto.amine_ch4], 'lean_amine Ethane mol frac': [dto.amine_c2h8],
        'lean_amine Propane mol frac': [dto.amine_c3h8], 'lean_amine i-Butane mol frac': [dto.amine_ic4h10],
        'lean_amine n-Butane mol frac': [dto.amine_nch4h10], 'lean_amine i-Pentane mol frac': [dto.amine_ic5h12],
        'lean_amine n-Pentane mol frac': [dto.amine_nc5h12], 'lean_amine H2S mol frac': [dto.amine_h2s],
        'lean_amine H2O mol frac': [dto.amine_h2o], 'lean_amine MDEAmine mol frac': [dto.amine_MDEA]
    }


def prepare_low_temp_data(dto: LowTempDistInitial):
    return {
    'gas_feed temperature, C': [dto.feed_gas_temperature], 'gas_feed pressure, kPa': [dto.feed_gas_pressure],
    'gas_feed mass flow, kg/h': [dto.feed_gas_mass_flow], 'gas_feed Methane mass frac': [dto.feed_gas_ch4],
    'gas_feed Ethane mass frac': [dto.feed_gas_c2h6], 'gas_feed Propane mass frac': [dto.feed_gas_c3h8],
    'gas_feed i-Butane mass frac': [dto.feed_gas_ic4h10], 'gas_feed n-Butane mass frac': [dto.feed_gas_nc4h10],
    'gas_feed i-Pentane mass frac': [dto.feed_gas_ic5h12], 'gas_feed n-Pentane mass frac': [dto.feed_gas_nc5h12],
    'Comp Fraction': [dto.column_spec]
    }


def prepare_low_temp_column_data(dto: LowTempDistInitial):
    return {
    '4 temperature, C': [dto.cooled_gas_temperature], '4 pressure, kPa': [dto.cooled_gas_pressure],
    '4 mass flow, kg/h': [dto.sep_vap_mass_flow],  '4 Methane mass frac': [dto.sep_vap_ch4],
    '4 Ethane mass frac': [dto.sep_vap_c2h6], '4 Propane mass frac': [dto.sep_vap_c3h8],
    '4 i-Butane mass frac': [dto.sep_vap_ic4h10], '4 n-Butane mass frac': [dto.sep_vap_nc4h10],
    '4 i-Pentane mass frac': [dto.sep_vap_ic5h12], '4 n-Pentane mass frac': [dto.sep_vap_nc5h12],
    'Comp Fraction': [dto.column_spec],
    '5 temperature, C': [dto.feed_gas_temperature], '5 pressure, kPa': [dto.feed_gas_pressure],
    '5 mass flow, kg/h': [dto.sep_liq_mass_flow], '5 Methane mass frac': [dto.sep_liq_ch4],
    '5 Ethane mass frac': [dto.sep_liq_c2h6], '5 Propane mass frac': [dto.sep_liq_c3h8],
    '5 i-Butane mass frac': [dto.sep_liq_ic4h10], '5 n-Butane mass frac': [dto.sep_liq_nc4h10],
    '5 i-Pentane mass frac': [dto.sep_liq_ic5h12], '5 n-Pentane mass frac': [dto.sep_liq_nc5h12],
    }
