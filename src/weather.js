require('dotenv').config();

const key = process.env.OPEN_WEATHER_MAP_API_KEY;
console.log(key)
const openWeatherMapApiKey = process.env.OPEN_WEATHER_MAP_API_KEY;
        // get!111!!!1
        console.debug('fetching weather')
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=13.668217&lon=100.614021&appid=${openWeatherMapApiKey}&units=metric`)
          .then(response => response.json())
          .then(data => {
            const { weather, main } = data;
            const temperature = Math.round(main.temp);
            const description = weather[0].description;

            const weatherParagraph = document.getElementById('weather');
            weatherParagraph.textContent = `${temperature}°C ${description.charAt(0).toUpperCase() + description.slice(1)}`;
            console.debug('done fetching weather')
            console.log(weather)
          });
