// controllers/navigationController.js
const axios = require('axios');

const OPENROUTESERVICE_API_KEY = '5b3ce3597851110001cf6248d55b2dfd445f4635b4b371727325bd73';
const OPENWEATHERMAP_API_KEY = '7f0fba4a0981b0c7f1576bd06cbe1d4d';

// Get possible routes between start and end locations
async function getRoutes(start, end) {
  const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${OPENROUTESERVICE_API_KEY}&start=${start.lng},${start.lat}&end=${end.lng},${end.lat}`;
  const response = await axios.get(url);
//   console.log(response);
  if (response.status === 200) {
    return response.data.features;
  } else {
    throw new Error(`Error fetching routes: ${response.status}`);
  }
}

// Check weather along a given route
async function checkWeatherAlongRoute(route) {
  const weatherConditions = [];

    for (let segment of route.geometry.coordinates) {
//     console.log(segment);
    // for (let step of segment.steps) {
        // console.log(step.way_points);
      const { lat, lng } = segment;
    //   console.log('Access');
    //   console.log(lat,lng);
      const weather = await getWeather(lat, lng);
      weatherConditions.push(weather);
  }

  return weatherConditions;
}

// Get weather for a given latitude and longitude
async function getWeather(lat, lng) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
}

// Determine if weather conditions are suitable
function isWeatherSuitable(weatherConditions) {
  return weatherConditions.every(condition => condition.weather[0].main !== 'Rain');
}

// Get a random suitable route between start and end locations
async function getRandomSuitableRoute(start, end) {
  const routes = await getRoutes(start, end);
//   console.log(routes);
  for (let route of routes) {
    const weatherConditions = await checkWeatherAlongRoute(route);
    if (isWeatherSuitable(weatherConditions)) {
      return route;
    }
  }
  throw new Error('No suitable route found based on weather conditions');
}

// Example usage

// Example usage:

const dataService = require('../services/dataService');

const planRoute = async (req, res) => {
    const { origin, destination, flightNumber } = req.body;

    try {
        const weatherData = await dataService.getWeatherData(origin,destination, flightNumber);
        const flightData = await dataService.getFlightData(origin, destination, flightNumber);
        const start = { lat: 12.9716, lng: 77.5946 }; // New York, NY
        const end = { lat: 26.8467, lng: 80.9462 }; // Los Angeles, CA


        const routeData=getRandomSuitableRoute(start, end);
        // Add logic to plan the route considering weather and flight data...

        res.status(201).json({ 
            origin, 
            destination, 
            weatherData, 
            flightData,
            routeData
            // Add other data to the response...
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to plan route', details: error.message });
    }
};

module.exports = {
    planRoute
};

