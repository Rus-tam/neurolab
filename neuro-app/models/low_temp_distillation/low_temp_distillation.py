import tensorflow as tf
import os

sep_vap_mass_flow_path = os.path.abspath('models/low_temp_distillation/low_temp_sep_vap_mass_flow.h5')
sep_vap_mass_frac_path = os.path.abspath('models/low_temp_distillation/low_temp_sep_vap_mass_frac.h5')
sep_liq_mass_frac_path = os.path.abspath('models/low_temp_distillation/low_temp_sep_liq_mass_frac.h5')
expander_cooled_gas_path = os.path.abspath('models/low_temp_distillation/low_temp_cooled_stream_temp.h5')
expander_power_path = os.path.abspath('models/low_temp_distillation/low_temp_expander_power.h5')
column_prod_temp_path = os.path.abspath('models/low_temp_distillation/low_temp_prod_temp_model.h5')
column_prod_mass_path = os.path.abspath('models/low_temp_distillation/low_temp_prod_mass_flow_model.h5')


sep_vap_mass_flow_model = tf.keras.models.load_model(sep_vap_mass_flow_path)
sep_vap_mass_frac_model = tf.keras.models.load_model(sep_vap_mass_frac_path)
sep_liq_mass_frac_model = tf.keras.models.load_model(sep_liq_mass_frac_path)
expander_cooled_gas_model = tf.keras.models.load_model(expander_cooled_gas_path)
expander_power_model = tf.keras.models.load_model(expander_power_path)
column_prod_temp_model = tf.keras.models.load_model(column_prod_temp_path)
column_prod_mass_flow_model = tf.keras.models.load_model(column_prod_mass_path)

