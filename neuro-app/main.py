import random
import pandas as pd

from fastapi import FastAPI
from dto.dto import SimpleIsoInitial, SimpleIsoResponse, AmineTreatmentInitial, LowTempDistInitial
from service.simple_isomerization_service import simple_isomerization_service
from service.low_temp_dist_service import gas_feed_dens_prediction, gas_feed_vap_fr_prediction
from service.low_temp_dist_service import sep_vap_comp_molar_flow_prediction, expander_gas_temp_prediction
from service.low_temp_dist_service import expander_power_prediction, col_top_prod_comp_molar_flow_prediction
from service.low_temp_dist_service import col_top_temp_prediction, col_bot_temperature_prediction, column_power_prediction
from service.amine_treatment_service import feed_gas_mol_weight_prediction, lean_amine_mol_weight_prediction
from service.amine_treatment_service import feed_gas_dens_prediction, lean_amine_dens_prediction
from service.amine_treatment_service import sweet_gas_temp_prediction, sweet_gas_molar_flow_prediction
from service.amine_treatment_service import rich_amine_temp_prediction, rich_amine_H2S_molar_flow_prediction
from service.amine_treatment_service import rich_amine_CO2_molar_flow_prediction, sweet_gas_mol_weight_prediction
from utils.AmineTreatmentClass import AmineTreatment
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
    initial_data = AmineTreatment.initial_calculations(dto)
    initial_data['feed_gas molecular weight'] = feed_gas_mol_weight_prediction(initial_data)
    initial_data['lean_amine molecular weight'] = lean_amine_mol_weight_prediction(initial_data)
    initial_data['feed_gas Mass density, kg/m3'] = feed_gas_dens_prediction(initial_data)
    initial_data['lean_amine Mass density, kg/m3'] = lean_amine_dens_prediction(initial_data)
    initial_data['sweet_gas temperature, C'] = sweet_gas_temp_prediction(initial_data)
    initial_data['sweet_gas molar flow, kgmol/h'] = sweet_gas_molar_flow_prediction(initial_data)

    initial_data['rich_amine molar flow, kgmol/h'] = (initial_data['feed_gas molar flow, kgmol/h'] + initial_data['lean_amine molar flow, kgmol/h']) - initial_data['sweet_gas molar flow, kgmol/h']

    initial_data['rich_amine temperature, C'] = rich_amine_temp_prediction(initial_data)
    initial_data['rich_amine H2S molar flow, kgmol/h'] = rich_amine_H2S_molar_flow_prediction(initial_data)

    initial_data['sweet_gas H2S molar flow, kgmol/h'] = (initial_data['lean_amine H2S molar flow, kgmol/h'] + initial_data['feed_gas H2S molar flow, kgmol/h']) - initial_data['rich_amine H2S molar flow, kgmol/h']

    initial_data['rich_amine CO2 molar flow, kgmol/h'] = rich_amine_CO2_molar_flow_prediction(initial_data)

    initial_data['sweet_gas CO2 molar flow, kgmol/h'] = (initial_data['lean_amine CO2 molar flow, kgmol/h'] +
                                                         initial_data['feed_gas CO2 molar flow, kgmol/h']) - \
                                                        initial_data['rich_amine CO2 molar flow, kgmol/h']

    initial_data['sweet_gas molecular weight'] = sweet_gas_mol_weight_prediction(initial_data)

    print('+++++++++++++++++++++++')
    print(initial_data['feed_gas molecular weight'])
    print(initial_data['lean_amine molecular weight'])
    print(initial_data['feed_gas Mass density, kg/m3'])
    print(initial_data['lean_amine Mass density, kg/m3'])
    print(initial_data['sweet_gas temperature, C'])
    print(initial_data['sweet_gas molar flow, kgmol/h'])
    print(initial_data['rich_amine molar flow, kgmol/h'])
    print(initial_data['rich_amine temperature, C'])
    print(initial_data['rich_amine H2S molar flow, kgmol/h'])
    print(initial_data['sweet_gas H2S molar flow, kgmol/h'])
    print(initial_data['rich_amine CO2 molar flow, kgmol/h'])
    print(initial_data['sweet_gas CO2 molar flow, kgmol/h'])
    print(initial_data['sweet_gas molecular weight'])
    print('+++++++++++++++++++++++')
    print('==================')



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

    input_data['Q-104'] = column_power_prediction(input_data)

    mass_fr = {
    '1 Methane mass fr': input_data['1 Methane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 Ethane mass fr': input_data['1 Ethane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 Propane mass fr': input_data['1 Propane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 i-Butane mass fr': input_data['1 i-Butane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 n-Butane mass fr': input_data['1 n-Butane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 i-Pentane mass fr': input_data['1 i-Pentane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],
    '1 n-Pentane mass fr': input_data['1 n-Pentane mass flow, kg/h'] / input_data['1 mass flow, kg/h'],

    '2 Methane mass fr': input_data['2 Methane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 Ethane mass fr': input_data['2 Ethane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 Propane mass fr': input_data['2 Propane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 i-Butane mass fr': input_data['2 i-Butane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 n-Butane mass fr': input_data['2 n-Butane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 i-Pentane mass fr': input_data['2 i-Pentane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],
    '2 n-Pentane mass fr': input_data['2 n-Pentane mass flow, kg/h'] / input_data['2 mass flow, kg/h'],

    '16 Methane mass fr': input_data['16 Methane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 Ethane mass fr': input_data['16 Ethane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 Propane mass fr': input_data['16 Propane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 i-Butane mass fr': input_data['16 i-Butane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 n-Butane mass fr': input_data['16 n-Butane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 i-Pentane mass fr': input_data['16 i-Pentane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],
    '16 n-Pentane mass fr': input_data['16 n-Pentane mass flow, kg/h'] / input_data['16 mass flow, kg/h'],

    '17 Methane mass fr': input_data['17 Methane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 Ethane mass fr': input_data['17 Ethane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 Propane mass fr': input_data['17 Propane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 i-Butane mass fr': input_data['17 i-Butane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 n-Butane mass fr': input_data['17 n-Butane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 i-Pentane mass fr': input_data['17 i-Pentane mass flow, kg/h'] / input_data['17 mass flow, kg/h'],
    '17 n-Pentane mass fr': input_data['17 n-Pentane mass flow, kg/h'] / input_data['17 mass flow, kg/h']
    }

    mass_fr_df = pd.DataFrame(mass_fr)

    input_data = pd.concat([input_data, mass_fr_df], axis=1)

    results = LowTempDist.prepare_results(input_data)

    return results





