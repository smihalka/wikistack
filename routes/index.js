'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('HELLO BEST TEAM!');
});


router.get('/wiki/', function(req, res) {
    res.send('WIKI YO BRO BEST TEAM!');
});


module.exports = router;
