const { Airport } = require('../models/index');

class AirportRepository {
    async createAirport(airport_data) {
        try {
            const airport = await Airport.create(airport_data);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteAirport(airportId) {
        try {
            await Airport.destory({
                where: {
                    id: airportId
                }
            })
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateAirport(airportId, airport_data) {
        try {
            const airport = await Airport.findByPk(airportId);
            airport = airport_data;
            await airport.save();
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async getAirport(airportId) {
        try {
            const airport = await Airport.findByPk(airportId);
            return airport;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = AirportRepository;