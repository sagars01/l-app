const user = require('../models/users.model');
const bookingModel = require('../models/booking.model');

const booking = {
    bookProperty: function (req, res) {
        const bookingParams = {
            user_id: req.body.user_id,
            property_id: req.body.property_id,
        };
        bookingModel.newBooking(bookingParams, (results) => {
            if (results.Error) {
                res.status(400).send(results.Error.sqlMessage);
            } else {
                res.send('OK');
            }

        })
    }
}

module.exports = booking;