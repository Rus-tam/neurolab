import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data
from dto.dto import LowTempDistInitial
from data.low_temp_distillation.low_temp_dist_data import sep_vap_mass_flow_data
from models.low_temp_distillation.low_temp_distillation import sep_vap_mass_flow_model

column = [
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed Methane mass frac',
    'gas_feed Ethane mass frac', 'gas_feed Propane mass frac', 'gas_feed i-Butane mass frac',
    'gas_feed n-Butane mass frac',
    'gas_feed i-Pentane mass frac', 'gas_feed n-Pentane mass frac',
]


def normalize_data(example_data, input_data, columns, labels):
    x = example_data[columns]
    y = example_data[labels]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
    ct = make_column_transformer(
        (MinMaxScaler(), columns)
    )
    ct.fit(x_train)
    return ct.transform(input_data)


def separator_vapour_mass_flow(dto: LowTempDistInitial):
    data = prepare_low_temp_data(dto)
    initial_data = pd.DataFrame(data)
    labels = ['1 mass flow, kg/h']
    columns = column

    norm_vap_mass_flow_data = normalize_data(sep_vap_mass_flow_data, initial_data, columns, labels)

    vapour_mass_flow = sep_vap_mass_flow_model(norm_vap_mass_flow_data).numpy().tolist()

    return vapour_mass_flow

