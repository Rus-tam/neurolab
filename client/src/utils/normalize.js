export class Normalize {
  data = {};
  summ = 0;
  constructor(data) {
    this.data = data;

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (typeof data[key] === "number") {
          this.data[key] = data[key];
        } else {
          this.data[key] = parseFloat(data[key]);
        }
      }
    }
  }

  normalizeData() {
    this.summ = this.#findSumm(this.data);

    const normalizedPercents = {};

    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        normalizedPercents[key] = this.data[key] / this.summ;
      }
    }

    const roundedValues = this.#roundValues(normalizedPercents);

    return roundedValues;
  }

  #findSumm(composition) {
    let summ = 0;
    for (let value of Object.values(composition)) {
      summ += value;
    }

    return summ;
  }

  #findMinMaxValue() {
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

  #roundValues(composition) {
    const roundedValues = {};

    for (const key in composition) {
      if (this.data.hasOwnProperty(key)) {
        roundedValues[key] = Number(composition[key].toFixed(4));
      }
    }

    return roundedValues;
  }
}
