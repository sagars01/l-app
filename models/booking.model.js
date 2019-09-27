const sql = require('../database');

const booking = {
    newBooking: function (params, result) {
        const timeStamp = Math.floor(new Date() / 1000);
        const booking_uid = params.user_id + params.property_id + timeStamp;

        const newBookingQuery = `INSERT INTO bookings (property_id , booking_userid, booking_date, booking_uid) VALUES ( ${params.property_id}, ${params.user_id}, ${timeStamp} , ${booking_uid})`
        sql.query(newBookingQuery, (err, success) => {
            if (err) {
                result({ Error: err })
            } else {
                result(success);
            }
        });
    }
}

module.exports = booking;