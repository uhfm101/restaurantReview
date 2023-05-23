const {userImage} = require('../models')

module.exports.createUserImage = async function(req, res){
    let restaurantId = req.params.restaurantId;
    await userImage.create({
        user_name: req.body.user_name,
        user_image: req.body.user_image,
        restaurantId: restaurantId
    })
    res.redirect(`/restaurant/${restaurantId}`)
}