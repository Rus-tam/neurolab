import tensorflow as tf
import os

model_path = os.path.abspath('models/simple_isomerization/simple_isomerization_model.h5')

simple_iso_model = tf.keras.models.load_model(model_path)
