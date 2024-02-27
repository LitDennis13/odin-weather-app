import { getDataFromAPI, seperateDataIntoObject } from "./getWeatherData";

const location = "texas";

getDataFromAPI(location)
    .then((weatherData) => {
        console.log(seperateDataIntoObject(weatherData));
        console.log(weatherData);
    })
    .catch(console.log);
