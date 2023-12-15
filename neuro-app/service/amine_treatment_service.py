from dto.dto import AmineTreatmentInitial
from models.simple_isomerization.simple_iso_model import simple_iso_model
import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from data.amine_treatment.amine_treatment import amine_treatment_temp_data


def normalize_temp_data(input_data):
    columns = [
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
    x = amine_treatment_temp_data[columns]
    y = amine_treatment_temp_data[['sweet_gas temperature, C', 'rich_amine temperature, C']]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
    ct = make_column_transformer(
        (MinMaxScaler(), columns)
    )
    ct.fit(x_train)
    norm_data = ct.transform(input_data)
    return norm_data


def amine_treatment_prod_temp(dto: AmineTreatmentInitial):
    initial_data = pd.DataFrame({
        'feed_gas temperature, C': [dto.sour_gas_temperature], 'feed_gas mass flow, kg/h': [dto.sour_gas_mass_flow],
        'feed_gas CO2 mol frac': [dto.sour_gas_co2], 'feed_gas Methane mol frac': [dto.sour_gas_ch4],
        'feed_gas Ethane mol frac': [dto.sour_gas_c2h8], 'feed_gas Propane mol frac': [dto.sour_gas_c3h8],
        'feed_gas i-Butane mol frac': [dto.sour_gas_ic4h10], 'feed_gas n-Butane mol frac': [dto.sour_gas_nc4h10],
        'feed_gas i-Pentane mol frac': [dto.sour_gas_ic5h12], 'feed_gas n-Pentane mol frac': [dto.sour_gas_nc5h12],
        'feed_gas H2S mol frac': [dto.sour_gas_h2s], 'feed_gas H2O mol frac': [dto.sour_gas_h2o],
        'feed_gas MDEAmine mol frac': [dto.sour_gas_MDEA], 'lean_amine temperature, C': [dto.amine_temperature],
        'lean_amine mass flow, kg/h': [dto.amine_mass_flow], 'lean_amine CO2 mol frac': [dto.amine_co2],
        'lean_amine Methane mol frac': [dto.amine_ch4], 'lean_amine Ethane mol frac': [dto.amine_c2h8],
        'lean_amine Propane mol frac': [dto.amine_c3h8], 'lean_amine i-Butane mol frac': [dto.amine_ic4h10],
        'lean_amine n-Butane mol frac': [dto.amine_nch4h10], 'lean_amine i-Pentane mol frac': [dto.amine_ic5h12],
        'lean_amine n-Pentane mol frac': [dto.amine_nc5h12], 'lean_amine H2S mol frac': [dto.amine_h2s],
        'lean_amine H2O mol frac': [dto.amine_h2o], 'lean_amine MDEAmine mol frac': [dto.amine_MDEA]
    })
    norm_temp_data = normalize_temp_data(initial_data)



