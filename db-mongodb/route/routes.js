const express = require('express');
const { getUsers,addUser,getUserById,editUser,deleteUser } = require('../controller/userController');

const route = express.Router();

route.get('/', getUsers);
route.post('/add', addUser);
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);


module.exports = route;