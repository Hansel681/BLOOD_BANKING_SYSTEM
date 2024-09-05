const express = require('express');
const route = express.Router();
const auth_controller = require('../controller/auth_controller')

route.post('/signup', auth_controller.signup);
route.post('/signin', auth_controller.signIn);

route.put('/update', auth_controller.updateUser);


route.delete('/delete/:id ', auth_controller.deleteUser);



module.exports = route




