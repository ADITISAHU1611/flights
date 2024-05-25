// api/routes/navigation.js
const express = require('express');
const router = express.Router();
const navigationController = require('../../controllers/navigationController');

router.post('/plan', navigationController.planRoute);

module.exports = router;
