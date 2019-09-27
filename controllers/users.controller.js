const user = require('../models/users.model');

const users = {
    getAllUsers: function (req, res) {
        user.getAllUsers((results) => {
            res.status(200).json(results);
        })
    },
    getUserBookings: function (req, res) {
        const bookingId = req.params.user_id;
        user.getUserBookings(bookingId, (results) => {
            if (results.Error) {
                res.status(400).send(results.Error.sqlMessage);
            } else {
                res.json(results);
            }

        })
    }
}

module.exports = users;