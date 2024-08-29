const express = require('express');
const route = express.Router();
const location_controller = require('../controller/location_controller');

route.get('/', location_controller.getLocation);

route.post('/', location_controller.addLocation);

route.put('/', location_controller.updateLocation);

route.delete('/', location_controller.deleteLocation);

module.exports = route