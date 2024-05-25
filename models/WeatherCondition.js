const mongoose = require('mongoose');

const weatherConditionSchema = new mongoose.Schema({
    location: String,
    temperature: Number,
    visibility: Number,
    windSpeed: Number,
    condition: String
});

module.exports = mongoose.model('WeatherCondition', weatherConditionSchema);
