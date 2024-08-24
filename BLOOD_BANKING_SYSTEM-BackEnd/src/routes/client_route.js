const express = require('express');
const route = express.Router();
const client_controller = require('../controller/client_controller');

route.get('/', client_controller.getClient);

route.post('/',  client_controller.addClient);

route.put('/', client_controller.updateClient);

route.delete('/:id', client_controller.deleteClient);

module.exports = route
