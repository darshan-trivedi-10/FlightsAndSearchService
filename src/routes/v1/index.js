const express = require('express');
const {CityController, FlightController,AirportController} = require('../../controllers/index');
const {FlightMiddleware} = require('../../middleware/index');

const router = express.Router();

router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destory);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll)

router.post('/flights', FlightMiddleware.validateCreateFlight, FlightController.create);
router.get('/flights', FlightController.getAll);

router.post('/airports',AirportController.create);

module.exports = router;