const KEY = window.CONFIG.WEATHER_API_KEY;

async function getWeatherData() {
  const url = `api.openweathermap.org/data/2.5/weather?q=Sundsvall,uk&APPID=${KEY}&units=metric`
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

    weatherCont.textContent = `Just nu: Östersund ${temp}°C, ${weather}: ${desc}`
    weatherCont.prepend(img);
  }
  catch (error) {
    console.error(error.message)
  }
}