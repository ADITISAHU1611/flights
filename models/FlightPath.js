const mongoose = require('mongoose');

const flightPathSchema = new mongoose.Schema({
    origin: String,
    destination: String,
    waypoints: Array,
    riskFactors: Array,
    optimalPath: Array
});

module.exports = mongoose.model('FlightPath', flightPathSchema);
