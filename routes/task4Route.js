const express = require('express');
const route = express.Router();
const controller = require('../controllers/task4Controller');

route.get('/', controller.getList);
//route.get('/:name', controller.getItem);

module.exports = route;
