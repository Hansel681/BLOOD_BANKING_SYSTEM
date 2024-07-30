const express = require('express');
const route = express.Router();
const hosp_controller = require('../controller/hospital_controller');

route.get('/', hosp_controller.getallhospitals);

route.post('/', hosp_controller.saveHospital);

route.put('/', hosp_controller.updateHospital);

route.delete('/', hosp_controller.deleteHospital);

module.exports = route