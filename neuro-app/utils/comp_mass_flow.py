from dto.dto import LowTempDistInitial


def component_mass_flow(dto: LowTempDistInitial):
    feed_gas_comp_mass_flow = {
        'gas_feed Methane mass flow, kg/h': dto.feed_gas_ch4 * dto.feed_gas_mass_flow,
        'gas_feed Ethane mass flow, kg/h': dto.feed_gas_c2h6 * dto.feed_gas_mass_flow,
        'gas_feed Propane mass flow, kg/h': dto.feed_gas_c3h8 * dto.feed_gas_mass_flow,
        'gas_feed i-Butane mass flow, kg/h': dto.feed_gas_ic4h10 * dto.feed_gas_mass_flow,
        'gas_feed n-Butane mass flow, kg/h': dto.feed_gas_nc4h10 * dto.feed_gas_mass_flow,
        'gas_feed i-Pentane mass flow, kg/h': dto.feed_gas_ic5h12 * dto.feed_gas_mass_flow,
        'gas_feed n-Pentane mass flow, kg/h': dto.feed_gas_nc5h12 * dto.feed_gas_mass_flow,
    }

    return [feed_gas_comp_mass_flow]

