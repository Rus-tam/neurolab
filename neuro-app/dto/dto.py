from pydantic import BaseModel, Field


class SimpleIsoInitial(BaseModel):
    vessel_volume: float
    feed_temperature: float
    feed_mass_flow: float
