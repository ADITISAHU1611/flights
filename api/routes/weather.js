const express = require('express');
const router = express.Router();
const { getWeather } = require('../../controllers/weatherController');

router.get('/:location', getWeather);

module.exports = router;
