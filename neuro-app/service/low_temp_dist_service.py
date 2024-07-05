import pandas as pd
import joblib
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data
from dto.dto import LowTempDistInitial
from utils.LowTempDistClass import LowTempDist
from models.low_temp_dist.low_temp_dist import gas_feed_dens_model


def gas_feed_dens_prediction(dto: LowTempDistInitial):
    input_data = LowTempDist.initial_calculation(dto)

    gas_feed_dens_data = input_data[[
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed molecular weight',
    'gas_feed molar flow, kgmole/h',
    'gas_feed Methane mass frac', 'gas_feed Ethane mass frac', 'gas_feed Propane mass frac', 'gas_feed i-Butane mass frac',
    'gas_feed n-Butane mass frac', 'gas_feed i-Pentane mass frac', 'gas_feed n-Pentane mass frac',
    ]]

    gas_feed_dens_transformer = joblib.load('./transformers/low_temp_dist_transformers/gas_feed_dens_transformer.pkl')
    gas_feed_dens_data_norm = gas_feed_dens_transformer.transform(gas_feed_dens_data)

    gas_feed_dens = gas_feed_dens_model.predict(gas_feed_dens_data_norm)

    return gas_feed_dens[0][0]
