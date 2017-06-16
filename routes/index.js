'use strict';

const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

router.use('/wiki', wikiRouter);

router.get('/', function(req, res, next) {
    res.send('HELLO BEST TEAM!');
});

//
//router.get('/add', function(req, res, next) {
//    res.render('addpage.html');
//});
//
//router.post('/', function(req, res, next){
//	res.send('This is a post');
//});


module.exports = router;
