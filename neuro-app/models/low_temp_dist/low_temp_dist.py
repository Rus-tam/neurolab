import tensorflow as tf
import os

gas_feed_dens_model_path = os.path.abspath('./models/low_temp_dist/gas_feed_dens_model.h5')
gas_feed_vap_fr_model_path = os.path.abspath('./models/low_temp_dist/gas_feed_vap_fr_model.h5')


gas_feed_dens_model = tf.keras.models.load_model(gas_feed_dens_model_path)
gas_feed_vap_fr_model = tf.keras.models.load_model(gas_feed_vap_fr_model_path)
