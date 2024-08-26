const express = require('express');
const route = express.Router();
const bbankcontent_controller = require('../controller/bbankcontent_controller');

route.get('/', bbankcontent_controller.getBloodbankcontent);

route.post('/',  bbankcontent_controller.addBloodbankcontent);

route.put('/', bbankcontent_controller.updateBloodbankcontent);

route.delete('/:id', bbankcontent_controller.deleteBloodbankcontent);

module.exports = route