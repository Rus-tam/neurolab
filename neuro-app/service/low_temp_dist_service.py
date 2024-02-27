import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data
from dto.dto import LowTempDistInitial
from data.low_temp_distillation.low_temp_dist_data import sep_vap_mass_flow_data, sep_vap_mass_frac_data, sep_liq_mass_frac_data
from models.low_temp_distillation.low_temp_distillation import sep_vap_mass_flow_model, sep_vap_mass_frac_model, sep_liq_mass_frac_model
from data.low_temp_distillation.low_temp_dist_data import cooled_gas_temp_data, expander_power_data
from models.low_temp_distillation.low_temp_distillation import expander_cooled_gas_model, expander_power_model

column = [
    'gas_feed temperature, C', 'gas_feed pressure, kPa', 'gas_feed mass flow, kg/h', 'gas_feed Methane mass frac',
    'gas_feed Ethane mass frac', 'gas_feed Propane mass frac', 'gas_feed i-Butane mass frac',
    'gas_feed n-Butane mass frac',
    'gas_feed i-Pentane mass frac', 'gas_feed n-Pentane mass frac',
]

columns_expander = [
    '1 temperature, C', '1 pressure, kPa', '1 mass flow, kg/h', '1 Methane mass frac', '1 Ethane mass frac',
    '1 Propane mass frac', '1 i-Butane mass frac', '1 n-Butane mass frac', '1 i-Pentane mass frac',
    '1 n-Pentane mass frac', '3 pressure, kPa',
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

    return vapour_mass_flow[0][0]


def separator_vapour_mass_frac(dto: LowTempDistInitial):
    data = prepare_low_temp_data(dto)
    initial_data = pd.DataFrame({
        **data,
        '1 mass flow, kg/h': [dto.sep_vap_mass_flow],
        '2 mass flow, kg/h': [dto.sep_liq_mass_flow]
    })
    labels = [
        '1 Methane mass frac', '1 Ethane mass frac', '1 Propane mass frac', '1 i-Butane mass frac',
        '1 n-Butane mass frac', '1 i-Pentane mass frac', '1 n-Pentane mass frac'
    ]
    columns = [*column, '1 mass flow, kg/h', '2 mass flow, kg/h']
    norm_vap_mass_frac_norm_data = normalize_data(sep_vap_mass_frac_data, initial_data, columns, labels)
    vapour_mass_frac = sep_vap_mass_frac_model(norm_vap_mass_frac_norm_data).numpy().tolist()[0]

    return vapour_mass_frac


def separator_liquid_mass_frac(dto: LowTempDistInitial):
    data = prepare_low_temp_data(dto)
    initial_data = pd.DataFrame({
        **data,
        '1 mass flow, kg/h': [dto.sep_vap_mass_flow], '2 mass flow, kg/h': [dto.sep_liq_mass_flow],
        '1 Methane mass frac': [dto.sep_vap_ch4], '1 Ethane mass frac': [dto.sep_vap_c2h6],
        '1 Propane mass frac': [dto.sep_vap_c3h8], '1 i-Butane mass frac': [dto.sep_vap_ic4h10],
        '1 n-Butane mass frac': [dto.sep_vap_nc4h10], '1 i-Pentane mass frac': [dto.sep_vap_ic5h12],
        '1 n-Pentane mass frac': [dto.sep_vap_nc5h12]
    })
    labels = [
        '2 Methane mass frac', '2 Ethane mass frac', '2 Propane mass frac', '2 i-Butane mass frac',
        '2 n-Butane mass frac', '2 i-Pentane mass frac', '2 n-Pentane mass frac'
    ]
    columns = [*column, '1 mass flow, kg/h', '2 mass flow, kg/h', '1 Methane mass frac', '1 Ethane mass frac',
               '1 Propane mass frac', '1 i-Butane mass frac', '1 n-Butane mass frac',
               '1 i-Pentane mass frac', '1 n-Pentane mass frac']
    norm_vap_liq_mass_frac_data = normalize_data(sep_liq_mass_frac_data, initial_data, columns, labels)

    liq_mass_frac = sep_liq_mass_frac_model(norm_vap_liq_mass_frac_data).numpy().tolist()[0]

    return liq_mass_frac


def expander_cooled_gas_temp(dto: LowTempDistInitial):
    initial_data = pd.DataFrame({
    '1 temperature, C': [dto.feed_gas_temperature], '1 pressure, kPa': [dto.feed_gas_pressure],
    '1 mass flow, kg/h': [dto.sep_vap_mass_flow], '1 Methane mass frac': [dto.sep_vap_ch4],
    '1 Ethane mass frac': [dto.sep_vap_c2h6], '1 Propane mass frac': [dto.sep_vap_c3h8],
    '1 i-Butane mass frac': [dto.sep_vap_ic4h10], '1 n-Butane mass frac': [dto.sep_vap_nc4h10],
    '1 i-Pentane mass frac': [dto.sep_vap_ic5h12], '1 n-Pentane mass frac': [dto.sep_vap_nc5h12],
    '3 pressure, kPa': [dto.cooled_gas_pressure]
    })
    labels = ['3 temperature, C']
    columns = [*columns_expander]
    norm_expander_cooled_gas_temp_data = normalize_data(cooled_gas_temp_data, initial_data, columns, labels)
    cooled_gas_temp = expander_cooled_gas_model(norm_expander_cooled_gas_temp_data).numpy().tolist()[0][0]

    return cooled_gas_temp


def expander_power(dto: LowTempDistInitial):
    initial_data = pd.DataFrame({
    '1 temperature, C': [dto.feed_gas_temperature], '1 pressure, kPa': [dto.feed_gas_pressure],
    '1 mass flow, kg/h': [dto.sep_vap_mass_flow], '1 Methane mass frac': [dto.sep_vap_ch4],
    '1 Ethane mass frac': [dto.sep_vap_c2h6], '1 Propane mass frac': [dto.sep_vap_c3h8],
    '1 i-Butane mass frac': [dto.sep_vap_ic4h10], '1 n-Butane mass frac': [dto.sep_vap_nc4h10],
    '1 i-Pentane mass frac': [dto.sep_vap_ic5h12], '1 n-Pentane mass frac': [dto.sep_vap_nc5h12],
    '3 temperature, C': [dto.cooled_gas_temperature], '3 pressure, kPa': [dto.cooled_gas_pressure]
    })
    labels = ['Q-100']
    columns = [*columns_expander, '3 temperature, C']
    norm_expander_power_data = normalize_data(expander_power_data, initial_data, columns, labels)
    exp_data = expander_power_model(norm_expander_power_data).numpy().tolist()[0][0]

    return exp_data



    # print(' ')
    # print('+++++++++++')
    # print(exp_data)
    # print('+++++++++++')
    # print(' ')




