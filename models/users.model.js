const sql = require('../database');

const users = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.email = user.email;
    this.birthdate = user.birthdate;
    this.added = user.added ? user.added : '';
}

users.getAllUsers = function (result) {
    sql.query('SELECT * FROM users', (err, res) => {
        if (err) {
            result(err)
        } else {
            result(res);
        }
    });
}

users.getUserBookings = function (userId, result) {
    const bookingQuery = `SELECT id, property_id, property_location as city, property_name, from_unixtime(booking_date) as booking_date FROM users AS u
    LEFT JOIN bookings AS b ON u.id = b.booking_userid
    LEFT JOIN property AS p ON p.idproperty = b.property_id
    WHERE id = ${userId}
    ORDER BY booking_date desc
    `

    sql.query(bookingQuery, (err, res) => {
        if (err) {
            result({ Error: err })
        } else {
            result(res);
        }

    })
}

module.exports = users;