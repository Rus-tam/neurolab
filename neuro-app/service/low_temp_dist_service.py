import pandas as pd
import joblib
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data
from dto.dto import LowTempDistInitial
from utils.LowTempDistClass import LowTempDist
from models.low_temp_dist.low_temp_dist import gas_feed_dens_model, gas_feed_vap_fr_model
from models.low_temp_dist.low_temp_dist import sep_vap_comp_molar_flow_model


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
