// controllers/healthController.js

exports.getHealthStatus = (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString()
    });
};
