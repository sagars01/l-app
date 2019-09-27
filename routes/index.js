var express = require('express');
var router = express.Router();

const userControllers = require('../controllers/users.controller');
const propertyRoutes = require('./property');
const bookingRoutes = require('./book');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(express.static(path.join(__dirname, 'public/dist/public')))
});

/* GET users listing. */
router.get('/users', userControllers.getAllUsers);
router.get('/users/:user_id/bookings', userControllers.getUserBookings);

/** GET properties based on users location co-ordination */
router.use('/property', propertyRoutes);
router.use('/bookings', bookingRoutes)

module.exports = router;
