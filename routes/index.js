var express = require('express');
var router = express.Router();
const restaurantController = require('../controllers/restuarantController')
const reviewController = require('../controllers/reviewController')
const userController = require('../controllers/userController')
const userAuthenticated = require('../middleware/userAuthenticated')
const userHasRole = require('../middleware/userHasRole')
const userImageController = require('../controllers/userImageController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/restaurant');
});

router.get('/restaurant/add', userAuthenticated, userHasRole('owner'), restaurantController.renderAddForm)
router.post('/restaurant/add', userAuthenticated, userHasRole('owner'), restaurantController.addRestaurant)

router.get('/restaurant/:restaurantId', restaurantController.displayRestaurant)
router.get('/restaurant/', restaurantController.displayAll)

router.get('/restaurant/:restaurantId/edit', userAuthenticated, userHasRole('owner'), restaurantController.renderEditForm)
router.post('/restaurant/:restaurantId/edit', userAuthenticated, userHasRole('owner'), restaurantController.updateRestaurant)

router.get('/restaurant/:restaurantId/delete', userAuthenticated, restaurantController.deleteRestaurant)

router.post('/restaurant/:restaurantId/review/create', reviewController.addReview)

router.post('/review/:reviewId/reply/create', reviewController.addReply)

router.get('/register', userController.renderRegistrationForm)
router.post('/register', userController.register)

router.get('/login', userController.renderLogin)
router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/review/:reviewId/delete', userAuthenticated, userHasRole('admin'), reviewController.deleteReview)
router.get('/review/:reviewId/reply/:replyId/delete'), userAuthenticated, userHasRole('admin'), reviewController.deleteReply

router.post('/restaurant/:restaurantId/userImage/create', userImageController.createUserImage)
router.get('/userImage/:userImageId/delete', userAuthenticated, userHasRole('admin'), userImageController.deleteUserImage)

module.exports = router;
