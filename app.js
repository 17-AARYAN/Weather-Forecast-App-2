document.getElementById('get-weather').addEventListener('click', function () {
    const city = document.getElementById('city').value.trim();
    const apiKey = 'your_api_key_here';
    const weatherInfo = document.getElementById('weather-info');

    // Clear previous weather info
    weatherInfo.textContent = '';

    // Check if city input is empty
    if (!city) {
        weatherInfo.textContent = 'Please enter a city name.';
        return;
    }

    // Display a loading message while fetching the weather data
    weatherInfo.textContent = 'Fetching weather data...';

    // Build the URL with the provided city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch the weather data from the API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found or API error (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            const description = data.weather[0].description;
            const temperature = data.main.temp;

            // Display the weather description and temperature
            weatherInfo.textContent = `Current weather in ${city}: ${description}, ${temperature}°C`;
        })
        .catch(error => {
            // Handle different types of errors (e.g., city not found, network issues)
            if (error.message.includes('City not found')) {
                weatherInfo.textContent = 'City not found. Please try another city.';
            } else {
                weatherInfo.textContent = 'Failed to fetch weather data. Please check your internet connection or try again later.';
            }
            console.error('Error fetching weather data:', error);
        });
});

