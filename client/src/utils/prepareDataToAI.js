export const prepareDataToAI = (data, mode) => {
  switch (mode) {
    case "simple-isomerization":
      return {
        vessel_volume: parseFloat(data.vessel_volume),
        feed_temperature: parseFloat(data.feed_temperature),
        feed_mass_flow: parseFloat(data.feed_mass_flow),
      };
      break;
  }
};
