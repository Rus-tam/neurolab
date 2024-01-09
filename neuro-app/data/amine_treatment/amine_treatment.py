import pandas as pd
import os

amine_treatment_temp_data_path = os.path.abspath('data/amine_treatment/temperature_data.csv')
amine_treatment_rich_amine_mass_flow_path = os.path.abspath('data/amine_treatment/rich_amine_mass_flow_data.csv')
amine_treatment_stream_molar_weight_path = os.path.abspath('data/amine_treatment/molar_weight_data.csv')
amine_treatment_sweet_gas_H2S_ppm_path = os.path.abspath('data/amine_treatment/sweet_gas_H2S_ppm_data.csv')
amine_treatment_sweet_gas_CO2_ppm_path = os.path.abspath('data/amine_treatment/sweet_gas_CO2_ppm_data.csv')
amine_treatment_rich_amine_sour_comp_path = os.path.abspath('data/amine_treatment/rich_amine_sour_comp_mol_frac_data.csv')
amine_treatment_rich_amine_H2O_MDEA_path = os.path.abspath('data/amine_treatment/rich_amine_H2O_MDEA_mol_frac_data.csv')

amine_treatment_temp_data = pd.read_csv(amine_treatment_temp_data_path)
amine_treatment_rich_amine_mass_flow_data = pd.read_csv(amine_treatment_rich_amine_mass_flow_path)
amine_treatment_stream_molar_weight_data = pd.read_csv(amine_treatment_stream_molar_weight_path)
amine_treatment_sweet_gas_H2S_ppm_data = pd.read_csv(amine_treatment_sweet_gas_H2S_ppm_path)
amine_treatment_sweet_gas_CO2_ppm_data = pd.read_csv(amine_treatment_sweet_gas_CO2_ppm_path)
amine_treatment_rich_amine_sour_comp_data = pd.read_csv(amine_treatment_rich_amine_sour_comp_path)
amine_treatment_rich_amine_H2O_MDEA_data = pd.read_csv(amine_treatment_rich_amine_H2O_MDEA_path)

