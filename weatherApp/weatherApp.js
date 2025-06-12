import apiKey from "./config.js";
const weatherForm = document.querySelector(".weatherForm");
const containeer = document.querySelector(".containeer");
const cityInput = document.querySelector(".cityInput");

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherData(weatherData);

        }catch(error){
            console.error(error);
            displayErrorMsg(error);
        }
    }
    else{
        displayErrorMsg("Please enter your city");
    }
})

async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Couldnot fetch the data");
    }
    return await response.json();   
}

function displayWeatherData(weatherData){

    const {name: city, 
            main: {temp, humidity}, 
            weather: [{description, id}]} = weatherData; 
    containeer.textContent = "";
    containeer.style.display = "flex";


    const displayCity = document.createElement("h1");
    const displayTemp = document.createElement("p");
    const displayHumidity = document.createElement("p");
    const displayDescription = document.createElement("p");
    const displayEmoji = document.createElement("p");

    displayCity.textContent = city;
    displayTemp.textContent = `${temp}°C`;
    displayHumidity.textContent = `Humidity :${humidity}%`;
    displayDescription.textContent = description;
    displayEmoji.textContent = getWeatherEmoji(id);

    containeer.appendChild(displayCity);
    containeer.appendChild(displayTemp);
    containeer.appendChild(displayHumidity);
    containeer.appendChild(displayDescription);
    containeer.appendChild(displayEmoji);

/*     containeer.classList.add("p");
    containeer.classList.add("temp");
    containeer.classList.add("p");
    containeer.classList.add("city");
    containeer.classList.add("city");
    containeer.classList.add("city"); */

    displayCity.classList.add("city");
    displayTemp.classList.add("temp");
    displayHumidity.classList.add("description");
    displayDescription.classList.add("description");
    displayEmoji.classList.add("emoji");

    console.log(description);
    
}

function getWeatherEmoji(id){
    switch (true){
        case (id >= 200 && id < 300):
        return "⛈️";
        break;

        case (id >= 300 && id < 500):
        return "🌧️";
        break;

        case (id >= 500 && id < 600):
        return "☔";
        break;

        case (id >= 600 && id < 700):
        return "☃️";
        break;

        case (id >= 700 && id < 800):
        return "🌫️";
        break;

        case (id === 800):
        return "☀️";
        break;

        case (id > 800):
        return "☁️";
        break;

    }
}

function displayErrorMsg(message){
    const error = document.createElement("p");
        
    error.textContent = message;
    error.classList.add("errorDisplay");
    console.log(message);

    containeer.textContent = ""
    containeer.style.display = "flex";
    containeer.appendChild(error);
}