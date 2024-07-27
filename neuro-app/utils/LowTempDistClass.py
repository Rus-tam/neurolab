import pandas as pd

from dto.dto import LowTempDistInitial
from utils.initial_data_handler import prepare_low_temp_data


class LowTempDist:
    @staticmethod
    def initial_calculation(dto: LowTempDistInitial):
        input_data = pd.DataFrame(prepare_low_temp_data(dto))

        input_data['gas_feed Methane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed Methane mass frac']
        input_data['gas_feed Ethane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed Ethane mass frac']
        input_data['gas_feed Propane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed Propane mass frac']
        input_data['gas_feed i-Butane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed i-Butane mass frac']
        input_data['gas_feed n-Butane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed n-Butane mass frac']
        input_data['gas_feed i-Pentane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed i-Pentane mass frac']
        input_data['gas_feed n-Pentane mass flow, kg/h'] = input_data['gas_feed mass flow, kg/h'] * input_data[
            'gas_feed n-Pentane mass frac']

        input_data['gas_feed Methane molar flow, kgmole/h'] = input_data['gas_feed Methane mass flow, kg/h'] / 16.04
        input_data['gas_feed Ethane molar flow, kgmole/h'] = input_data['gas_feed Ethane mass flow, kg/h'] / 30
        input_data['gas_feed Propane molar flow, kgmole/h'] = input_data['gas_feed Propane mass flow, kg/h'] / 44
        input_data['gas_feed i-Butane molar flow, kgmole/h'] = input_data['gas_feed i-Butane mass flow, kg/h'] / 58.12
        input_data['gas_feed n-Butane molar flow, kgmole/h'] = input_data['gas_feed n-Butane mass flow, kg/h'] / 58.12
        input_data['gas_feed i-Pentane molar flow, kgmole/h'] = input_data['gas_feed i-Pentane mass flow, kg/h'] / 72.15
        input_data['gas_feed n-Pentane molar flow, kgmole/h'] = input_data['gas_feed n-Pentane mass flow, kg/h'] / 72.15

        input_data['gas_feed molar flow, kgmole/h'] = input_data['gas_feed Methane molar flow, kgmole/h'] + input_data[
            'gas_feed Ethane molar flow, kgmole/h'] + input_data['gas_feed Propane molar flow, kgmole/h'] + input_data[
                                                          'gas_feed i-Butane molar flow, kgmole/h'] + input_data[
                                                          'gas_feed n-Butane molar flow, kgmole/h'] + input_data[
                                                          'gas_feed i-Pentane molar flow, kgmole/h'] + input_data[
                                                          'gas_feed n-Pentane molar flow, kgmole/h']

        input_data['gas_feed molecular weight'] = input_data['gas_feed mass flow, kg/h'] / input_data[
            'gas_feed molar flow, kgmole/h']

        return input_data


    @staticmethod
    def phase_molar_flow(input_data):
        input_data['gas_feed vapour molar flow, kgmole/h'] = input_data['gas_feed vapour fraction'] * input_data[
            'gas_feed molar flow, kgmole/h']
        input_data['gas_feed liquid molar flow, kgmole/h'] = input_data['gas_feed molar flow, kgmole/h'] - input_data[
            'gas_feed vapour molar flow, kgmole/h']

        return input_data

    @staticmethod
    def prepare_results(input_data):

        result_dict = {
            "gas_feed_temperature": round(input_data["gas_feed temperature, C"][0], 3),
            "gas_feed_pressure": round(input_data["gas_feed pressure, kPa"][0], 3),
            "gas_feed_mass_flow": round(input_data["gas_feed mass flow, kg/h"][0], 3),
            "gas_feed_methane_mass_fr": round(input_data["gas_feed Methane mass frac"][0], 3),
            "gas_feed_ethane_mass_fr": round(input_data["gas_feed Ethane mass frac"][0], 3),
            "gas_feed_propane_mass_fr": round(input_data["gas_feed Propane mass frac"][0], 3),
            "gas_feed_i_butane_mass_fr": round(input_data["gas_feed i-Butane mass frac"][0], 3),
            "gas_feed_n_butane_mass_fr": round(input_data["gas_feed n-Butane mass frac"][0], 3),
            "gas_feed_i_pentane_mass_fr": round(input_data["gas_feed i-Pentane mass frac"][0], 3),
            "gas_feed_n_pentane_mass_fr": round(input_data["gas_feed n-Pentane mass frac"][0], 3),
            "comp_fraction": round(input_data["Comp Fraction"][0], 3),
            "stream_3_pressure": round(input_data["3 pressure, kPa"][0], 3),
            "stream_1_mass_flow": round(input_data["1 mass flow, kg/h"][0], 3),
            "stream_2_mass_flow": round(input_data["2 mass flow, kg/h"][0], 3),
            "stream_1_methane_mass_fr": round(input_data['1 Methane mass fr'][0], 3),
            "stream_1_ethane_mass_fr": round(input_data['1 Ethane mass fr'][0], 3),
            "stream_1_propane_mass_fr": round(input_data['1 Propane mass fr'][0], 3),
            "stream_1_i_butane_mass_fr": round(input_data['1 i-Butane mass fr'][0], 3),
            "stream_1_n_butane_mass_fr": round(input_data['1 n-Butane mass fr'][0], 3),
            "stream_1_i_pentane_mass_fr": round(input_data['1 i-Pentane mass fr'][0], 3),
            "stream_1_n_pentane_mass_fr": round(input_data['1 n-Pentane mass fr'][0], 3),
            "stream_2_methane_mass_fr": round(input_data['2 Methane mass fr'][0], 3),
            "stream_2_ethane_mass_fr": round(input_data['2 Ethane mass fr'][0], 3),
            "stream_2_propane_mass_fr": round(input_data['2 Propane mass fr'][0], 3),
            "stream_2_i_butane_mass_fr": round(input_data['2 i-Butane mass fr'][0], 3),
            "stream_2_n_butane_mass_fr": round(input_data['2 n-Butane mass fr'][0], 3),
            "stream_2_i_pentane_mass_fr": round(input_data['2 i-Pentane mass fr'][0], 3),
            "stream_2_n_pentane_mass_fr": round(input_data['2 n-Pentane mass fr'][0], 3),
            "stream_3_temperature": round(input_data['3 temperature, C'][0], 3),
            "expander_power": round(input_data["Q-100"][0], 3),
            "stream_16_temperature": round(input_data["16 temperature, C"][0], 3),
            "stream_17_temperature": round(input_data["17 temperature, C"][0], 3),
            "stream_16_mass_flow": round(input_data["16 mass flow, kg/h"][0], 3),
            "stream_17_mass_flow": round(input_data["17 mass flow, kg/h"][0], 3),
            "stream_16_methane_mass_fr": round(input_data["16 Methane mass fr"][0], 3),
            "stream_16_ethane_mass_fr": round(input_data["16 Ethane mass fr"][0], 3),
            "stream_16_propane_mass_fr": round(input_data["16 Propane mass fr"][0], 3),
            "stream_16_i_butane_mass_fr": round(input_data["16 i-Butane mass fr"][0], 3),
            "stream_16_n_butane_mass_fr": round(input_data["16 n-Butane mass fr"][0], 3),
            "stream_16_i_pentane_mass_fr": round(input_data["16 i-Pentane mass fr"][0], 3),
            "stream_16_n_pentane_mass_fr": round(input_data["16 n-Pentane mass fr"][0], 3),
            "stream_17_methane_mass_fr": round(input_data["17 Methane mass fr"][0], 3),
            "stream_17_ethane_mass_fr": round(input_data["17 Ethane mass fr"][0], 3),
            "stream_17_propane_mass_fr": round(input_data["17 Propane mass fr"][0], 3),
            "stream_17_i_butane_mass_fr": round(input_data["17 i-Butane mass fr"][0], 3),
            "stream_17_n_butane_mass_fr": round(input_data["17 n-Butane mass fr"][0], 3),
            "stream_17_i_pentane_mass_fr": round(input_data["17 i-Pentane mass fr"][0], 3),
            "stream_17_n_pentane_mass_fr": round(input_data["17 n-Pentane mass fr"][0], 3),
            "column_power": round(input_data["Q-104"][0], 3)
        }

        print(' ')
        print("+++++++++++++++++")
        print(result_dict)
        print("+++++++++++++++++")
        print('=================')
        print(input_data['16 Methane mass fr'])


        return input_data.to_dict(orient='list')





