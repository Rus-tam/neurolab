import pandas as pd
import os

sep_vap_mass_flow_data_path = os.path.abspath('data/low_temp_distillation/separator_vap_mass_flow.csv')


sep_vap_mass_flow_data = pd.read_csv(sep_vap_mass_flow_data_path)

