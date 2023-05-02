var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restuarantController')
const reviewController = require('../controllers/reviewController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/restaurant');
});

router.get('/restaurant/add', restaurantController.renderAddForm)
router.post('/restaurant/add', restaurantController.addRestaurant)

router.get('/restaurant/:restaurantId', restaurantController.displayRestaurant)
router.get('/restaurant/', restaurantController.displayAll)

router.get('/restaurant/:restaurantId/edit', restaurantController.renderEditForm)
router.post('/restaurant/:restaurantId/edit', restaurantController.updateRestaurant)

router.get('/restaurant/:restaurantId/delete', restaurantController.deleteRestaurant)

router.post('/restaurant/:restaurantId/review/create', reviewController.addReview)

router.post('/review/:reviewId/reply/create', reviewController.addReply)

module.exports = router;
