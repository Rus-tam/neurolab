from dto.dto import AmineTreatmentInitial
from models.amine_treatment.amine_treatment import amine_treatment_prod_temp_model
from models.amine_treatment.amine_treatment import amine_treatment_rich_amine_mass_flow_model
from models.amine_treatment.amine_treatment import amine_treatment_stream_mol_weight_model
import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from data.amine_treatment.amine_treatment import amine_treatment_temp_data
from data.amine_treatment.amine_treatment import amine_treatment_rich_amine_mass_flow_data
from data.amine_treatment.amine_treatment import amine_treatment_stream_molar_weight_data
from utils.initial_data_handler import prepare_initial_data


column = [
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac',
    'feed_gas Methane mol frac', 'feed_gas Ethane mol frac', 'feed_gas Propane mol frac',
    'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac', 'feed_gas i-Pentane mol frac',
    'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac',
    'lean_amine Methane mol frac', 'lean_amine Ethane mol frac', 'lean_amine Propane mol frac',
    'lean_amine i-Butane mol frac', 'lean_amine n-Butane mol frac', 'lean_amine i-Pentane mol frac',
    'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac'
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


def amine_treatment_prod_temp(dto: AmineTreatmentInitial):
    data = prepare_initial_data(dto)
    initial_data = pd.DataFrame(data)
    labels = ['sweet_gas temperature, C', 'rich_amine temperature, C']
    columns = column
    norm_temp_data = normalize_data(amine_treatment_temp_data, initial_data, columns, labels)
    prod_temp = amine_treatment_prod_temp_model(norm_temp_data).numpy().tolist()

    return prod_temp


def amine_treatment_rich_amine_mass_flow(dto: AmineTreatmentInitial):
    data = prepare_initial_data(dto)
    initial_data = pd.DataFrame({
        **data,
        'sweet_gas temperature, C': [dto.sweet_gas_temperature],
        'rich_amine temperature, C': [dto.rich_amine_temperature]})
    columns = [*column, 'sweet_gas temperature, C', 'rich_amine temperature, C']

    labels = ['rich_amine mass flow, kg/h']
    norm_rich_amine_mass_flow_data = normalize_data(
        amine_treatment_rich_amine_mass_flow_data,
        initial_data,
        columns,
        labels
    )

    rich_amine_mass_flow = amine_treatment_rich_amine_mass_flow_model(norm_rich_amine_mass_flow_data).numpy().tolist()
    return rich_amine_mass_flow


def amine_treatment_stream_mol_weight(dto: AmineTreatmentInitial):
    data = prepare_initial_data(dto)
    initial_data = pd.DataFrame(data)
    columns = column
    labels = [
        'feed_gas molecular weight',
        'lean_amine molecular weight',
        'rich_amine molecular weight',
        'sweet_gas molecular weight'
    ]
    norm_stream_molar_weight = normalize_data(
        amine_treatment_stream_molar_weight_data,
        initial_data,
        columns,
        labels
    )
    molar_weight = amine_treatment_stream_mol_weight_model(norm_stream_molar_weight).numpy().tolist()

    return molar_weight



