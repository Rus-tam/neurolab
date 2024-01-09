import tensorflow as tf
import os

amine_treatment_prod_temp_path = os.path.abspath('models/amine_treatment/amine_treatment_prod_temp_model.h5')
amine_treatment_rich_amine_mass_flow_model_path = os.path.abspath('models/amine_treatment/amine_treatment_rich_amine_mass_flow.h5')
amine_treatment_stream_mol_weight_path = os.path.abspath('models/amine_treatment/amine_treatment_molar_weight_model.h5')
amine_treatment_sweet_gas_H2S_ppm_path = os.path.abspath('models/amine_treatment/sweet_gas_H2S_ppm_model.h5')
amine_treatment_sweet_gas_CO2_ppm_path = os.path.abspath('models/amine_treatment/sweet_gas_CO2_ppm_model.h5')

amine_treatment_prod_temp_model = tf.keras.models.load_model(amine_treatment_prod_temp_path)
amine_treatment_rich_amine_mass_flow_model = tf.keras.models.load_model(amine_treatment_rich_amine_mass_flow_model_path)
amine_treatment_stream_mol_weight_model = tf.keras.models.load_model(amine_treatment_stream_mol_weight_path)
amine_treatment_sweet_gas_H2S_ppm_model = tf.keras.models.load_model(amine_treatment_sweet_gas_H2S_ppm_path)
amine_treatment_sweet_gas_CO2_ppm_model = tf.keras.models.load_model(amine_treatment_sweet_gas_CO2_ppm_path)
