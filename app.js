document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'your_api_key_here';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.weather) {
                weatherInfo.textContent = `Current weather in ${city}: ${data.weather[0].description}`;
            } else {
                weatherInfo.textContent = 'City not found.';
            }
        })
        .catch(error => console.log(error));
});
