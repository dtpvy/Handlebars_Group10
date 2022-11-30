const express = require('express');
const app = express();
const path = require('path');
const expressHbs = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'Handlebars-StaticFiles')));
app.engine(
  'hbs',
  expressHbs.engine({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'layout',
  })
);
app.set('view engine', 'hbs');
//Get post data (task2 used)
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/task1', require('./routes/task1Route'));
app.use('/task2', require('./routes/task2Route'));
app.use('/task3', require('./routes/task3Route'));
app.use('/task4', require('./routes/task4Route'));
app.get('/*', (req, res) => {
  res.render('index', { title: 'Jeopardize Contest', id: 'Nhom10' });
});

app.set('port', process.env.port || 3001);
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
