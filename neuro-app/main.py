from fastapi import FastAPI
from dto.dto import SimpleIsoInitial, SimpleIsoResponse, AmineTreatmentInitial
from service.simple_isomerization_service import simple_isomerization_service
from service.amine_treatment_service import amine_treatment_prod_temp
from service.amine_treatment_service import amine_treatment_rich_amine_mass_flow
from service.amine_treatment_service import amine_treatment_stream_mol_weight
from service.amine_treatment_service import sweet_gas_H2S_ppm
from service.amine_treatment_service import sweet_gas_CO2_ppm
from service.amine_treatment_service import rich_amine_sour_comp
from service.amine_treatment_service import rich_amine_H2O_MDEA


app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.post("/simple_isomerization", response_model=SimpleIsoResponse)
def simple_isomerization(dto: SimpleIsoInitial):
    prediction = simple_isomerization_service(dto)[0]
    return {
        "product_concentration": round(prediction[0], 3),
        "product_temperature": round(prediction[1], 3)
    }


@app.post("/amine_treatment")
def amine_treatment(dto: AmineTreatmentInitial):
    prod_temp = amine_treatment_prod_temp(dto)

    dto.sweet_gas_temperature = round(prod_temp[0][0], 4)
    dto.rich_amine_temperature = round(prod_temp[0][1], 4)

    dto.rich_amine_mass_flow = amine_treatment_rich_amine_mass_flow(dto)[0][0]
    dto.sour_gas_mass_flow = (dto.sour_gas_mass_flow + dto.amine_mass_flow) - dto.rich_amine_mass_flow

    dto.feed_gas_mol_weight, dto.lean_amine_mol_weight, dto.rich_amine_mol_weight, dto.sweet_gas_mol_weight = amine_treatment_stream_mol_weight(dto)[0]

    dto.feed_gas_mol_flow = dto.sour_gas_mass_flow / dto.feed_gas_mol_weight
    dto.feed_gas_H2S_mol_flow = dto.feed_gas_mol_flow * dto.sour_gas_h2s
    dto.feed_gas_CO2_mol_flow = dto.feed_gas_mol_flow * dto.sour_gas_co2
    dto.lean_amine_mol_flow = dto.amine_mass_flow / dto.lean_amine_mol_weight
    dto.lean_amine_H2S_mol_flow = dto.lean_amine_mol_flow * dto.amine_h2s
    dto.lean_amine_CO2_mol_flow = dto.lean_amine_mol_flow * dto.amine_co2
    dto.rich_amine_mol_flow = dto.rich_amine_mass_flow / dto.rich_amine_mol_weight
    dto.sweet_gas_mol_flow = dto.sweet_gas_mass_flow / dto.sweet_gas_mol_weight

    sweet_gas_H2S_ppm_rate = sweet_gas_H2S_ppm(dto)[0][0]
    sweet_gas_CO2_ppm_rate = sweet_gas_CO2_ppm(dto)[0][0]

    rich_amine_H2S_mol_frac, rich_amine_CO2_mol_frac = rich_amine_sour_comp(dto)[0]

    rich_amine_H2O_mol_frac, rich_amine_MDEA_mol_frac = rich_amine_H2O_MDEA(dto)[0]

    if (rich_amine_H2O_mol_frac + rich_amine_MDEA_mol_frac) >= 1:
        rich_amine_H2O_mol_frac = 1 - (rich_amine_MDEA_mol_frac + rich_amine_H2S_mol_frac + rich_amine_CO2_mol_frac)

    return {
        "sweet_gas temperature, C": round(prod_temp[0][0], 4),
        "rich_amine temperature, C": round(prod_temp[0][1], 4),
        "rich_amine mass flow, kg/h": round(dto.rich_amine_mass_flow, 4),
        "sweet_gas mass flow, kg/h": round(dto.sour_gas_mass_flow, 4),
        "feed_gas_mol_weight": round(dto.feed_gas_mol_weight, 4),
        "lean_amine_mol_weight": round(dto.lean_amine_mol_weight, 4),
        "rich_amine_mol_weight": round(dto.rich_amine_mol_weight, 4),
        "sweet_gas_mol_weight": round(dto.sweet_gas_mol_weight, 4),
        "sweet_gas_H2S_ppm_rate": round(sweet_gas_H2S_ppm_rate, 4),
        "sweet_gas_CO2_ppm_rate": round(sweet_gas_CO2_ppm_rate, 4),
        "rich_amine_H2S_mol_frac": round(rich_amine_H2S_mol_frac, 5),
        "rich_amine_CO2_mol_frac": round(rich_amine_CO2_mol_frac, 5),
        "rich_amine_H2O_mol_frac": round(rich_amine_H2O_mol_frac, 5),
        "rich_amine_MDEA_mol_frac": round(rich_amine_MDEA_mol_frac, 5)
    }
