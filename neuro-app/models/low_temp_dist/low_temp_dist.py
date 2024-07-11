import tensorflow as tf
import os

gas_feed_dens_model_path = os.path.abspath('./models/low_temp_dist/gas_feed_dens_model.h5')
gas_feed_vap_fr_model_path = os.path.abspath('./models/low_temp_dist/gas_feed_vap_fr_model.h5')
sep_vap_comp_molar_flow_model_path = os.path.abspath('./models/low_temp_dist/sep_vap_comp_molar_flow_model.h5')
expander_gas_temp_model_exp_model_path = os.path.abspath('./models/low_temp_dist/expander_gas_temp_model_exp.h5')

gas_feed_dens_model = tf.keras.models.load_model(gas_feed_dens_model_path)
gas_feed_vap_fr_model = tf.keras.models.load_model(gas_feed_vap_fr_model_path)
sep_vap_comp_molar_flow_model = tf.keras.models.load_model(sep_vap_comp_molar_flow_model_path)
expander_gas_temp_model_exp_model = tf.keras.models.load_model(expander_gas_temp_model_exp_model_path)

