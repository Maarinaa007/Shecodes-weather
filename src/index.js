let apiKey = "858287e72afe4293bf213772acd12615";

function searchCity(city) {
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
}

function search(event) {
event.preventDefault();
let cityInput = document.querySelector("#search-text-input");
searchCity(cityInput.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function searchLocation(position) {
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apiKey}`;
axios.get(url).then(showCurrentLocation);
}

function showTemperature(response) {
console.log(response.data);
let city = document.querySelector("#displayCity");
city.innerHTML = response.data.name;

let description = document.querySelector("#description");
description.innerHTML = response.data.weather[0].main;

let temperature = document.querySelector(".temperature");
temperature.innerHTML = Math.round(response.data.main.temp);

let icon = document.querySelector(".weather-icon");
let iconCode = response.data.weather[0].icon;
icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}