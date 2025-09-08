
getWeatherData();

async function getWeatherData() {
const long = 62.39129;
const lat = 17.3063;
const KEY = window.CONFIG.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${KEY}&units=metric`
  try {
    const response = await fetch(url);
    if (!response.ok) {console.log(`${response.status}`)}

    const res = await response.json();

    const temp = Math.round(res.main.temp);
    const weather = res.weather[0].main;
    const desc = res.weather[0].description;
    const icon = res.weather[0].icon;

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = desc;
    const weatherCont = document.createElement('div');
    weatherCont.classList.add("weather-div");

    weatherCont.textContent = `Just nu: Sundsvall ${temp}°C, ${weather}: ${desc}`
    weatherCont.prepend(img);
    document.getElementById('weather').append(weatherCont);
  }
  catch (error) {
    console.error(error.message)
  }
}