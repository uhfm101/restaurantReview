var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restuarantController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/restaurant/add', restaurantController.renderAddForm)
router.post('/restaurant/add', restaurantController.addRestaurant)

module.exports = router;
