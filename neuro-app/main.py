from fastapi import FastAPI
from dto.dto import SimpleIsoInitial
from models.models import simple_iso_model

app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Hello There"}


@app.post("/simple_isomerization")
def simple_isomerization(dto: SimpleIsoInitial):
    pass

