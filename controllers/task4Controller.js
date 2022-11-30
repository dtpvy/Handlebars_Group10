const { zodiacs } = require('../models/data');
const title = 'Zodiac Characteristics';
const id = '20127098 - Đỗ Thuỵ Phương Vy';

const getList = (req, res) => {
  res.render('task4', { title, zodiacs, id });
};

const getItem = (req, res) => {
  const _name = req.params.name;
  const item = zodiacs.find(({ name }) => name === _name) || zodiacs[0];
  res.render('task4-details', { title, zodiacs: [item], id });
};

module.exports = {
  getList,
  getItem,
};
