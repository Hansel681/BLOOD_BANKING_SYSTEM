const express = require('express');
const route = express.Router();
const hosp_controller = require('../controller/hospital_controller');

route.get('/', hosp_controller.getHospital);

route.post('/', hosp_controller.addHospital);

route.put('/', hosp_controller.updateHospital);

route.delete('/', hosp_controller.deleteHospital);

module.exports = route