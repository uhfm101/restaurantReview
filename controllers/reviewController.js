const {Review, Restaurant, Reply} = require('../models')

module.exports.addReview = async function(req, res){
    let restaurantId = req.params.restaurantId
    await Review.create({
        reviewer_name: req.body.reviewer_name,
        body: req.body.body,
        commented_on: new Date,
        rating: req.body.rating,
        restaurant_id: restaurantId
    })
    res.redirect(`/restaurant/${restaurantId}`)
}

module.exports.addReply = async function(req, res){
    const parentReview = await Review.findByPk(req.params.reviewId)
    let restaurantId = parentReview.restaurant_id
    await Reply.create({
        reviewer_name: req.body.reviewer_name,
        body: req.body.body,
        commented_on: new Date,
        restaurant_id: restaurantId,
        parent_review_id:parentReview.id,
        rating: req.body.rating
    })
    res.redirect(`/restaurant/${restaurantId}`)
}