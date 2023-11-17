export const normalize = (data) => {
  const biggestValue = {};

  for (let item of Object.keys(data)) {
  }
};

const findMinMaxValue = (data) => {
  let maxValue = 0;
  let maxKey = null;

  let minValue = 1;
  let minKey = null;

  let min = {};
  let max = {};

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const currentValue = data[key];
      if (currentValue > maxValue) {
        maxValue = currentValue;
        maxKey = key;
      }

      if (currentValue < minValue) {
        minValue = currentValue;
        minKey = key;
      }
    }
  }

  max[maxKey] = maxValue;
  min[minKey] = minValue;

  return {
    min,
    max,
  };
};
