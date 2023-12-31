import tensorflow as tf
import os

amine_treatment_prod_temp_path = os.path.abspath('models/amine_treatment/amine_treatment_prod_temp_model.h5')
amine_treatment_rich_amine_mass_flow_model_path = os.path.abspath('models/amine_treatment/amine_treatment_rich_amine_mass_flow.h5')

amine_treatment_prod_temp_model = tf.keras.models.load_model(amine_treatment_prod_temp_path)
amine_treatment_rich_amine_mass_flow_model = tf.keras.models.load_model(amine_treatment_rich_amine_mass_flow_model_path)

