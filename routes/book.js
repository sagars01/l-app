const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/booking.controller');


/** GET properties based on users location co-ordination */
router.post('/new' , bookingController.bookProperty);

module.exports = router;
