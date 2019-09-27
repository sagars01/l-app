const user = require('../models/users.model');

module.exports.getAllUsers = function(req, res) {
    user.getAllUsers((results) => {
        res.status(200).json(results);
    })
}