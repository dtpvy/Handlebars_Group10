const controller = {};
const title = 'TV Sales';
const id = '20127453 - Cái Minh Chánh';
const { categories, products } = require('../models/data');
controller.showList = (req, res) => {
  let category = req.query.category;
  let selectedProducts = category ? products.filter((item) => item.category == category) : products;
  res.render('task3', { title, categories, products: selectedProducts, id });
};
module.exports = controller;
