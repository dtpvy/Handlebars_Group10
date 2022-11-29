const express = require('express');
const route = express.Router();
const controller = require('../controllers/task1Controller');

route.get('/', (req, res) => {
  controller.default(req, res);
});

route.get('/:title', (req, res) => {
  controller.showRelatedQuote(req, res);
});

module.exports = route;
