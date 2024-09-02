import tensorflow as tf
import os

feed_gas_mol_weight_model_path = os.path.abspath('./models/amine_treatment/feed_gas_mol_weight_model.h5')
lean_amine_mol_weight_model_path = os.path.abspath('./models/amine_treatment/lean_amine_mol_weight_model.h5')
feed_gas_dens_model_path = os.path.abspath('./models/amine_treatment/feed_gas_dens_model.h5')
lean_amine_dens_model_path = os.path.abspath('./models/amine_treatment/lean_amine_dens_model.h5')
sweet_gas_temp_model_path = os.path.abspath('./models/amine_treatment/sweet_gas_temp_model.h5')
sweet_gas_molar_flow_path = os.path.abspath('./models/amine_treatment/sweet_gas_molar_flow_model.h5')
rich_amine_temp_model_path = os.path.abspath('./models/amine_treatment/rich_amine_temp_model.h5')
rich_amine_H2S_molar_flow_model_path = os.path.abspath('./models/amine_treatment/rich_amine_H2S_molar_flow_model.h5')
rich_amine_CO2_molar_flow_model_path = os.path.abspath('./models/amine_treatment/rich_amine_CO2_molar_flow_model.h5')


feed_gas_mol_weight_model = tf.keras.models.load_model(feed_gas_mol_weight_model_path)
lean_amine_mol_weight_model = tf.keras.models.load_model(lean_amine_mol_weight_model_path)
feed_gas_dens_model = tf.keras.models.load_model(feed_gas_dens_model_path)
lean_amine_dens_model = tf.keras.models.load_model(lean_amine_dens_model_path)
sweet_gas_temp_model = tf.keras.models.load_model(sweet_gas_temp_model_path)
sweet_gas_molar_flow_model = tf.keras.models.load_model(sweet_gas_molar_flow_path)
rich_amine_temp_model = tf.keras.models.load_model(rich_amine_temp_model_path)
rich_amine_H2S_molar_flow_model = tf.keras.models.load_model(rich_amine_H2S_molar_flow_model_path)
rich_amine_CO2_molar_flow_model = tf.keras.models.load_model(rich_amine_CO2_molar_flow_model_path)
