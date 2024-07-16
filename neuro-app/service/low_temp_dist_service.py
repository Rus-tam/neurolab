import pandas as pd
import joblib
import numpy as np
from models.low_temp_dist.low_temp_dist import gas_feed_dens_model, gas_feed_vap_fr_model
from models.low_temp_dist.low_temp_dist import sep_vap_comp_molar_flow_model, expander_gas_temp_model_exp_model
from models.low_temp_dist.low_temp_dist import expander_power_model, col_top_prod_comp_molar_flow_model
from models.low_temp_dist.low_temp_dist import col_top_temp_model


def gas_feed_dens_prediction(input_data):
    gas_feed_dens_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed molar flow, kgmole/h',
    'gas_feed Methane mass frac', 'gas_feed Ethane mass frac', 'gas_feed Propane mass frac', 'gas_feed i-Butane mass frac',
    'gas_feed n-Butane mass frac', 'gas_feed i-Pentane mass frac', 'gas_feed n-Pentane mass frac',
    ]]

    gas_feed_dens_transformer = joblib.load('./transformers/low_temp_dist_transformers/gas_feed_dens_transformer.pkl')
    gas_feed_dens_data_norm = gas_feed_dens_transformer.transform(gas_feed_dens_data)

    gas_feed_dens = gas_feed_dens_model(gas_feed_dens_data_norm).numpy().tolist()

    return gas_feed_dens[0][0]


def gas_feed_vap_fr_prediction(input_data):
    gas_feed_vap_fr_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h',
    'gas_feed molecular weight', 'gas_feed Mass density, kg/m3', 'gas_feed molar flow, kgmole/h',
    'gas_feed Methane mass frac', 'gas_feed Ethane mass frac', 'gas_feed Propane mass frac',
    'gas_feed i-Butane mass frac', 'gas_feed n-Butane mass frac', 'gas_feed i-Pentane mass frac',
    'gas_feed n-Pentane mass frac',
    ]]

    gas_feed_dens_transformer = joblib.load('./transformers/low_temp_dist_transformers/gas_feed_vap_fr_transformer.pkl')
    gas_feed_vap_fr_data_norm = gas_feed_dens_transformer.transform(gas_feed_vap_fr_data)

    gas_feed_vap_fr = gas_feed_vap_fr_model(gas_feed_vap_fr_data_norm).numpy().tolist()

    return gas_feed_vap_fr[0][0]


def sep_vap_comp_molar_flow_prediction(input_data):
    sep_vap_comp_molar_flow_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed Mass density, kg/m3', 'gas_feed vapour fraction', 'gas_feed molar flow, kgmole/h',
    'gas_feed Methane mass frac', 'gas_feed Ethane mass frac', 'gas_feed Propane mass frac', 'gas_feed i-Butane mass frac',
    'gas_feed n-Butane mass frac', 'gas_feed i-Pentane mass frac', 'gas_feed n-Pentane mass frac',
    'gas_feed vapour molar flow, kgmole/h', 'gas_feed liquid molar flow, kgmole/h', 'gas_feed Methane mass flow, kg/h',
    'gas_feed Ethane mass flow, kg/h', 'gas_feed Propane mass flow, kg/h', 'gas_feed i-Butane mass flow, kg/h',
    'gas_feed n-Butane mass flow, kg/h', 'gas_feed i-Pentane mass flow, kg/h', 'gas_feed n-Pentane mass flow, kg/h',
    'gas_feed Methane molar flow, kgmole/h', 'gas_feed Ethane molar flow, kgmole/h',
    'gas_feed Propane molar flow, kgmole/h', 'gas_feed i-Butane molar flow, kgmole/h',
    'gas_feed n-Butane molar flow, kgmole/h', 'gas_feed i-Pentane molar flow, kgmole/h',
    'gas_feed n-Pentane molar flow, kgmole/h',
    ]]

    sep_vap_comp_molar_flow_transformer = joblib.load('./transformers/low_temp_dist_transformers/sep_vap_comp_molar_transformer.pkl')
    sep_vap_comp_molar_flow_data_norm = sep_vap_comp_molar_flow_transformer.transform(sep_vap_comp_molar_flow_data)

    sep_vap_comp_molar_flow = sep_vap_comp_molar_flow_model(sep_vap_comp_molar_flow_data_norm).numpy()

    sep_vap_comp_molar_flow[sep_vap_comp_molar_flow < 0] = 0

    return sep_vap_comp_molar_flow


def expander_gas_temp_prediction(input_data):
    expander_gas_temp_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed Mass density, kg/m3', 'gas_feed vapour fraction', 'gas_feed molar flow, kgmole/h',
    'gas_feed vapour molar flow, kgmole/h', 'gas_feed liquid molar flow, kgmole/h',
    'gas_feed Methane molar flow, kgmole/h', 'gas_feed Ethane molar flow, kgmole/h',
    'gas_feed Propane molar flow, kgmole/h', 'gas_feed i-Butane molar flow, kgmole/h',
    'gas_feed n-Butane molar flow, kgmole/h', 'gas_feed i-Pentane molar flow, kgmole/h',
    'gas_feed n-Pentane molar flow, kgmole/h',
     '3 pressure, kPa',
    ]]

    expander_gas_temp_transformer = joblib.load('./transformers/low_temp_dist_transformers/expander_gas_temp_exp.pkl')
    expander_gas_temp_data_norm = expander_gas_temp_transformer.transform(expander_gas_temp_data)

    expander_gas_temp = expander_gas_temp_model_exp_model(expander_gas_temp_data_norm).numpy().tolist()

    return expander_gas_temp[0][0]


def expander_power_prediction(input_data):
    expander_power_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed Mass density, kg/m3', 'gas_feed vapour fraction', 'gas_feed molar flow, kgmole/h',
    'gas_feed vapour molar flow, kgmole/h', 'gas_feed liquid molar flow, kgmole/h',
    'gas_feed Methane molar flow, kgmole/h', 'gas_feed Ethane molar flow, kgmole/h',
    'gas_feed Propane molar flow, kgmole/h', 'gas_feed i-Butane molar flow, kgmole/h',
    'gas_feed n-Butane molar flow, kgmole/h', 'gas_feed i-Pentane molar flow, kgmole/h',
    'gas_feed n-Pentane molar flow, kgmole/h', '3 temperature, C', '3 pressure, kPa',
    ]]

    expander_power_transformer = joblib.load('./transformers/low_temp_dist_transformers/expander_power_tranformer.pkl')
    expander_power_data_norm = expander_power_transformer.transform(expander_power_data)

    expander_power = expander_power_model(expander_power_data_norm).numpy().tolist()

    return expander_power[0][0]


def col_top_prod_comp_molar_flow_prediction(input_data):
    col_top_prod_comp_molar_flow_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed Mass density, kg/m3', 'gas_feed vapour fraction',
    'gas_feed molar flow, kgmole/h', 'Comp Fraction', 'gas_feed vapour molar flow, kgmole/h',
    'gas_feed liquid molar flow, kgmole/h', 'gas_feed Methane molar flow, kgmole/h', 'gas_feed Ethane molar flow, kgmole/h',
    'gas_feed Propane molar flow, kgmole/h', 'gas_feed i-Butane molar flow, kgmole/h',
    'gas_feed n-Butane molar flow, kgmole/h', 'gas_feed i-Pentane molar flow, kgmole/h',
    'gas_feed n-Pentane molar flow, kgmole/h',
    ]]
    col_top_prod_comp_molar_flow_transformer = joblib.load('./transformers/low_temp_dist_transformers/column_top_prod_comp_molar_flow_transformer.pkl')
    col_top_prod_comp_molar_flow_data_norm = col_top_prod_comp_molar_flow_transformer.transform(col_top_prod_comp_molar_flow_data)

    col_top_prod_comp_molar_flow = col_top_prod_comp_molar_flow_model(col_top_prod_comp_molar_flow_data_norm).numpy().tolist()

    col_top_prod_comp_molar_flow = np.abs(col_top_prod_comp_molar_flow)

    return col_top_prod_comp_molar_flow


def col_top_temp_prediction(input_data):
    col_top_temp_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed Mass density, kg/m3', 'gas_feed vapour fraction', 'gas_feed molar flow, kgmole/h',
    'Comp Fraction',
    'gas_feed vapour molar flow, kgmole/h', 'gas_feed liquid molar flow, kgmole/h',
    'gas_feed Methane molar flow, kgmole/h', 'gas_feed Ethane molar flow, kgmole/h',
    'gas_feed Propane molar flow, kgmole/h', 'gas_feed i-Butane molar flow, kgmole/h',
    'gas_feed n-Butane molar flow, kgmole/h', 'gas_feed i-Pentane molar flow, kgmole/h',
    'gas_feed n-Pentane molar flow, kgmole/h',
    '16 molar flow, kgmole/h', '16 Methane molar flow, kgmole/h', '16 Ethane molar flow, kgmole/h',
    '16 Propane molar flow, kgmole/h', '16 i-Butane molar flow, kgmole/h', '16 n-Butane molar flow, kgmole/h',
    '16 i-Pentane molar flow, kgmole/h', '16 n-Pentane molar flow, kgmole/h',
    ]]

    col_top_temp_transformer = joblib.load('./transformers/low_temp_dist_transformers/col_top_temp_transformer.pkl')
    col_top_temp_data_norm = col_top_temp_transformer.transform(col_top_temp_data)

    col_top_temp = col_top_temp_model(col_top_temp_data_norm).numpy().tolist()

    return col_top_temp[0]






