const express = require('express');
const route = express.Router();
const bloodgroup_controller = require('../controller/bloodgroup_controller');

route.get('/', bloodgroup_controller.getbloodrequest);

route.post('/',  bloodgroup_controller.addBloodrequest);

route.put('/', bloodgroup_controller.updateBloodrequest);

route.delete('/:id', bloodgroup_controller.deleteBloodrequest);

module.exports = route