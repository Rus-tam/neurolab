from fastapi import FastAPI
from dto.dto import SimpleIsoInitial
from service.simple_isomerization_service import simple_isomerization_service

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.post("/simple_isomerization")
def simple_isomerization(dto: SimpleIsoInitial):
    simple_isomerization_service(dto)


