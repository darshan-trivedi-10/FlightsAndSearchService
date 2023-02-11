const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destory);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll)

router.post('/flights', FlightController.create);

module.exports = router;