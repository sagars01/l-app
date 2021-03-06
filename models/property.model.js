const sql = require('../database');

const property = function (property) {
    this.idproperty = property.idproperty;
    this.property_name = property.property_name;
    this.property_location = property.property_location;
    this.property_lat = property.property_lat;
    this.property_long = property.property_long;
    this.property_category = property.property_category;
}

property.getPropertyByLocation = function (locationParams, result) {
    const radiusOfSearch = 100; // in KMS
    const getPropertyQuery = `
    SELECT 
        idproperty, 
        property_name,
        property_lat,
        property_long,
        property_location,
        (
        6371 *
        acos(cos(radians(${locationParams.user_lat})) * 
        cos(radians(property_lat)) * 
        cos(radians(property_long) - 
        radians(${locationParams.user_long})) + 
        sin(radians(${locationParams.user_lat})) * 
        sin(radians(property_lat )))
        ) AS distance 
        FROM property 
        HAVING distance < ${radiusOfSearch}
        ORDER BY distance LIMIT 10;

    `;
    sql.query(getPropertyQuery, (err, res) => {
        if (err) {
            result({ Error: err })
        } else {
            result(res);
        }
    });

}

property.getPropertyBookingsByPropertyID = function (idproperty, result) {
    const query = `
    SELECT * FROM bookings 
    RIGHT JOIN property ON  bookings.property_id = property.idproperty 
    RIGHT JOIN users ON bookings.booking_userid = users.id
    WHERE idproperty = ${idproperty};`
    sql.query(query, (err, res) => {
        if (err) {
            result({ Error: err })
        } else {
            result(res);
        }
    });
}

module.exports = property;