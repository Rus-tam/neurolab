import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from utils.initial_data_handler import prepare_low_temp_data, prepare_low_temp_column_data
from dto.dto import LowTempDistInitial
from data.low_temp_distillation.low_temp_dist_data import sep_vap_mass_flow_data, sep_vap_mass_frac_data, sep_liq_mass_frac_data
from models.low_temp_distillation.low_temp_distillation import sep_vap_mass_flow_model, sep_vap_mass_frac_model, sep_liq_mass_frac_model
from data.low_temp_distillation.low_temp_dist_data import cooled_gas_temp_data, expander_power_data
from models.low_temp_distillation.low_temp_distillation import expander_cooled_gas_model, expander_power_model
from data.low_temp_distillation.low_temp_dist_data import column_prod_temp_data, column_prod_mass_flow_data
from models.low_temp_distillation.low_temp_distillation import column_prod_temp_model, column_prod_mass_flow_model
from data.low_temp_distillation.low_temp_dist_data import column_top_prod_mass_frac_data, column_bot_prod_mass_frac_data
from models.low_temp_distillation.low_temp_distillation import column_top_prod_mass_frac_model, column_bot_prod_mass_frac_model




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


def column_prod_temp(dto: LowTempDistInitial):
    data = prepare_low_temp_column_data(dto)
    initial_data = pd.DataFrame(data)

    labels = ['16 temperature, C', '17 temperature, C']
    columns = [
        '4 temperature, C', '4 pressure, kPa', '4 mass flow, kg/h',  '4 Methane mass frac',
        '4 Ethane mass frac', '4 Propane mass frac', '4 i-Butane mass frac', '4 n-Butane mass frac',
        '4 i-Pentane mass frac', '4 n-Pentane mass frac', 'Q-104',
        '5 temperature, C', '5 pressure, kPa', '5 mass flow, kg/h', '5 Methane mass frac',
        '5 Ethane mass frac', '5 Propane mass frac', '5 i-Butane mass frac', '5 n-Butane mass frac',
        '5 i-Pentane mass frac', '5 n-Pentane mass frac'
    ]
    norm_column_prod_temp_data = normalize_data(column_prod_temp_data, initial_data, columns, labels)

    return column_prod_temp_model(norm_column_prod_temp_data).numpy().tolist()[0]


def column_prod_mass_flow(dto: LowTempDistInitial):
    data = prepare_low_temp_column_data(dto)
    initial_data = pd.DataFrame({
        **data,
        '16 temperature, C': [dto.column_top_prod_temp], '17 temperature, C': [dto.column_bot_prod_temp]
    })
    labels = ['16 mass flow, kg/h']
    columns = [
        '4 temperature, C', '4 pressure, kPa', '4 mass flow, kg/h', '4 Methane mass frac', '4 Ethane mass frac',
        '4 Propane mass frac', '4 i-Butane mass frac', '4 n-Butane mass frac', '4 i-Pentane mass frac',
        '4 n-Pentane mass frac',
        'Q-104',
        '5 temperature, C', '5 pressure, kPa', '5 mass flow, kg/h', '5 Methane mass frac', '5 Ethane mass frac',
        '5 Propane mass frac', '5 i-Butane mass frac', '5 n-Butane mass frac', '5 i-Pentane mass frac',
        '5 n-Pentane mass frac', '16 temperature, C', '17 temperature, C'
    ]
    norm_column_prod_mass_data = normalize_data(column_prod_mass_flow_data, initial_data, columns, labels)

    return column_prod_mass_flow_model(norm_column_prod_mass_data).numpy().tolist()[0][0]


def column_top_prod_mass_frac(dto: LowTempDistInitial):
    data = prepare_low_temp_column_data(dto)
    initial_data = pd.DataFrame({
        **data,
        '16 temperature, C': [dto.column_top_prod_temp], '17 temperature, C': [dto.column_bot_prod_temp],
        '16 mass flow, kg/h': [dto.column_top_prod_mass_flow], '17 mass flow, kg/h': [dto.column_bot_prod_mass_flow]
    })
    labels = [
        '16 Methane mass frac', '16 Ethane mass frac', '16 Propane mass frac', '16 i-Butane mass frac',
        '16 n-Butane mass frac', '16 i-Pentane mass frac', '16 n-Pentane mass frac'
    ]
    columns = [
        '4 temperature, C', '4 pressure, kPa', '4 mass flow, kg/h', '4 Methane mass frac', '4 Ethane mass frac',
        '4 Propane mass frac', '4 i-Butane mass frac', '4 n-Butane mass frac', '4 i-Pentane mass frac',
        '4 n-Pentane mass frac',
        'Q-104',
        '5 temperature, C', '5 pressure, kPa', '5 mass flow, kg/h', '5 Methane mass frac', '5 Ethane mass frac',
        '5 Propane mass frac', '5 i-Butane mass frac', '5 n-Butane mass frac', '5 i-Pentane mass frac',
        '5 n-Pentane mass frac', '16 temperature, C', '17 temperature, C', '16 mass flow, kg/h', '17 mass flow, kg/h',
    ]
    norm_column_top_prod_mass_frac_data = normalize_data(column_top_prod_mass_frac_data, initial_data, columns, labels)

    column_prod_mass_frac = column_top_prod_mass_frac_model(norm_column_top_prod_mass_frac_data).numpy().tolist()[0]

    top_prod_mass_frac = []
    for elem in column_prod_mass_frac:
        if elem < 0:
            top_prod_mass_frac.append(0.0)
        else:
            top_prod_mass_frac.append(elem)

    return top_prod_mass_frac


def column_bot_prod_mass_frac(dto: LowTempDistInitial):
    data = prepare_low_temp_column_data(dto)
    initial_data = pd.DataFrame({
        **data,
        '16 temperature, C': [dto.column_top_prod_temp], '17 temperature, C': [dto.column_bot_prod_temp],
        '16 mass flow, kg/h': [dto.column_top_prod_mass_flow], '17 mass flow, kg/h': [dto.column_bot_prod_mass_flow],
        '16 Methane mass frac': [dto.col_top_ch4], '16 Ethane mass frac': [dto.col_top_c2h6],
        '16 Propane mass frac': [dto.col_top_c3h8], '16 i-Butane mass frac': [dto.col_top_ic4h10],
        '16 n-Butane mass frac': [dto.col_top_nc4h10], '16 i-Pentane mass frac': [dto.col_top_ic5h12],
        '16 n-Pentane mass frac': [dto.col_top_nc5h12]
    })
    labels = [
    '17 Methane mass frac', '17 Ethane mass frac', '17 Propane mass frac', '17 i-Butane mass frac',
    '17 n-Butane mass frac', '17 i-Pentane mass frac', '17 n-Pentane mass frac'
    ]
    columns = [
        '4 temperature, C', '4 pressure, kPa', '4 mass flow, kg/h', '4 Methane mass frac',
        '4 Ethane mass frac', '4 Propane mass frac', '4 i-Butane mass frac', '4 n-Butane mass frac',
        '4 i-Pentane mass frac', '4 n-Pentane mass frac',
        'Q-104',
        '5 temperature, C', '5 pressure, kPa', '5 mass flow, kg/h', '5 Methane mass frac',
        '5 Ethane mass frac', '5 Propane mass frac', '5 i-Butane mass frac', '5 n-Butane mass frac',
        '5 i-Pentane mass frac', '5 n-Pentane mass frac', '16 temperature, C', '17 temperature, C',
        '16 mass flow, kg/h', '17 mass flow, kg/h', '16 Methane mass frac', '16 Ethane mass frac',
        '16 Propane mass frac', '16 i-Butane mass frac', '16 n-Butane mass frac',
        '16 i-Pentane mass frac', '16 n-Pentane mass frac',
    ]
    norm_col_bot_prod_data = normalize_data(column_bot_prod_mass_frac_data, initial_data, columns, labels)
    col_bot_mass_frac = column_bot_prod_mass_frac_model(norm_col_bot_prod_data).numpy().tolist()[0]

    bot_prod_mass_frac = []

    for elem in col_bot_mass_frac:
        if elem < 0:
            bot_prod_mass_frac.append(0.0)
        else:
            bot_prod_mass_frac.append(elem)

    return bot_prod_mass_frac






    # print(' ')
    # print('+++++++++++')
    # print(exp_data)
    # print('+++++++++++')
    # print(' ')




