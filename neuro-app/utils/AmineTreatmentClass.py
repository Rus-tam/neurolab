import pandas as pd

from dto.dto import AmineTreatmentInitial
from utils.initial_data_handler import prepare_initial_data


class AmineTreatment:
    @staticmethod
    def initial_calculations(dto: AmineTreatmentInitial):
        initial_data = pd.DataFrame(prepare_initial_data(dto))

        initial_data['feed_gas molar flow, kgmol/h'] = initial_data['feed_gas mass flow, kg/h'] / (initial_data['feed_gas H2S mol frac'] * 34 + initial_data['feed_gas CO2 mol frac'] * 44.01 + initial_data['feed_gas Methane mol frac'] * 16.04 + initial_data['feed_gas Ethane mol frac'] * 30.07 + initial_data['feed_gas Propane mol frac'] * 44.097 + initial_data['feed_gas i-Butane mol frac'] * 58.12 + initial_data['feed_gas n-Butane mol frac'] * 58.12 + initial_data['feed_gas i-Pentane mol frac'] * 72.15 + initial_data['feed_gas n-Pentane mol frac'] * 72.15 + initial_data['feed_gas H2O mol frac'] * 18 + initial_data['feed_gas MDEAmine mol frac'] * 119.16)
        initial_data['feed_gas H2S molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas H2S mol frac']
        initial_data['feed_gas CO2 molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas CO2 mol frac']
        initial_data['feed_gas Methane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas Methane mol frac']
        initial_data['feed_gas Ethane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas Ethane mol frac']
        initial_data['feed_gas Propane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas Propane mol frac']
        initial_data['feed_gas i-Butane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas i-Butane mol frac']
        initial_data['feed_gas n-Butane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas n-Butane mol frac']
        initial_data['feed_gas i-Pentane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas i-Pentane mol frac']
        initial_data['feed_gas n-Pentane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas n-Pentane mol frac']
        initial_data['feed_gas H2O molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas H2O mol frac']
        initial_data['feed_gas MDEAmine molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas MDEAmine mol frac']

        return initial_data
