from dto.dto import SimpleIsoInitial
from models.simple_isomerization.simple_iso_model import simple_iso_model
import pandas as pd


def simple_isomerization_service(dto: SimpleIsoInitial):
    initial_data = pd.DataFrame({
        "vessel_volume": [dto.vessel_volume],
        "feed_temperature": [dto.feed_temperature],
        "feed_mass_flow": [dto.feed_mass_flow]
    })
    prediction_results = simple_iso_model.predict(initial_data)

