import pandas as pd
import os

feed_prod_vol_flow_data_path = os.path.abspath('data/low_temp_distillation/feed_prod_vol_flow_data.csv')
sep_prod_mass_flow_data_path = os.path.abspath('data/low_temp_distillation/sep_prod_mass_flow.csv')

feed_prod_vol_flow_data = pd.read_csv(feed_prod_vol_flow_data_path)
sep_prod_mass_flow_data = pd.read_csv(sep_prod_mass_flow_data_path)
