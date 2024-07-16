import random
import pandas as pd

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
from service.low_temp_dist_service import gas_feed_dens_prediction, gas_feed_vap_fr_prediction
from service.low_temp_dist_service import sep_vap_comp_molar_flow_prediction, expander_gas_temp_prediction
from service.low_temp_dist_service import expander_power_prediction, col_top_prod_comp_molar_flow_prediction
from service.low_temp_dist_service import col_top_temp_prediction, col_bot_temperature_prediction
from utils.LowTempDistClass import LowTempDist

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


@app.post("/low-temp-distillation")
def low_temp_distillation(dto: LowTempDistInitial):
    input_data = LowTempDist.initial_calculation(dto)
    input_data['gas_feed Mass density, kg/m3'] = gas_feed_dens_prediction(input_data)
    input_data['gas_feed vapour fraction'] = gas_feed_vap_fr_prediction(input_data)

    input_data = LowTempDist.phase_molar_flow(input_data)

    sep_vap_comp_molar_flow = sep_vap_comp_molar_flow_prediction(input_data)
    input_data['1 Methane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][0]
    input_data['1 Ethane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][1]
    input_data['1 Propane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][2]
    input_data['1 i-Butane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][3]
    input_data['1 n-Butane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][4]
    input_data['1 i-Pentane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][5]
    input_data['1 n-Pentane molar flow, kgmole/h'] = sep_vap_comp_molar_flow[0][6]

    input_data['1 Methane mass flow, kg/h'] = input_data['1 Methane molar flow, kgmole/h'] * 16.04
    input_data['1 Ethane mass flow, kg/h'] = input_data['1 Ethane molar flow, kgmole/h'] * 30
    input_data['1 Propane mass flow, kg/h'] = input_data['1 Propane molar flow, kgmole/h'] * 44
    input_data['1 i-Butane mass flow, kg/h'] = input_data['1 i-Butane molar flow, kgmole/h'] * 58.12
    input_data['1 n-Butane mass flow, kg/h'] = input_data['1 n-Butane molar flow, kgmole/h'] * 58.12
    input_data['1 i-Pentane mass flow, kg/h'] = input_data['1 i-Pentane molar flow, kgmole/h'] * 72.15
    input_data['1 n-Pentane mass flow, kg/h'] = input_data['1 n-Pentane molar flow, kgmole/h'] * 72.15

    input_data['2 Methane molar flow, kgmole/h'] = input_data['gas_feed Methane molar flow, kgmole/h'] - input_data[
        '1 Methane molar flow, kgmole/h']
    input_data['2 Ethane molar flow, kgmole/h'] = input_data['gas_feed Ethane molar flow, kgmole/h'] - input_data[
        '1 Ethane molar flow, kgmole/h']
    input_data['2 Propane molar flow, kgmole/h'] = input_data['gas_feed Propane molar flow, kgmole/h'] - input_data[
        '1 Propane molar flow, kgmole/h']
    input_data['2 i-Butane molar flow, kgmole/h'] = input_data['gas_feed i-Butane molar flow, kgmole/h'] - input_data[
        '1 i-Butane molar flow, kgmole/h']
    input_data['2 n-Butane molar flow, kgmole/h'] = input_data['gas_feed n-Butane molar flow, kgmole/h'] - input_data[
        '1 n-Butane molar flow, kgmole/h']
    input_data['2 i-Pentane molar flow, kgmole/h'] = input_data['gas_feed i-Pentane molar flow, kgmole/h'] - input_data[
        '1 i-Pentane molar flow, kgmole/h']
    input_data['2 n-Pentane molar flow, kgmole/h'] = input_data['gas_feed n-Pentane molar flow, kgmole/h'] - input_data[
        '1 n-Pentane molar flow, kgmole/h']

    input_data['2 Methane mass flow, kg/h'] = input_data['gas_feed Methane mass flow, kg/h'] - input_data[
        '1 Methane mass flow, kg/h']
    input_data['2 Ethane mass flow, kg/h'] = input_data['gas_feed Ethane mass flow, kg/h'] - input_data[
        '1 Ethane mass flow, kg/h']
    input_data['2 Propane mass flow, kg/h'] = input_data['gas_feed Propane mass flow, kg/h'] - input_data[
        '1 Propane mass flow, kg/h']
    input_data['2 i-Butane mass flow, kg/h'] = input_data['gas_feed i-Butane mass flow, kg/h'] - input_data[
        '1 i-Butane mass flow, kg/h']
    input_data['2 n-Butane mass flow, kg/h'] = input_data['gas_feed n-Butane mass flow, kg/h'] - input_data[
        '1 n-Butane mass flow, kg/h']
    input_data['2 i-Pentane mass flow, kg/h'] = input_data['gas_feed i-Pentane mass flow, kg/h'] - input_data[
        '1 i-Pentane mass flow, kg/h']
    input_data['2 n-Pentane mass flow, kg/h'] = input_data['gas_feed n-Pentane mass flow, kg/h'] - input_data[
        '1 n-Pentane mass flow, kg/h']

    cols_1_mass_flow = [
        '1 Methane mass flow, kg/h', '1 Ethane mass flow, kg/h', '1 Propane mass flow, kg/h',
        '1 i-Butane mass flow, kg/h',
        '1 n-Butane mass flow, kg/h', '1 i-Pentane mass flow, kg/h', '1 n-Pentane mass flow, kg/h'
    ]
    cols_1_molar_flow = [
        '1 Methane molar flow, kgmole/h', '1 Ethane molar flow, kgmole/h', '1 Propane molar flow, kgmole/h',
        '1 i-Butane molar flow, kgmole/h', '1 n-Butane molar flow, kgmole/h', '1 i-Pentane molar flow, kgmole/h',
        '1 n-Pentane molar flow, kgmole/h'
    ]

    input_data['1 mass flow, kg/h'] = input_data[cols_1_mass_flow].sum(axis=1)
    input_data['1 molar flow, kgmole/h'] = input_data[cols_1_molar_flow].sum(axis=1)
    input_data['2 mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] - input_data['1 mass flow, kg/h']
    input_data['2 molar flow, kgmole/h'] = input_data['gas_feed molar flow, kgmole/h'] - input_data[
        '1 molar flow, kgmole/h']

    input_data['3 temperature, C'] = expander_gas_temp_prediction(input_data)
    input_data['Q-100'] = expander_power_prediction(input_data)

    col_top_prod_comp_molar_flow = col_top_prod_comp_molar_flow_prediction(input_data)

    input_data['16 Methane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][0]
    input_data['16 Ethane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][1]
    input_data['16 Propane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][2]
    input_data['16 i-Butane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][3]
    input_data['16 n-Butane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][4]
    input_data['16 i-Pentane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][5]
    input_data['16 n-Pentane molar flow, kgmole/h'] = col_top_prod_comp_molar_flow[0][6]

    input_data['16 Methane mass flow, kg/h'] = input_data['16 Methane molar flow, kgmole/h'] * 16.04
    input_data['16 Ethane mass flow, kg/h'] = input_data['16 Ethane molar flow, kgmole/h'] * 30
    input_data['16 Propane mass flow, kg/h'] = input_data['16 Propane molar flow, kgmole/h'] * 44
    input_data['16 i-Butane mass flow, kg/h'] = input_data['16 i-Butane molar flow, kgmole/h'] * 58.12
    input_data['16 n-Butane mass flow, kg/h'] = input_data['16 n-Butane molar flow, kgmole/h'] * 58.12
    input_data['16 i-Pentane mass flow, kg/h'] = input_data['16 i-Pentane molar flow, kgmole/h'] * 72.15
    input_data['16 n-Pentane mass flow, kg/h'] = input_data['16 n-Pentane molar flow, kgmole/h'] * 72.15

    input_data['17 Methane molar flow, kgmole/h'] = input_data['gas_feed Methane molar flow, kgmole/h'] - input_data[
        '16 Methane molar flow, kgmole/h']
    input_data['17 Ethane molar flow, kgmole/h'] = input_data['gas_feed Ethane molar flow, kgmole/h'] - input_data[
        '16 Ethane molar flow, kgmole/h']
    input_data['17 Propane molar flow, kgmole/h'] = input_data['gas_feed Propane molar flow, kgmole/h'] - input_data[
        '16 Propane molar flow, kgmole/h']
    input_data['17 i-Butane molar flow, kgmole/h'] = input_data['gas_feed i-Butane molar flow, kgmole/h'] - input_data[
        '16 i-Butane molar flow, kgmole/h']
    input_data['17 n-Butane molar flow, kgmole/h'] = input_data['gas_feed n-Butane molar flow, kgmole/h'] - input_data[
        '16 n-Butane molar flow, kgmole/h']
    input_data['17 i-Pentane molar flow, kgmole/h'] = input_data['gas_feed i-Pentane molar flow, kgmole/h'] - \
                                                      input_data['16 i-Pentane molar flow, kgmole/h']
    input_data['17 n-Pentane molar flow, kgmole/h'] = input_data['gas_feed n-Pentane molar flow, kgmole/h'] - \
                                                      input_data['16 n-Pentane molar flow, kgmole/h']

    input_data['17 Methane mass flow, kg/h'] = input_data['17 Methane molar flow, kgmole/h'] * 16.04
    input_data['17 Ethane mass flow, kg/h'] = input_data['17 Ethane molar flow, kgmole/h'] * 30
    input_data['17 Propane mass flow, kg/h'] = input_data['17 Propane molar flow, kgmole/h'] * 44
    input_data['17 i-Butane mass flow, kg/h'] = input_data['17 i-Butane molar flow, kgmole/h'] * 58.12
    input_data['17 n-Butane mass flow, kg/h'] = input_data['17 n-Butane molar flow, kgmole/h'] * 58.12
    input_data['17 i-Pentane mass flow, kg/h'] = input_data['17 i-Pentane molar flow, kgmole/h'] * 72.15
    input_data['17 n-Pentane mass flow, kg/h'] = input_data['17 n-Pentane molar flow, kgmole/h'] * 72.15

    cols_16_mass_flow = [
        '16 Methane mass flow, kg/h', '16 Ethane mass flow, kg/h', '16 Propane mass flow, kg/h',
        '16 i-Butane mass flow, kg/h',
        '16 n-Butane mass flow, kg/h', '16 i-Pentane mass flow, kg/h', '16 n-Pentane mass flow, kg/h'
    ]
    cols_16_molar_flow = [
        '16 Methane molar flow, kgmole/h', '16 Ethane molar flow, kgmole/h', '16 Propane molar flow, kgmole/h',
        '16 i-Butane molar flow, kgmole/h', '16 n-Butane molar flow, kgmole/h', '16 i-Pentane molar flow, kgmole/h',
        '16 n-Pentane molar flow, kgmole/h'
    ]

    input_data['16 mass flow, kg/h'] = input_data[cols_16_mass_flow].sum(axis=1)
    input_data['16 molar flow, kgmole/h'] = input_data[cols_16_molar_flow].sum(axis=1)
    input_data['17 mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] - input_data['16 mass flow, kg/h']
    input_data['17 molar flow, kgmole/h'] = input_data['gas_feed molar flow, kgmole/h'] - input_data[
        '16 molar flow, kgmole/h']

    input_data['16 temperature, C'] = col_top_temp_prediction(input_data)
    input_data['17 temperature, C'] = col_bot_temperature_prediction(input_data)

    return input_data.to_dict(orient='list')





