const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/property.controller');


/** GET properties based on users location co-ordination */
router.post('/bylocation' , propertyController.getPropertyByLocation)

module.exports = router;
