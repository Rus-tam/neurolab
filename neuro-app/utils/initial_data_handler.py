from dto.dto import AmineTreatmentInitial


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

