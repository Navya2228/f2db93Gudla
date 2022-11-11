var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monkeyanimal', { title: 'Search Results monkeyanimal' });
});
var express = require('express');
const monkeyanimal_controllers= require('../controllers/monkeyanimal');
var router = express.Router();
/* GET costumes */
router.get('/', monkeyanimal_controllers.monkeyanimal_view_all_Page );
module.exports = router;