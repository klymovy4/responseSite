// Date ===============================================
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const weekday = { weekday: 'long' };
const weekdayShort = { weekday: 'short' };
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const innerDay = document.querySelector("#day")
let cityName = "London";

const showCity = (city) => {
    document.querySelector("#currentCity").innerHTML = city.name;
    console.log("showCity", city.name);
}
function innerZiro(n) {
    let ziro = "0"
    if (n < 10) {
        return ziro + n
    } else {
        return n
    }
}
function showDate() {
    return innerDay.innerHTML = innerZiro(day) + "/" + innerZiro(month + 1) + "/" + year;
};

// Date END ===============================================
// Weather ================================================

const temp = undefined;
const country = undefined;
const sunrise = undefined;
const sunset = undefined;
const error = undefined;

async function getApiWeather(cityName) {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bfc9c92a94e18bfe80b9636b9e6f50d&units=metric`)
    let weather = await data.json()
    return weather;
}
getApiWeather(cityName)
    .then(weather => {
        showCity(cityName);
      console.log(cityName);
        
        renderWether(weather);

    })




const weatherUl = document.querySelector("#weather-ul");

const renderWether = (weather) => {

    const div = `
    <div class="row pl-3">
        <div class="col-4">
            <p>Max:&#8195;${weather.main.temp_max.toFixed(0)}°C</p>
            <p>Min:&#8195;${weather.main.temp_min.toFixed(0)}°C</p>
        </div>
        <div>
            <p>Pressure:&#8195;${weather.main.pressure}</p>
            <p>Description:&#8195;${weather.weather[0].description}</p>
        <div>
    </div>
    `
    return weatherMainBlock.innerHTML = div;
}
showDate()

// ========================= Show Weather

const cityInput = document.querySelector("#cityInput")
const showWeatherBtn = document.querySelector("#showWeather")
const anotherCityBtn = document.querySelector("#anotherCity")
const weatherMainBlock = document.querySelector("#weatherMainBlock")
const weatherForm = document.querySelector("#weatherForm")

const showWeather = (event) => {
    event.preventDefault()

    getApiWeather(cityInput.value)
        .then(weather => {
            if (weather.cod !== 200) {
                document.querySelector("#error").innerHTML = "'" + cityInput.value + "'" + " city not found";
            } else {
                showCity(weather);
                renderWether(weather);
                event.target.closest(".form-inline").style.transform = "translateY(-110%)"
                anotherCityBtn.style.transform = "translateY(0)";
                cityInput.value = "";
            }
            return weather
        })
}

function anotherCity() {
    weatherForm.style.transform = "translateY(0)"
    this.style.transform = "translateY(100%)"
    document.querySelector("#error").innerHTML = ""
}




showWeatherBtn.addEventListener("click", showWeather)
anotherCityBtn.addEventListener("click", anotherCity)

