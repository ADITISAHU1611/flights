const WeatherCondition = require('../models/WeatherCondition');
const { getWeatherData } = require('../services/dataService');

const getWeather = async (req, res) => {
    const { location } = req.params;
    const weatherData = await getWeatherData(location);

    const weatherCondition = new WeatherCondition({
        location,
        temperature: weatherData.main.temp,
        visibility: weatherData.visibility,
        windSpeed: weatherData.wind.speed,
        condition: weatherData.weather[0].description
    });

    await weatherCondition.save();
    res.json(weatherCondition);
};

module.exports = {
    getWeather
};
