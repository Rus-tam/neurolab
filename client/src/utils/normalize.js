export class Normalize {
  data = {};
  summ = 0;
  constructor(data) {
    this.data = data;
  }

  normalizeData() {
    const { min, max } = this._findMinMaxValue(this.data);
    let summ = 0;

    for (let value of Object.values(this.data)) {
      this.summ += value;
    }

    if (summ > 1) {
      this.data[Object.keys(max)[0]] = max[Object.keys(max)[0]] - (summ - 1);
    } else {
      this.data[Object.keys(max)[0]] = min[Object.keys(min)[0]] + (1 - summ);
    }

    return this._roundValues(this.data);
  }

  _findMinMaxValue() {
    let maxValue = 0;
    let maxKey = null;

    let minValue = 1;
    let minKey = null;

    let min = {};
    let max = {};

    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        const currentValue = this.data[key];
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

  _roundValues() {
    const roundedValues = {};

    console.log("PPPPPPPPPPP", this.data);

    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        roundedValues[key] = Number(parseFloat(this.data[key]).toFixed(2));
      }
      console.log(roundedValues);
    }

    return roundedValues;
  }
}
