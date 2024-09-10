import { toast } from "react-toastify";

export const simpleIsoCheck = (dataToAI) => {
  if (dataToAI.vesselVolume < 0.01 || dataToAI.vesselVolume > 5) {
    toast.error("Объем реактора вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.feedMassFlow < 200 || dataToAI.feedMassFlow > 50000) {
    toast.error("Расход сырья вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.feedTemperature < 10 || dataToAI.feedTemperature > 50) {
    toast.error("Температура сырья вне допустимого интервала");
    return new Error("initial data problem");
  }
};

export const amineTreatmentCheck = (dataToAI) => {
  for (const value of Object.values(dataToAI)) {
    if (value < 0) {
      toast.error("Недопустимо использование отрицательных величин");
      return new Error("initial data problem");
    }
  }
  if (dataToAI.sour_gas_temperature <= 10 || dataToAI.amine_temperature <= 10) {
    toast.error("Температура сырьевых потоков вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.sour_gas_temperature >= 61 || dataToAI.amine_temperature >= 61) {
    toast.error("Температура сырьевых потоков вне допустимого интервала");
    return new Error("initial data problem");
  }
  if (dataToAI.sour_gas_mass_flow < 15000 || dataToAI.sour_gas_mass_flow > 700000) {
    toast.error("Массовый расход одного из сырьевых потоков вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.amine_mass_flow < 1500 || dataToAI.amine_mass_flow > 700000) {
    toast.error("Массовый расход одного из сырьевых потоков вне допустимого интервала");
    return new Error("initial data problem");
  }
};

export const lowTempDistCheck = (dataToAI) => {
  if (dataToAI.gas_feed_temperature < -25 || dataToAI.gas_feed_temperature > 10) {
    toast.error("Температура сырьевого газа вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.gas_feed_mass_flow < 5000 || dataToAI.gas_feed_mass_flow > 30000) {
    toast.error("Массовый расход сырьевого газа вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.gas_feed_pressure < 3500 || dataToAI.gas_feed_pressure > 4900) {
    toast.error("Давление сырьевого газа вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.stream_3_pressure < 2000 || dataToAI.stream_3_pressure > 2600) {
    toast.error("Давление газа после детандера вне допустимого интервала");
    return new Error("initial data problem");
  } else if (dataToAI.comp_frac < 0.01 || dataToAI.comp_frac > 0.15) {
    toast.error("Массовая доля метана и этана в ШФЛУ вне допустимого предела");
    return new Error("initial data problem");
  }
};
