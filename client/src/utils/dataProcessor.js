import { useDispatch } from "react-redux";

const dataProcessor = (data, parentName) => {
  let dataToAI = {};
  switch (parentName) {
    case "simple-isomerization":
      dataToAI = {
        vesselVolume: data[0].value,
        feedMassFlow: data[1].value,
        feedTemperature: data[2].value,
      };
      return dataToAI;
    default:
      return "dataToAI";
  }
};

export default dataProcessor;
