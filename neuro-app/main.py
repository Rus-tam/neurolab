from fastapi import FastAPI
from dto.dto import SimpleIsoInitial, SimpleIsoResponse, AmineTreatmentInitial, RichAmineMassFlow
from service.simple_isomerization_service import simple_isomerization_service
from service.amine_treatment_service import amine_treatment_prod_temp
from service.amine_treatment_service import amine_treatment_rich_amine_mass_flow

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

    dto['sweet_gas temperature, C'] = round(prod_temp[0][0], 4)
    dto['rich_amine temperature, C'] = round(prod_temp[0][1], 4)

    amine_treatment_rich_amine_mass_flow(dto)

    return {
        "sweet_gas temperature, C": round(prod_temp[0][0], 4),
        "rich_amine temperature, C": round(prod_temp[0][1], 4)
    }
