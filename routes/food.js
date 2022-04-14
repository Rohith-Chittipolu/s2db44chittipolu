var express = require('express');
var router = express.Router();
const food_controlers= require('../controllers/food');
/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', food_controlers.food_view_all_Page );
  res.render('food', { title: 'Search Results by food' });
});

module.exports = router;
