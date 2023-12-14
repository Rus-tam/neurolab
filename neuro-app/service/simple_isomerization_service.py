from dto.dto import SimpleIsoInitial
from models.simple_isomerization.simple_iso_model import simple_iso_model
import pandas as pd
from sklearn.compose import make_column_transformer
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from data.simple_isomerization.simple_iso_data import simple_iso_data


def normalize_data(input_data):
    x = simple_iso_data[["vessel_volume", "feed_temperature", "feed_mass_flow"]]
    y = simple_iso_data[["tr2-butene_mass_fr", "prod_temperature"]]
    x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
    ct = make_column_transformer(
        (MinMaxScaler(), ["vessel_volume", "feed_temperature", "feed_mass_flow"])
    )
    ct.fit(x_train)
    norm_data = ct.transform(input_data)
    return norm_data


def simple_isomerization_service(dto: SimpleIsoInitial):
    initial_data = pd.DataFrame({
        "vessel_volume": [dto.vessel_volume],
        "feed_temperature": [dto.feed_temperature],
        "feed_mass_flow": [dto.feed_mass_flow]
    })

    norm_data = normalize_data(initial_data)
    prediction_results = simple_iso_model.predict(norm_data)
    print('NORM DATA', norm_data)
    print('PREDICTION DATA', prediction_results)

