import tensorflow as tf
import os

feed_prod_vol_flow_model_path = os.path.abspath('models/low_temp_dist/feed_prod_vol_flow_model.h5')
sep_prod_mass_flow_model_path = os.path.abspath('models/low_temp_dist/sep_prod_mass_flow_model.h5')

feed_prod_vol_flow_model = tf.keras.models.load_model(feed_prod_vol_flow_model_path)
sep_prod_mass_flow_model = tf.keras.models.load_model(sep_prod_mass_flow_model_path)
