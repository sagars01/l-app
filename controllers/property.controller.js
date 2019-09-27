const user = require('../models/users.model');
const property = require('../models/property.model');

module.exports.getPropertyByLocation = function (req, res) {
    const locationParams = {
        user_lat: Math.floor(req.body.user_lat),
        user_long: Math.floor(req.body.user_long),
    };
    property.getPropertyByLocation(locationParams, (results) => {
        res.status(200).json(results);
    })
}