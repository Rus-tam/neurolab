from fastapi import FastAPI
from dto.dto import SimpleIsoInitial, SimpleIsoResponse, AmineTreatmentInitial
from service.simple_isomerization_service import simple_isomerization_service
from service.amine_treatment_service import amine_treatment_prod_temp
from service.amine_treatment_service import amine_treatment_rich_amine_mass_flow
from service.amine_treatment_service import amine_treatment_stream_mol_weight

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.post("/simple_isomerization", response_model=SimpleIsoResponse)
def simple_isomerization(dto: SimpleIsoInitial):
    prediction = simple_isomerization_service(dto)[0]
    return {
        "product_concentration": prediction[0],
        "product_temperature": prediction[1]
    }


@app.post("/amine_treatment")
def amine_treatment(dto: AmineTreatmentInitial):
    prod_temp = amine_treatment_prod_temp(dto)

    dto.sweet_gas_temperature = round(prod_temp[0][0], 4)
    dto.rich_amine_temperature = round(prod_temp[0][1], 4)

    rich_amine_mass_flow = amine_treatment_rich_amine_mass_flow(dto)

    feed_gas_mol_weight, lean_amine_mol_weight, rich_amine_mol_weight, sweet_gas_mol_weight = amine_treatment_stream_mol_weight(dto)[0]

    return {
        "sweet_gas temperature, C": round(prod_temp[0][0], 4),
        "rich_amine temperature, C": round(prod_temp[0][1], 4),
        "rich_amine mass flow, kg/h": round(rich_amine_mass_flow[0][0], 4),
        "sweet_gas mass flow, kg/h": round(((dto.sour_gas_mass_flow + dto.amine_mass_flow) - rich_amine_mass_flow[0][0]), 4),
        "feed_gas_mol_weight": round(feed_gas_mol_weight, 4),
        "lean_amine_mol_weight": round(lean_amine_mol_weight, 4),
        "rich_amine_mol_weight": round(rich_amine_mol_weight, 4),
        "sweet_gas_mol_weight": round(sweet_gas_mol_weight, 4),
    }
