import pandas as pd

from dto.dto import AmineTreatmentInitial
from utils.initial_data_handler import prepare_initial_data


class AmineTreatment:
    @staticmethod
    def initial_calculations(dto: AmineTreatmentInitial):
        initial_data = pd.DataFrame(prepare_initial_data(dto))

        initial_data['rich_amine molar flow, kgmol/h'] = initial_data['rich_amine mass flow, kg/h'] / initial_data[
            'rich_amine molecular weight']

        initial_data['rich_amine H2S molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine H2S mol frac']
        initial_data['rich_amine CO2 molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine CO2 mol frac']
        initial_data['rich_amine Methane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine Methane mol frac']
        initial_data['rich_amine Ethane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine Ethane mol frac']
        initial_data['rich_amine Propane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine Propane mol frac']
        initial_data['rich_amine i-Butane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine i-Butane mol frac']
        initial_data['rich_amine n-Butane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine n-Butane mol frac']
        initial_data['rich_amine i-Pentane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine i-Pentane mol frac']
        initial_data['rich_amine n-Pentane molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine n-Pentane mol frac']
        initial_data['rich_amine H2O molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine H2O mol frac']
        initial_data['rich_amine MDEAmine molar flow, kgmol/h'] = initial_data['rich_amine molar flow, kgmol/h'] * initial_data[
            'rich_amine MDEAmine mol frac']
        initial_data['rich_amine sour comp molar flow, kgmol/h'] = initial_data['rich_amine H2S molar flow, kgmol/h'] + initial_data[
            'rich_amine CO2 molar flow, kgmol/h']

        initial_data['feed_gas molar flow, kgmol/h'] = initial_data['feed_gas mass flow, kg/h'] / initial_data['feed_gas molecular weight']
        initial_data['feed_gas H2S molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas H2S mol frac']
        initial_data['feed_gas CO2 molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas CO2 mol frac']
        initial_data['feed_gas Methane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas Methane mol frac']
        initial_data['feed_gas Ethane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas Ethane mol frac']
        initial_data['feed_gas Propane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas Propane mol frac']
        initial_data['feed_gas i-Butane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas i-Butane mol frac']
        initial_data['feed_gas n-Butane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas n-Butane mol frac']
        initial_data['feed_gas i-Pentane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas i-Pentane mol frac']
        initial_data['feed_gas n-Pentane molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas n-Pentane mol frac']
        initial_data['feed_gas H2O molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data['feed_gas H2O mol frac']
        initial_data['feed_gas MDEAmine molar flow, kgmol/h'] = initial_data['feed_gas molar flow, kgmol/h'] * initial_data[
            'feed_gas MDEAmine mol frac']

        initial_data['lean_amine molar flow, kgmol/h'] = initial_data['lean_amine mass flow, kg/h'] / initial_data[
            'lean_amine molecular weight']
        initial_data['lean_amine H2S molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine H2S mol frac']
        initial_data['lean_amine CO2 molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine CO2 mol frac']
        initial_data['lean_amine Methane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine Methane mol frac']
        initial_data['lean_amine Ethane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine Ethane mol frac']
        initial_data['lean_amine Propane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine Propane mol frac']
        initial_data['lean_amine i-Butane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine i-Butane mol frac']
        initial_data['lean_amine n-Butane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine n-Butane mol frac']
        initial_data['lean_amine i-Pentane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine i-Pentane mol frac']
        initial_data['lean_amine n-Pentane molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine n-Pentane mol frac']
        initial_data['lean_amine H2O molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine H2O mol frac']
        initial_data['lean_amine MDEAmine molar flow, kgmol/h'] = initial_data['lean_amine molar flow, kgmol/h'] * initial_data[
            'lean_amine MDEAmine mol frac']

        initial_data['sweet_gas molar flow, kgmol/h'] = initial_data['sweet_gas mass flow, kg/h'] / initial_data['sweet_gas molecular weight']
        initial_data['sweet_gas H2S molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas H2S mol frac']
        initial_data['sweet_gas CO2 molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas CO2 mol frac']
        initial_data['sweet_gas Methane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas Methane mol frac']
        initial_data['sweet_gas Ethane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas Ethane mol frac']
        initial_data['sweet_gas Propane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas Propane mol frac']
        initial_data['sweet_gas i-Butane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas i-Butane mol frac']
        initial_data['sweet_gas n-Butane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas n-Butane mol frac']
        initial_data['sweet_gas i-Pentane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas i-Pentane mol frac']
        initial_data['sweet_gas n-Pentane molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas n-Pentane mol frac']
        initial_data['sweet_gas H2O molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas H2O mol frac']
        initial_data['sweet_gas MDEAmine molar flow, kgmol/h'] = initial_data['sweet_gas molar flow, kgmol/h'] * initial_data[
            'sweet_gas MDEAmine mol frac']

        return initial_data
