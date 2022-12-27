const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "YOUR_API_KEY";

const getWeather = async (city) => {
  // Get the current weather for a specific location
  const params = {
    q: city,
    units: "imperial",
    appid: apiKey,
  };
  const response = await fetch(apiEndpoint, { params });
  const weather = await response.json();

  // Extract the current temperature and summary from the weather data
  const temperature = weather['main']['temp'];
  const summary = weather['weather'][0]['description'];

  // Update the page with the weather data
  const temperatureElement = document.getElementById("temperature");
  temperatureElement.textContent = temperature;
  const summaryElement = document.getElementById("summary");
  summaryElement.textContent = summary;
};

const searchWeather = () => {
  // Get the city entered by the user
  const cityInput = document.getElementById("city-input");
  const city = cityInput.value;

  // Get the weather for the specified city
  getWeather(city);
};

document.getElementById("search-button").addEventListener("click", searchWeather);
