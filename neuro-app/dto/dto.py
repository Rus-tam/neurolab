from pydantic import BaseModel, Field


class SimpleIsoInitial(BaseModel):
    vessel_volume: float
    feed_temperature: float
    feed_mass_flow: float


class SimpleIsoResponse(BaseModel):
    product_concentration: float
    product_temperature: float


class LowTempDistInitial(BaseModel):
    feed_gas_temperature: float
    feed_gas_mass_flow: float
    feed_gas_pressure: float
    cooled_gas_pressure: float
    column_power: float
    feed_gas_ch4: float
    feed_gas_c2h6: float
    feed_gas_c3h8: float
    feed_gas_ic4h10: float
    feed_gas_nc4h10: float
    feed_gas_ic5h12: float
    feed_gas_nc5h12: float
    sep_vap_mass_flow: float
    sep_liq_mass_flow: float
    sep_vap_ch4: float
    sep_vap_c2h6: float
    sep_vap_c3h8: float
    sep_vap_ic4h10: float
    sep_vap_nc4h10: float
    sep_vap_ic5h12: float
    sep_vap_nc5h12: float
    sep_liq_ch4: float
    sep_liq_c2h6: float
    sep_liq_c3h8: float
    sep_liq_ic4h10: float
    sep_liq_nc4h10: float
    sep_liq_ic5h12: float
    sep_liq_nc5h12: float
    cooled_gas_temperature: float
    expander_power: float
    column_bot_prod_temp: float
    column_top_prod_temp: float



class AmineTreatmentInitial(BaseModel):
    sour_gas_temperature: float
    sour_gas_mass_flow: float
    sour_gas_co2: float
    sour_gas_ch4: float
    sour_gas_c2h8: float
    sour_gas_c3h8: float
    sour_gas_ic4h10: float
    sour_gas_nc4h10: float
    sour_gas_ic5h12: float
    sour_gas_nc5h12: float
    sour_gas_h2s: float
    sour_gas_h2o: float
    sour_gas_MDEA: float
    amine_temperature: float
    amine_mass_flow: float
    amine_co2: float
    amine_ch4: float
    amine_c2h8: float
    amine_c3h8: float
    amine_ic4h10: float
    amine_nch4h10: float
    amine_ic5h12: float
    amine_nc5h12: float
    amine_h2s: float
    amine_h2o: float
    amine_MDEA: float
    sweet_gas_temperature: float
    rich_amine_temperature: float
    sweet_gas_mass_flow: float
    rich_amine_mass_flow: float
    feed_gas_mol_weight: float
    lean_amine_mol_weight: float
    rich_amine_mol_weight: float
    sweet_gas_mol_weight: float
    feed_gas_mol_flow: float
    feed_gas_H2S_mol_flow: float
    feed_gas_CO2_mol_flow: float
    lean_amine_mol_flow: float
    lean_amine_H2S_mol_flow: float
    lean_amine_CO2_mol_flow: float
    rich_amine_mol_flow: float
    sweet_gas_mol_flow: float

