import random

from fastapi import FastAPI
from dto.dto import SimpleIsoInitial, SimpleIsoResponse, AmineTreatmentInitial, LowTempDistInitial
from service.simple_isomerization_service import simple_isomerization_service
from service.amine_treatment_service import amine_treatment_prod_temp
from service.amine_treatment_service import amine_treatment_rich_amine_mass_flow
from service.amine_treatment_service import amine_treatment_stream_mol_weight
from service.amine_treatment_service import sweet_gas_H2S_ppm
from service.amine_treatment_service import sweet_gas_CO2_ppm
from service.amine_treatment_service import rich_amine_sour_comp
from service.amine_treatment_service import rich_amine_H2O_MDEA

from service.low_temp_dist_service import separator_vapour_mass_flow, separator_vapour_mass_frac, separator_liquid_mass_frac
from service.low_temp_dist_service import expander_cooled_gas_temp, expander_power, column_prod_temp
from service.low_temp_dist_service import column_prod_mass_flow, column_top_prod_mass_frac, column_bot_prod_mass_frac


app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.post("/simple_isomerization", response_model=SimpleIsoResponse)
def simple_isomerization(dto: SimpleIsoInitial):
    prediction = simple_isomerization_service(dto)[0]
    return {
        "product_concentration": round(prediction[0], 3),
        "product_temperature": round(prediction[1], 3)
    }


@app.post("/amine_treatment")
def amine_treatment(dto: AmineTreatmentInitial):
    prod_temp = amine_treatment_prod_temp(dto)

    dto.sweet_gas_temperature = round(prod_temp[0][0], 4)
    dto.rich_amine_temperature = round(prod_temp[0][1], 4)

    dto.rich_amine_mass_flow = amine_treatment_rich_amine_mass_flow(dto)[0][0]
    dto.sour_gas_mass_flow = (dto.sour_gas_mass_flow + dto.amine_mass_flow) - dto.rich_amine_mass_flow

    dto.feed_gas_mol_weight, dto.lean_amine_mol_weight, dto.rich_amine_mol_weight, dto.sweet_gas_mol_weight = amine_treatment_stream_mol_weight(dto)[0]

    dto.feed_gas_mol_flow = dto.sour_gas_mass_flow / dto.feed_gas_mol_weight
    dto.feed_gas_H2S_mol_flow = dto.feed_gas_mol_flow * dto.sour_gas_h2s
    dto.feed_gas_CO2_mol_flow = dto.feed_gas_mol_flow * dto.sour_gas_co2
    dto.lean_amine_mol_flow = dto.amine_mass_flow / dto.lean_amine_mol_weight
    dto.lean_amine_H2S_mol_flow = dto.lean_amine_mol_flow * dto.amine_h2s
    dto.lean_amine_CO2_mol_flow = dto.lean_amine_mol_flow * dto.amine_co2
    dto.rich_amine_mol_flow = dto.rich_amine_mass_flow / dto.rich_amine_mol_weight
    dto.sweet_gas_mol_flow = dto.sweet_gas_mass_flow / dto.sweet_gas_mol_weight

    sweet_gas_H2S_ppm_rate = sweet_gas_H2S_ppm(dto)[0][0]
    sweet_gas_CO2_ppm_rate = sweet_gas_CO2_ppm(dto)[0][0]

    rich_amine_H2S_mol_frac, rich_amine_CO2_mol_frac = rich_amine_sour_comp(dto)[0]

    rich_amine_H2O_mol_frac, rich_amine_MDEA_mol_frac = rich_amine_H2O_MDEA(dto)[0]

    if (rich_amine_H2O_mol_frac + rich_amine_MDEA_mol_frac) >= 1:
        rich_amine_H2O_mol_frac = 1 - (rich_amine_MDEA_mol_frac + rich_amine_H2S_mol_frac + rich_amine_CO2_mol_frac)

    return {
        "sweet_gas_temperature": round(prod_temp[0][0], 4),
        "rich_amine_temperature": round(prod_temp[0][1], 4),
        "rich_amine_mass_flow": round(dto.rich_amine_mass_flow, 4),
        "sweet_gas_mass_flow": round(dto.sour_gas_mass_flow, 4),
        "feed_gas_mol_weight": round(dto.feed_gas_mol_weight, 4),
        "lean_amine_mol_weight": round(dto.lean_amine_mol_weight, 4),
        "rich_amine_mol_weight": round(dto.rich_amine_mol_weight, 4),
        "sweet_gas_mol_weight": round(dto.sweet_gas_mol_weight, 4),
        "sweet_gas_h2s_ppm": round(sweet_gas_H2S_ppm_rate, 4),
        "sweet_gas_co2_ppm": round(sweet_gas_CO2_ppm_rate, 4),
        "rich_amine_h2s": round(rich_amine_H2S_mol_frac, 5),
        "rich_amine_co2": round(rich_amine_CO2_mol_frac, 5),
        "rich_amine_h2o": round(rich_amine_H2O_mol_frac, 5),
        "rich_amine_MDEA": round(rich_amine_MDEA_mol_frac, 5)
    }


@app.post('/low-temp-distillation')
def low_temp_distillation(dto: LowTempDistInitial):
    dto.sep_vap_mass_flow = separator_vapour_mass_flow(dto)
    dto.sep_liq_mass_flow = dto.feed_gas_mass_flow - dto.sep_vap_mass_flow
    if dto.sep_liq_mass_flow <= 0:
        dto.sep_liq_mass_flow = random.randint(3, 9)
        dto.sep_vap_mass_flow = dto.feed_gas_mass_flow - dto.sep_liq_mass_flow
    dto.sep_vap_ch4, dto.sep_vap_c2h6, dto.sep_vap_c3h8, dto.sep_vap_ic4h10, dto.sep_vap_nc4h10, dto.sep_vap_ic5h12, dto.sep_vap_nc5h12 = separator_vapour_mass_frac(dto)
    dto.sep_liq_ch4, dto.sep_liq_c2h6, dto.sep_liq_c3h8, dto.sep_liq_ic4h10, dto.sep_liq_nc4h10, dto.sep_liq_ic5h12, dto.sep_liq_nc5h12 = separator_liquid_mass_frac(dto)
    dto.cooled_gas_temperature = expander_cooled_gas_temp(dto)
    dto.expander_power = expander_power(dto)

    dto.column_top_prod_temp, dto.column_bot_prod_temp = column_prod_temp(dto)

    dto.column_top_prod_mass_flow = column_prod_mass_flow(dto)
    dto.column_bot_prod_mass_flow = dto.feed_gas_mass_flow - dto.column_top_prod_mass_flow

    dto.col_top_ch4, dto.col_top_c2h6, dto.col_top_c3h8, dto.col_top_ic4h10, dto.col_top_nc4h10, dto.col_top_ic5h12, dto.col_top_nc5h12 = column_top_prod_mass_frac(dto)

    dto.col_bot_ch4, dto.col_bot_c2h6, dto.col_bot_c3h8, dto.col_bot_ic4h10, dto.col_bot_nc4h10, dto.col_bot_ic5h12, dto.col_bot_nc5h12 = column_bot_prod_mass_frac(dto)
    return {
        "sep_vap_mass_flow": round(dto.sep_vap_mass_flow, 5),
        "sep_liq_mass_flow": round(dto.sep_liq_mass_flow, 5),
        "sep_vap_ch4": round(dto.sep_vap_ch4, 5),
        "sep_vap_c2h6": round(dto.sep_vap_c2h6, 5),
        "sep_vap_c3h8": round(dto.sep_vap_c3h8, 5),
        "sep_vap_ic4h10": round(dto.sep_vap_ic4h10, 5),
        "sep_vap_nc4h10": round(dto.sep_vap_nc4h10, 5),
        "sep_vap_ic5h12": round(dto.sep_vap_ic5h12, 5),
        "sep_vap_nc5h12": round(dto.sep_vap_nc5h12, 5),
        "sep_liq_ch4": round(dto.sep_liq_ch4, 5),
        "sep_liq_c2h6": round(dto.sep_liq_c2h6, 5),
        "sep_liq_c3h8": round(dto.sep_liq_c3h8, 5),
        "sep_liq_ic4h10": round(dto.sep_liq_ic4h10, 5),
        "sep_liq_nc4h10": round(dto.sep_liq_nc4h10, 5),
        "sep_liq_ic5h12": round(dto.sep_liq_ic5h12, 5),
        "sep_liq_nc5h12": round(dto.sep_liq_nc5h12, 5),
        "cooled_gas_temperature": round(dto.cooled_gas_temperature, 5),
        "expander_power": round(dto.expander_power, 5),
        "column_top_prod_temperature": round(dto.column_top_prod_temp, 5),
        "column_bot_prod_temperature": round(dto.column_bot_prod_temp, 5),
        "column_top_prod_mass_flow": round(dto.column_top_prod_mass_flow, 5),
        "column_bot_prod_mass_flow": round(dto.column_bot_prod_mass_flow, 5),
        "col_top_ch4": round(dto.col_top_ch4, 5),
        "col_top_c2h6": round(dto.col_top_c2h6, 5),
        "col_top_c3h8": round(dto.col_top_c3h8, 5),
        "col_top_ic4h10": round(dto.col_top_ic4h10, 5),
        "col_top_nc4h10": round(dto.col_top_nc4h10, 5),
        "col_top_ic5h12": round(dto.col_top_ic5h12, 5),
        "col_top_nc5h12": round(dto.col_top_nc5h12, 5),
        "col_bot_ch4": round(dto.col_bot_ch4, 5),
        "col_bot_c2h6": round(dto.col_bot_c2h6, 5),
        "col_bot_c3h8": round(dto.col_bot_c3h8, 5),
        "col_bot_ic4h10": round(dto.col_bot_ic4h10, 5),
        "col_bot_nc4h10": round(dto.col_bot_nc4h10, 5),
        "col_bot_ic5h12": round(dto.col_bot_ic5h12, 5),
        "col_bot_nc5h12": round(dto.col_bot_nc5h12, 5)
    }

