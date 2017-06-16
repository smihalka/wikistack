'use strict';


const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
var app = express();


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
app.get('/', function(req, res) {
	res.send('Hello Word');
});

// connect to a port 
app.listen(3000, function() {
	console.log('The best team EVER!!!');
});





