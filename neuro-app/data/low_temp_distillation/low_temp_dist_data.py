import pandas as pd
import os

sep_vap_mass_flow_data_path = os.path.abspath('data/low_temp_distillation/separator_vap_mass_flow.csv')
sep_vap_mass_frac_data_path = os.path.abspath('data/low_temp_distillation/separator_vap_mass_frac.csv')
sep_liq_mass_frac_data_path = os.path.abspath('data/low_temp_distillation/separator_liq_mass_frac.csv')
cooled_gas_temp_data_path = os.path.abspath('data/low_temp_distillation/expander_cooled_temp.csv')
expander_power_data_path = os.path.abspath('data/low_temp_distillation/expander_power_data.csv')
column_prod_temp_path = os.path.abspath('data/low_temp_distillation/column_prod_temp.csv')


sep_vap_mass_flow_data = pd.read_csv(sep_vap_mass_flow_data_path)
sep_vap_mass_frac_data = pd.read_csv(sep_vap_mass_frac_data_path)
sep_liq_mass_frac_data = pd.read_csv(sep_liq_mass_frac_data_path)
cooled_gas_temp_data = pd.read_csv(cooled_gas_temp_data_path)
expander_power_data = pd.read_csv(expander_power_data_path)
column_prod_temp_data = pd.read_csv(column_prod_temp_path)

