export const prepareSimpleIsoRes = (results) => {
    const processedData = [];

    console.log('RRRRRRRRRRRRRRRRRR',results)

    for (let result of results ) {
        processedData.push({
            "Объем реактора, куб. м.": result.vessel_volume.toFixed(2),
            "Массовый расход сырья, кг/ч": result.feed_mass_flow.toFixed(2),
            "Температура сырья, град Цельсия": result.feed_temperature.toFixed(2),
            "Концентрация транс-бутена в продукте, % масс.": result.product_concentration.toFixed(2),
            "Температура продуктового потока, град Цельсия": result.product_temperature.toFixed(2)
        });
    }

    return processedData;
}
