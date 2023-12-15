import pandas as pd
import os

amine_treatment_temp_data_path = os.path.abspath('data/amine_treatment/temperature_data.csv')
amine_treatment_temp_data = pd.read_csv(amine_treatment_temp_data_path)
