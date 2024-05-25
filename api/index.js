// api/index.js

const express = require('express');
const router = express.Router();

const navigationRoutes = require('./routes/navigation');
const healthRoutes = require('./routes/health');
const weatherRoutes = require('./routes/weather');

router.use('/navigation', navigationRoutes);
router.use('/health', healthRoutes);
router.use('/weather', weatherRoutes);

module.exports = router;
