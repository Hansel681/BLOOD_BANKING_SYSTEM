const express = require('express');
const route = express.Router();
const bloodrequest_controller = require('../controller/bloodrequest_controller');

route.get('/', bloodrequest_controller.getBloodrequest);

route.post('/',  bloodrequest_controller.addBloodrequest);

route.put('/', bloodrequest_controller.updateBloodrequest);

route.delete('/:id', bloodrequest_controller.deleteBloodrequest);

module.exports = route