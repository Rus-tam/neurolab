// export const normalize = (data) => {
//   const { min, max } = findMinMaxValue(data);
//   let summ = 0;

//   for (let value of Object.values(data)) {
//     summ += value;
//   }

//   if (summ > 1) {
//     data[Object.keys(max)[0]] = max[Object.keys(max)[0]] - (summ - 1);
//   } else {
//     inequality = 1 - summ;
//     data[Object.keys(max)[0]] = min[Object.keys(min)[0]] + (1 - summ);
//   }

//   return roundValues(data);
// };

// const findMinMaxValue = (data) => {
//   let maxValue = 0;
//   let maxKey = null;

//   let minValue = 1;
//   let minKey = null;

//   let min = {};
//   let max = {};

//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       const currentValue = data[key];
//       if (currentValue > maxValue) {
//         maxValue = currentValue;
//         maxKey = key;
//       }

//       if (currentValue < minValue) {
//         minValue = currentValue;
//         minKey = key;
//       }
//     }
//   }

//   max[maxKey] = maxValue;
//   min[minKey] = minValue;

//   return {
//     min,
//     max,
//   };
// };

// const roundValues = (data) => {
//   const roundedValues = {};

//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       roundedValues[key] = Number(data[key].toFixed(2));
//     }
//   }

//   return roundedValues;
// };

export class Normalize {
  data = {};
  constructor(data) {
    data = this.data;
  }

  normalizeData() {
    const { min, max } = this.#findMinMaxValue(this.data);
    let summ = 0;

    for (let value of Object.values(this.data)) {
      summ += value;
    }

    if (summ > 1) {
      data[Object.keys(max)[0]] = max[Object.keys(max)[0]] - (summ - 1);
    } else {
      inequality = 1 - summ;
      data[Object.keys(max)[0]] = min[Object.keys(min)[0]] + (1 - summ);
    }

    return this.#roundValues(this.data);
  }

  #findMinMaxValue() {
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
  }

  #roundValues() {
    const roundedValues = {};

    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        roundedValues[key] = Number(this.data[key].toFixed(2));
      }
    }

    return roundedValues;
  }
}
