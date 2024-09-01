import tensorflow as tf
import os

feed_gas_mol_weight_model_path = os.path.abspath('./models/amine_treatment/feed_gas_mol_weight_model.h5')
lean_amine_mol_weight_model_path = os.path.abspath('./models/amine_treatment/lean_amine_mol_weight_model.h5')
feed_gas_dens_model_path = os.path.abspath('./models/amine_treatment/feed_gas_dens_model.h5')

feed_gas_mol_weight_model = tf.keras.models.load_model(feed_gas_mol_weight_model_path)
lean_amine_mol_weight_model = tf.keras.models.load_model(lean_amine_mol_weight_model_path)
feed_gas_dens_model = tf.keras.models.load_model(feed_gas_dens_model_path)
