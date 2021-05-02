const express = require('express');
const novelCovid = require('novelcovid');
const exhbs = require('express-handlebars');


const app = express();

app.set('view-engine', 'hbs');
app.engine('hbs', exhbs( {
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '/views/layouts'
}));

app.get('/countries', (req, res) => {
    novelCovid.countries()
    .then ((response) => {
        res.render('home.hbs', { info : response });
    })
});

app.listen(4000, () => {
    console.log(`Listening on port no 4000`);
});