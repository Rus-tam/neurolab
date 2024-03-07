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
  } else if (dataToAI.sour_gas_temperature >= 50 || dataToAI.amine_temperature >= 50) {
    toast.error("Температура сырьевых потоков вне допустимого интервала");
    return new Error("initial data problem");
  }
};

export const lowTempDistCheck = (dataToAI) => {
  // for (const value of Object.values(dataToAI)) {
  //   if (value < 0) {
  //     toast.error("Недопустимо использование отрицательных величин");
  //     return new Error("Initial data problem");
  //   }
  // }
};
