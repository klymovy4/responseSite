// Date ===============================================
let date = new Date();
let day = date.getDate();
const tomorrow = new Date(date)
tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow);


let month = date.getMonth();
let year = date.getFullYear();
const weekday = { weekday: 'long' };
const weekdayShort = { weekday: 'short' };
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function innerZiro(n) {
    let ziro = "0"
    if (n < 10) {
        return ziro + n
    } else {
        return n
    }
}

function showDate() {
    const innerDay = document.querySelector("#day")
    return innerDay.innerHTML = innerZiro(day) + "/" + innerZiro(month + 1) + "/" + year;
};

// innerDay.innerHTML = moment().format('L'); 

// function showDateShort() {

//     return weatherUl.innerHTML = innerZiro(day) + "/" + innerZiro(month + 1) + "/" + year;
// };
const curentDay = date.toLocaleDateString('en-US', weekday)
const curentDayShort = date.toLocaleDateString('en-US', weekdayShort)
const curentNextDayShort = tomorrow.toLocaleDateString('en-US', weekdayShort)
// console.log(curentNextDayShort);

// document.querySelector(".weekday").innerHTML = curentDay;

// Date END ===============================================
// Weather ================================================

async function getApiWeather() {
    let data = await fetch('http://api.openweathermap.org/data/2.5/forecast?q=Khmelnytskyi&appid=4bfc9c92a94e18bfe80b9636b9e6f50d&units=metric')
    let weather = await data.json()
    return weather;
}
getApiWeather()
    .then(weather => {
        showCity(weather.city.name);
        console.log(weather);
        return weather
    })
    .then(weather => {
        renderWether(weather);
        return weather
    })

const showCity = (city) => {
    document.querySelector("#city").innerHTML = city

}
const showTemperatureMin = (temperature) => {
    return temperature.list[0].main.temp_min
}
const showTemperatureMax = (temperature) => {
    return temperature.list[0].main.temp_max
}

const weatherUl = document.querySelector("#weather-ul");
const renderWether = (weather) => {
    const li = `
        <li class="weather-li">
            <h4 class="">${curentDayShort}</h4>
            <span></span>
            <i class="fas fa-bolt"></i>
            <span class="max">Max ${showTemperatureMax(weather).toFixed(0)}</span>
            <span class="min">Min ${showTemperatureMin(weather).toFixed(0)}</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Th</h4>
            <span></span>
            <i class="far fa-moon mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Fr</h4>
            <i class="fas fa-rainbow mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Sa</h4>
            <i class="fas fa-cloud-sun-rain mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Su</h4>
            <i class="fas fa-cloud-rain mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Mo</h4>
            <i class="far fa-sun mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
        <li class="weather-li">
            <h4 class="my-2">Tu</h4>
            <i class="fas fa-cloud-moon-rain mt-2"></i>
            <span class="max mt-2">Max 23</span>
            <span class="min mt-1 mb-2">Min 12</span>
        </li>
    `
    return weatherUl.innerHTML = li
}
showDate()
