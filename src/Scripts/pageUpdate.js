const skyCondition = document.querySelector("#sky-condition");

const skyConditionImage = document.querySelector("#sky-condition-image");

const locationName = document.querySelector("#location-name");

const country = document.querySelector("#country");

const date = document.querySelector("#date");

const localTime = document.querySelector("#local-time");

const actualTemp = document.querySelector("#actual-temp");

const feelsLikeTemp = document.querySelector("#feels-like-temp");

const humidity = document.querySelector("#humidity");

const windSpeed = document.querySelector("#wind-speed");

const gustSpeed = document.querySelector("#gust-speed");

const visibility = document.querySelector("#visibility");

const getWeatherDataButton = document.querySelector("#get-weather-data-button");

function showLoading(loading) {
    if (loading) {
        getWeatherDataButton.textContent = "Loading...";
    } else getWeatherDataButton.textContent = "Get Weather Data";
}

function displayData(weatherDataObject) {
    skyCondition.textContent = `Sky Condition - ${weatherDataObject.skyCondition}`;
    skyConditionImage.src = weatherDataObject.skyConditionImage;
    locationName.textContent = `${weatherDataObject.locationName}`;
    country.textContent = `${weatherDataObject.country}`;
    date.textContent = `Date ${weatherDataObject.date}`;
    localTime.textContent = `${weatherDataObject.localTime} Local Time`;
    actualTemp.textContent = `Temperature ${weatherDataObject.actualTemp}°C`;
    feelsLikeTemp.textContent = `Feels like ${weatherDataObject.feelsLikeTemp}°C`;
    humidity.textContent = `Humidity ${weatherDataObject.humidity}%`;
    windSpeed.textContent = ` Wind Speed ${weatherDataObject.windSpeed} kph`;
    gustSpeed.textContent = ` Gust Speed ${weatherDataObject.gustSpeed} kph`;
    visibility.textContent = `Visibility ${weatherDataObject.visibility} km`;
}

export { showLoading, displayData };
