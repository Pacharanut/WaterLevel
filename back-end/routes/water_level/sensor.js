const express = require('express');
const router = express.Router();

const sensorController = require('../../controllers/water_level/sensorController');


//Get
router.get('/', sensorController.getSensor);
router.get('/last', sensorController.getRuralroad);


module.exports = router;
