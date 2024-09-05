const express = require('express');
const route = express.Router();
const hospitalpatient_controller = require('../controller/hospitalpatient_controller');

route.get('/', hospitalpatient_controller.getHospitalpatient);

route.post('/', hospitalpatient_controller.addHospitalpatient);

route.put('/', hospitalpatient_controller.updateHospitalpatient);

route.delete('/:id', hospitalpatient_controller.deleteHospitalpatient);

module.exports = route