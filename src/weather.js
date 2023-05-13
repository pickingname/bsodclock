const key = 'fef71557e6445a92858b4237152e9604';
// get ip to calculate the location
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipAddress = data.ip;
    console.log(ipAddress)
    // use the ip to get lat and lon
    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then(response => response.json())
      .then(data => {
        const { lat, lon } = data;
        console.debug(lat)
        console.debug(lon)
        // Finally, use the retrieved latitude and longitude to make the OpenWeatherAPI request
        const key = 'fef71557e6445a92858b4237152e9604';
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
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
      });
  });
