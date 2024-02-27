const apiKey = "efd9448fbbfc4f3587b181844242202";

async function getDataFromAPI(location) {
    try {
        const fetchRequest = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
        const fetchResponse = await fetch(fetchRequest);
        const jsonData = await fetchResponse.json();
        return jsonData;
    } catch (error) {
        return error;
    }
}

function seperateDataIntoObject(weatherData) {
    const separatedWeatherData = {
        skyCondition: weatherData.current.condition.text,
        skyConditionImage: weatherData.current.condition.icon,
        locationName: weatherData.location.name,
        country: weatherData.location.country,
        region: weatherData.location.region,
        date: weatherData.location.localtime.substring(0, 10),
        localTime: weatherData.location.localtime.substring(11, 16),
        actualTemp: weatherData.current.temp_c,
        feelsLikeTemp: weatherData.current.feelslike_c,
        humidity: weatherData.current.humidity,
        windSpeed: weatherData.current.wind_kph,
        gustSpeed: weatherData.current.gust_kph,
        visibility: weatherData.current.vis_km,
    };
    return separatedWeatherData;
}

export { getDataFromAPI, seperateDataIntoObject };
