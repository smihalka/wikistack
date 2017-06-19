const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  res.redirect('/');
});

router.post('/', function(req, res, next) {
  // var urlTitle = req.body.title.replace(/\s+/gi, '_').replace(/\W/g,'');
  var page = Page.build({
	  title: req.body.title,
	  content: req.body.content,
	  status: req.body.status
  });
  page.save()
	.then(function(page) {
		res.json(page.get('route'));
	});
});

router.get('/:urlTitle', function(req, res, next) {
//  res.send('hit dynamic route at ' + req.params.urlTitle);
  var page = Page.findAll({
    where: {
      urlTitle: req.params.urlTitle
    }
  });

  page.then(result => {
    
  res.render('layout', {title: result[0].title});
  })

});


router.get('/add', function(req, res, next) {
  res.render('addpage');
});






module.exports = router;
