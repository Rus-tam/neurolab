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
        result_dict = {}
        res_data_dict = input_data.to_dict(orient='list')
        keys = list(res_data_dict.keys())

        for key in keys:
            modified_key = key.replace(' ', '_')
            modified_key = modified_key.replace(',', '')
            modified_key = modified_key.replace('/', '_')
            modified_key = modified_key.replace('-', '_')
            if "gas" not in modified_key:
                modified_key = 'stream_' + modified_key
            result_dict[modified_key] = round(res_data_dict[key][0], 3)

        return result_dict





