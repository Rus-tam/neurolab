import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data
from dto.dto import LowTempDistInitial
from data.low_temp_distillation.low_temp_dist import feed_prod_vol_flow_data, sep_prod_mass_flow_data
from data.low_temp_distillation.low_temp_dist import sep_prod_vol_flow_data
from utils.LowTempDistClass import LowTempDist


def gas_feed_dens(dto: LowTempDistInitial):
    input_data = LowTempDist.initial_calculation(dto)

