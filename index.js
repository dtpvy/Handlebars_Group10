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

app.get('/', (req, res) => {
  res.render('index');
});

app.set('port', process.env.port || 3001);
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
