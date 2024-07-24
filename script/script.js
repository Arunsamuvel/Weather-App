"use strict";
// sealcting the inputs variables

// api fetching variables
const apiKeys = "439cc987271d09399cd1cc35909e764e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

//   creating input for taking the user inputs
const searchBox = document.querySelector(".search input");

// search button for give the input from the user
const searchBtn = document.querySelector(".search button");

// i used the weather icon variables for change the weather icon for diff city
const weatherIcon = document.querySelector(".weather-icon");

// functions

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKeys}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    //   here the response from the api url inputs will converted into json file and stored into the data
    var data = await response.json();
    console.log(data);
    // here after the converting the json file we use object dot notation method to get the right inputs from the json
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humd").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    // if else statement for creating weather icons

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "Assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "Assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "Assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "Assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "Assets/images/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
  // here i call the function when the button is clicked
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
