import pandas as pd
import os

amine_treatment_temp_data_path = os.path.abspath('data/amine_treatment/temperature_data.csv')
amine_treatment_rich_amine_mass_flow_path = os.path.abspath('data/amine_treatment/rich_amine_mass_flow_data.csv')

amine_treatment_temp_data = pd.read_csv(amine_treatment_temp_data_path)
amine_treatment_rich_amine_mass_flow_data = pd.read_csv(amine_treatment_rich_amine_mass_flow_path)
