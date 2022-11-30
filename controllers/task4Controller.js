const { zodiacs } = require('../models/data');
const title = 'Zodiac Characteristics';

const getList = (req, res) => {
  res.render('task4', { title, zodiacs });
};

const getItem = (req, res) => {
  const _name = req.params.name;
  const item = zodiacs.find(({ name }) => name === _name) || zodiacs[0];
  res.render('task4-details', { title, zodiacs: [item] });
};


module.exports = {
  getList,
  getItem,
};
