const express = require('express');
const route = express.Router();
const bloodbank_controller = require('../controller/bloodbank_controller');

route.get('/', bloodbank_controller.getBloodbank);

route.post('/',  bloodbank_controller.addBloodbank);

route.put('/', bloodbank_controller.updateBloodbank);

route.delete('/:id', bloodbank_controller.deleteBloodbank);

module.exports = route