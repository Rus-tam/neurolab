import joblib
from models.amine_treatment.amine_treatment import feed_gas_mol_weight_model, lean_amine_mol_weight_model
from models.amine_treatment.amine_treatment import feed_gas_dens_model, lean_amine_dens_model
from models.amine_treatment.amine_treatment import sweet_gas_temp_model, sweet_gas_molar_flow_model
from models.amine_treatment.amine_treatment import rich_amine_temp_model, rich_amine_H2S_molar_flow_model
from models.amine_treatment.amine_treatment import rich_amine_CO2_molar_flow_model


def feed_gas_mol_weight_prediction(initial_data):
    feed_gas_mol_weight_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h',
    ]]

    feed_gas_mol_weight_transformer = joblib.load('./transformers/amine_treatment/feed_gas_mol_weight_transformer.pkl')
    feed_gas_mol_weight_norm_data = feed_gas_mol_weight_transformer.transform(feed_gas_mol_weight_data)
    feed_gas_mol_weight = feed_gas_mol_weight_model(feed_gas_mol_weight_norm_data).numpy().tolist()

    return feed_gas_mol_weight[0]


def lean_amine_mol_weight_prediction(initial_data):
    lean_amine_mol_weight_data = initial_data[[
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h',
    ]]

    lean_amine_mol_weight_transformer = joblib.load('./transformers/amine_treatment/lean_amine_mol_weight_transformer.pkl')
    lean_amine_mol_weight_norm_data = lean_amine_mol_weight_transformer.transform(lean_amine_mol_weight_data)
    lean_amine_mol_weight = lean_amine_mol_weight_model(lean_amine_mol_weight_norm_data).numpy().tolist()

    return lean_amine_mol_weight[0]


def feed_gas_dens_prediction(initial_data):
    feed_gas_dens_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight'
    ]]

    feed_gas_dens_transformer = joblib.load('./transformers/amine_treatment/feed_gas_dens_transformer.pkl')
    feed_gas_dens_norm_data = feed_gas_dens_transformer.transform(feed_gas_dens_data)
    feed_gas_dens = feed_gas_dens_model(feed_gas_dens_norm_data).numpy().tolist()

    return feed_gas_dens[0]


def lean_amine_dens_prediction(initial_data):
    lean_amine_dens_data = initial_data[[
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight',
    ]]

    lean_amine_dens_transformer = joblib.load('./transformers/amine_treatment/lean_amine_dens_transformer.pkl')
    lean_amine_dens_norm_data = lean_amine_dens_transformer.transform(lean_amine_dens_data)
    lean_amine_dens = lean_amine_dens_model(lean_amine_dens_norm_data).numpy().tolist()

    return lean_amine_dens[0]


def sweet_gas_temp_prediction(initial_data):
    sweet_gas_temp_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight', 'feed_gas Mass density, kg/m3',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight', 'lean_amine Mass density, kg/m3',
    ]]

    sweet_gas_temp_transformer = joblib.load('./transformers/amine_treatment/sweet_gas_temp_transformer.pkl')
    sweet_gas_temp_norm_data = sweet_gas_temp_transformer.transform(sweet_gas_temp_data)
    sweet_gas_temp = sweet_gas_temp_model(sweet_gas_temp_norm_data).numpy().tolist()

    return sweet_gas_temp[0]


def sweet_gas_molar_flow_prediction(initial_data):
    sweet_gas_molar_flow_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight', 'feed_gas Mass density, kg/m3',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight', 'lean_amine Mass density, kg/m3',
    'sweet_gas temperature, C'
    ]]

    sweet_gas_molar_flow_transformer = joblib.load('./transformers/amine_treatment/sweet_gas_molar_flow_transformer.pkl')
    sweet_gas_molar_flow_norm_data = sweet_gas_molar_flow_transformer.transform(sweet_gas_molar_flow_data)
    sweet_gas_molar_flow = sweet_gas_molar_flow_model(sweet_gas_molar_flow_norm_data).numpy().tolist()

    return sweet_gas_molar_flow[0]


def rich_amine_temp_prediction(initial_data):
    rich_amine_temp_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight', 'feed_gas Mass density, kg/m3',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight', 'lean_amine Mass density, kg/m3',
    'sweet_gas molar flow, kgmol/h',
    'sweet_gas temperature, C', 'rich_amine molar flow, kgmol/h',
    ]]

    rich_amine_temp_transformer = joblib.load('./transformers/amine_treatment/rich_amine_temp_transformer.pkl')
    rich_amine_temp_norm_data = rich_amine_temp_transformer.transform(rich_amine_temp_data)

    rich_amine_temp = rich_amine_temp_model(rich_amine_temp_norm_data).numpy().tolist()

    return rich_amine_temp[0]


def rich_amine_H2S_molar_flow_prediction(initial_data):
    rich_amine_H2S_molar_flow_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight', 'feed_gas Mass density, kg/m3',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight', 'lean_amine Mass density, kg/m3',
    'sweet_gas molar flow, kgmol/h',
    'sweet_gas temperature, C', 'rich_amine molar flow, kgmol/h',
    ]]

    rich_amine_H2S_molar_flow_transformer = joblib.load('./transformers/amine_treatment/rich_amine_H2S_mol_flow_transformer.pkl')
    rich_amine_H2S_molar_flow_norm_data = rich_amine_H2S_molar_flow_transformer.transform(rich_amine_H2S_molar_flow_data)
    rich_amine_H2S_molar_flow = rich_amine_H2S_molar_flow_model(rich_amine_H2S_molar_flow_norm_data).numpy().tolist()

    return rich_amine_H2S_molar_flow[0]


def rich_amine_CO2_molar_flow_prediction(initial_data):
    rich_amine_CO2_molar_flow_data = initial_data[[
    'feed_gas temperature, C', 'feed_gas mass flow, kg/h', 'feed_gas CO2 mol frac', 'feed_gas Methane mol frac',
    'feed_gas Ethane mol frac', 'feed_gas Propane mol frac', 'feed_gas i-Butane mol frac', 'feed_gas n-Butane mol frac',
    'feed_gas i-Pentane mol frac', 'feed_gas n-Pentane mol frac', 'feed_gas H2S mol frac', 'feed_gas H2O mol frac',
    'feed_gas MDEAmine mol frac',
    'feed_gas molar flow, kgmol/h', 'feed_gas H2S molar flow, kgmol/h', 'feed_gas CO2 molar flow, kgmol/h',
    'feed_gas Methane molar flow, kgmol/h', 'feed_gas Ethane molar flow, kgmol/h', 'feed_gas Propane molar flow, kgmol/h',
    'feed_gas i-Butane molar flow, kgmol/h', 'feed_gas n-Butane molar flow, kgmol/h',
    'feed_gas i-Pentane molar flow, kgmol/h', 'feed_gas n-Pentane molar flow, kgmol/h', 'feed_gas H2O molar flow, kgmol/h',
    'feed_gas MDEAmine molar flow, kgmol/h', 'feed_gas molecular weight', 'feed_gas Mass density, kg/m3',
    'lean_amine temperature, C', 'lean_amine mass flow, kg/h', 'lean_amine CO2 mol frac', 'lean_amine Methane mol frac',
    'lean_amine Ethane mol frac', 'lean_amine Propane mol frac', 'lean_amine i-Butane mol frac',
    'lean_amine n-Butane mol frac',
    'lean_amine i-Pentane mol frac', 'lean_amine n-Pentane mol frac', 'lean_amine H2S mol frac', 'lean_amine H2O mol frac',
    'lean_amine MDEAmine mol frac',
    'lean_amine molar flow, kgmol/h', 'lean_amine H2S molar flow, kgmol/h', 'lean_amine CO2 molar flow, kgmol/h',
    'lean_amine Methane molar flow, kgmol/h', 'lean_amine Ethane molar flow, kgmol/h',
    'lean_amine Propane molar flow, kgmol/h',
    'lean_amine i-Butane molar flow, kgmol/h', 'lean_amine n-Butane molar flow, kgmol/h',
    'lean_amine i-Pentane molar flow, kgmol/h', 'lean_amine n-Pentane molar flow, kgmol/h',
    'lean_amine H2O molar flow, kgmol/h',
    'lean_amine MDEAmine molar flow, kgmol/h', 'lean_amine molecular weight', 'lean_amine Mass density, kg/m3',
    'sweet_gas molar flow, kgmol/h',
    'sweet_gas temperature, C', 'rich_amine molar flow, kgmol/h', 'rich_amine H2S molar flow, kgmol/h',
    ]]

    rich_amine_CO2_molar_flow_transformer = joblib.load('./transformers/amine_treatment/rich_amine_CO2_mol_flow_transformer.pkl')
    rich_amine_CO2_molar_flow_norm_data = rich_amine_CO2_molar_flow_transformer.transform(rich_amine_CO2_molar_flow_data)

    rich_amine_CO2_molar_flow = rich_amine_CO2_molar_flow_model(rich_amine_CO2_molar_flow_norm_data).numpy().tolist()

    return rich_amine_CO2_molar_flow[0]


