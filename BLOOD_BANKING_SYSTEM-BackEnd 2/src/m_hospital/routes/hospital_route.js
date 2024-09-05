const express = require('express');
const route = express.Router();
const hospital_controller = require('../controller/hospital_controller');

route.get('/', hospital_controller.getHospital);

route.post('/', hospital_controller.addHospital);

route.put('/', hospital_controller.updateHospital);

route.delete('/:id', hospital_controller.deleteHospital);

module.exports = route