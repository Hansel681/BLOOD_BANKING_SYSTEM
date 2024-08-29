const express = require('express');
const route = express.Router();
const bloodgroup_controller = require('../controller/bloodgroup_controller');

route.get('/', bloodgroup_controller.getBloodgroup);

route.post('/',  bloodgroup_controller.addBloodgroup);

route.put('/', bloodgroup_controller.updateBloodgroup);

route.delete('/:id', bloodgroup_controller.deleteBloodgroup);

module.exports = route