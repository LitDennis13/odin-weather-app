import { getDataFromAPI, seperateDataIntoObject } from "./getWeatherData";
import { showLoading, displayData } from "./pageUpdate";

const locationField = document.querySelector("#location-field");

const getWeatherDataButton = document.querySelector("#get-weather-data-button");

function errorHandler(error) {
    return error;
}

function checkDataFromAPI(data) {
    if (data.hasOwnProperty("error")) {
        if (data.error.code === 1003) {
            locationField.setCustomValidity("You Must Enter a Location");
        } else if (data.error.code === 1006) {
            locationField.setCustomValidity("Location Not Found");
        }
    }
}

getWeatherDataButton.addEventListener("click", async () => {
    showLoading(true);
    try {
        const dataFromAPI = await getDataFromAPI(locationField.value);
        checkDataFromAPI(dataFromAPI);
        const weatherDataObject = seperateDataIntoObject(dataFromAPI);
        displayData(weatherDataObject);
        locationField.value = "";
    } catch (error) {
        errorHandler(error);
    }
    showLoading(false);
});

locationField.addEventListener("input", () => {
    locationField.setCustomValidity("");
});

showLoading(true);
getDataFromAPI("London")
    .then((weatherData) => {
        const weatherDataObject = seperateDataIntoObject(weatherData);
        displayData(weatherDataObject);
        showLoading(false);
    })
    .catch(errorHandler);
