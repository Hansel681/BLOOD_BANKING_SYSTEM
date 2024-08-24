const express = require('express');
const route = express.Router();
const bloodreq_controller = require('../controller/bloodreq_controller');

route.get('/', bloodreq_controller.getbloodrequest);

route.post('/',  bloodreq_controller.addBloodrequest);

route.put('/', bloodreq_controller.updateBloodrequest);

route.delete('/:id', bloodreq_controller.deleteBloodrequest);

module.exports = route