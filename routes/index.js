var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restuarantController')
const reviewController = require('../controllers/reviewController')
const userController = require('../controllers/userController')
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

router.get('/register', userController.renderRegistrationForm)
router.post('/register', userController.register)

router.get('/login', userController.renderLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)
module.exports = router;
