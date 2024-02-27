import pandas as pd
import os

sep_vap_mass_flow_data_path = os.path.abspath('data/low_temp_distillation/separator_vap_mass_flow.csv')
sep_vap_mass_frac_data_path = os.path.abspath('data/low_temp_distillation/separator_vap_mass_frac.csv')
sep_liq_mass_frac_data_path = os.path.abspath('data/low_temp_distillation/separator_liq_mass_frac.csv')
cooled_gas_temp_data_path = os.path.abspath('data/low_temp_distillation/expander_cooled_temp.csv')


sep_vap_mass_flow_data = pd.read_csv(sep_vap_mass_flow_data_path)
sep_vap_mass_frac_data = pd.read_csv(sep_vap_mass_frac_data_path)
sep_liq_mass_frac_data = pd.read_csv(sep_liq_mass_frac_data_path)
cooled_gas_temp_data = pd.read_csv(cooled_gas_temp_data_path)

