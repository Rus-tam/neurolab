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
