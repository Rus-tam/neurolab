const dataProcessor = (data, parentName) => {
  let dataToAI = {};
  switch (parentName) {
    case "simple-isomerization":
      dataToAI = {
        vesselVolume: data[0].value,
        feedTemperature: data[1].value,
        feedMassFlow: data[2].value,
      };
      return dataToAI;
    default:
      return "dataToAI";
  }
};

export default dataProcessor;
