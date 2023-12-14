import pandas as pd
import os

file_path = os.path.abspath('data/simple_isomerization/mini_simple_iso.csv')
simple_iso_data = pd.read_csv(file_path)
