const propertyModel = require('../models/property.model');

const property = {
    getPropertyByLocation: (req, res) => {
        const locationParams = {
            user_lat: Math.floor(req.body.user_lat),
            user_long: Math.floor(req.body.user_long),
        };
        propertyModel.getPropertyByLocation(locationParams, (results) => {
            if (results.Error) {
                res.status(400).send(results);
            }
            res.json(results);
        })
    },
    getPropertyBookingsByPropertyID: (req, res) => {
        const property_id = req.params.property_id;
        propertyModel.getPropertyBookingsByPropertyID(property_id, (results) => {
            if (results.Error) {
                res.status(400).send(results);
            }
            res.json({ bookings: results });
        })
    }
}

const dataUtilities = {
    convertToUsersObject = function (collectionToConvert) {
        collectionToConvert.forEach(element => {
            let users = {};
            
        });
    }
}

module.exports = property;