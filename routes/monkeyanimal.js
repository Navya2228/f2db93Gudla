var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('monkeyanimal', { title: 'Search Results monkeyanimal' });
});
var express = require('express');
const monkeyanimal_controllers= require('../controllers/monkeyanimal');
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}
var router = express.Router();
/* GET monkeyanimals */
router.get('/', monkeyanimal_controllers.monkeyanimal_view_all_Page );
module.exports = router;
/* GET detail monkeyanimal page */
router.get('/detail',monkeyanimal_controllers.monkeyanimal_view_one_Page);
/* GET create monkeyanimal page */
router.get('/create',secured, monkeyanimal_controllers.monkeyanimal_create_Page);
/* GET create update page */
router.get('/update',secured, monkeyanimal_controllers.monkeyanimal_update_Page);
/* GET delete monkeyanimal page */
router.get('/delete',secured, monkeyanimal_controllers.monkeyanimal_delete_Page);