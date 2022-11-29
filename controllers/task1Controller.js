const controller = {};
let { emotions } = require('../models/data');
const task1Title = 'Inspiring Quotes';
const task1Id = '20127606 - Nguyễn Vinh Quang';

controller.default = (req, res) => {
  let emotionTitle = req.params.title;
  let selectedQuote = emotions.filter((item) => item.title == emotionTitle);
  let quotePath = selectedQuote.length ? selectedQuote[0].quotePath : 'images/task1/default.jpg';

  res.render('task1', { title: task1Title, emotions, quotePath, id: task1Id });
};

controller.showRelatedQuote = (req, res) => {
  let emotionTitle = req.params.title;
  let selectedQuote = emotions.filter((item) => item.title == emotionTitle);
  let quotePath = selectedQuote.length ? selectedQuote[0].quotePath : 'images/task1/default.jpg';

  res.render('task1', { title: task1Title, emotions, quotePath, id: task1Id });
};

module.exports = controller;
