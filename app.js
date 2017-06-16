'use strict';
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
var app = express();
var routes = require('./routes')
const indexDB = require('./models');


// log the middleware
app.use(morgan('dev'));

// serves up static files from a public folder
app.use(express.static('public'));

// parse the request body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// incorporates nunjucks into rendering
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

// serves up an index.html file upon a GET request
// app.get('/', function(req, res) {
// 	res.send('Hello Word');
// });

app.use(routes);
//app.listen(3000, function () {
//        console.log('The best team EVER!!!\!');
//});

indexDB.db.sync({})
.then(function () {
    app.listen(3000, function () {
        console.log('The best team EVER!!!\!');
    });
})
.catch(console.error);

// models.db.sync({force: true})
