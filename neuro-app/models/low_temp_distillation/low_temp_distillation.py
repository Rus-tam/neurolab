import tensorflow as tf
import os

sep_vap_mass_flow_path = os.path.abspath('models/low_temp_distillation/low_temp_sep_vap_mass_flow.h5')
sep_vap_mass_frac_path = os.path.abspath('models/low_temp_distillation/low_temp_sep_vap_mass_frac.h5')

sep_vap_mass_flow_model = tf.keras.models.load_model(sep_vap_mass_flow_path)
sep_vap_mass_frac_model = tf.keras.models.load_model(sep_vap_mass_frac_path)

