const controller = {}
const title = 'TV Sales'
const {categories, products} = require('../models/data')
controller.showList = (req,res) =>
{
  let category = req.query.category;
  let selectedProducts = category ?  products.filter(item => item.category == category) : products;
  res.render('task3', {title,categories,products: selectedProducts})
}
module.exports = controller;