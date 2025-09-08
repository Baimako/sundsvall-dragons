const toggleBtn = document.getElementById("toggle-color");
const weatherCont= document.getElementById('weather');

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
});

const KEY = window.CONFIG.WEATHER_API_KEY;

getWeatherData();

async function getWeatherData() {
    const lat = 62.39129;
    const lon = 17.3063;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`
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

    weatherCont.textContent = `Just nu: Sundsvall ${temp}°C, ${weather}: ${desc}`
    weatherCont.prepend(img);
  }
  catch (error) {
    console.error(error.message)
  }
}