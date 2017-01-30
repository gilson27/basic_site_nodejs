var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Title | Project' });
});


/**
 * tos get request
 */
router.get('/v1/api/system/network/tos', function(req, res, next) {
  res.send();
  res.end();
});

/**
 * tos put request
 */
router.post('/v1/api/system/network/tos', function(req, res, next) {
  res.send();
  res.end();
});

module.exports = router;
