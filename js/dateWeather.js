// Date ===============================================
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
const weekday = { weekday: 'long' };
const weekdayShort = { weekday: 'short' };
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const innerDay = document.querySelector("#day")
const cityInput = document.querySelector("#cityInput")
const showWeatherBtn = document.querySelector("#showWeather")
const anotherCityBtn = document.querySelector("#anotherCity")
const weatherMainBlock = document.querySelector("#weatherMainBlock")
const weatherForm = document.querySelector("#weatherForm")
const currentCity = document.querySelector("#currentCity")
let cityName = "Khmelnytskyi";

const showCity = (city) => {
    currentCity.innerHTML = city.name;
    // console.log("showCity", city.name);
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

async function getApiWeather(cityName) {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bfc9c92a94e18bfe80b9636b9e6f50d&units=metric`)
    let weather = await data.json()
    console.log(weather);

    return weather;
}
getApiWeather(cityName)
    .then(weather => {
        currentCity.innerHTML = cityName;
        renderWether(weather);
    })

const weatherUl = document.querySelector("#weather-ul");

const renderWether = (weather) => {
        // console.log(weather);
    const div = `
    <div class="row mb-2">
        <div class="col-12 col-md-3 mb-1">
            <p>Max:&#8195;${weather.main.temp_max.toFixed(0)}°C</p>
            <p>Min:&#8195;${weather.main.temp_min.toFixed(0)}°C</p>
        </div>
        <hr>
        <div class="col-12 col-md-5 mb-1">
            <p>Country:&#8195;${weather.sys.country}</p>
            <p>Description:&#8195;${weather.weather[0].description}</p>
        </div>
        <hr>
        <div class="col-12 col-md-4 text-md-right">
           <p>Sunrise:&#8195;${getSunrise(weather)}</p>
            <p>Sunset:&#8195;${getSunset(weather)}</p>
        </div>
    </div>
    `
    return weatherMainBlock.innerHTML = div;
}
showDate()

// ========================= Show Weather

function getSunset(weather) {
    const sunset = new Date(weather.sys.sunset * 1000);
    sunset_date = sunset.toLocaleTimeString();
    console.log("sunset", sunset_date);
    return sunset_date
}
function getSunrise(weather) {
    const sunrise = new Date(weather.sys.sunrise * 1000);
    sunrise_date = sunrise.toLocaleTimeString();
    console.log("sunrise", sunrise_date);
    return sunrise_date;
}

const showWeather = (event) => {
    event.preventDefault()

    getApiWeather(cityInput.value)
        .then(weather => {
            if (weather.cod !== 200) {
                document.querySelector("#error").innerHTML = "'" + cityInput.value + "'" + " city not found";
            } else {
                showCity(weather);
                renderWether(weather);
                event.target.closest(".weatherForm").style.transform = "translateY(-100%)"
                anotherCityBtn.style.transform = "translateY(0)";
                cityInput.value = "";
                document.querySelector("#error").innerHTML = ""
                getSunset(weather)
            }
            return weather
        })
}

function anotherCity() {
    weatherForm.style.transform = "translateY(0)"
    this.style.transform = "translateY(100%)"
}

showWeatherBtn.addEventListener("click", showWeather)
anotherCityBtn.addEventListener("click", anotherCity)