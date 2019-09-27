var express = require('express');
var router = express.Router();

const userControllers = require('../controllers/users.controller');
const propertyRoutes = require('./property');
const bookingRoutes = require('./book');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/users', userControllers.getAllUsers);

/** GET properties based on users location co-ordination */
router.use('/property', propertyRoutes);
router.use('/bookings' , bookingRoutes)

module.exports = router;
