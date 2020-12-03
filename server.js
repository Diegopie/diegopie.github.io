const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes/routes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ default: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on local host: " + PORT);
    console.log('http://localhost:3000/');
});