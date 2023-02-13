const {ClientErrorsCodes} = require('../utils/error-codes');

const validateCreateFlight = (req, res, next) => {
    if (
        !req.body.flightNumber ||
        !req.body.airplaneId || 
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorsCodes.BAS_REQUEST).json({
            data : {},
            success : false,
            message : 'Invalid request body for create flight',
            error : 'Missing mandatory properties to create a flight'
        })
    }

    next();
}

module.exports = {
    validateCreateFlight
}