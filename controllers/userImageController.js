const {userImage, Review} = require('../models')

module.exports.createUserImage = async function(req, res){
    let restaurantId = req.params.restaurantId;
    await userImage.create({
        user_name: req.body.user_name,
        user_image: req.body.user_image,
        restaurant_id: restaurantId
    })
    res.redirect(`/restaurant/${restaurantId}`)
}

module.exports.deleteUserImage = async function(req, res){
    const userImage = await userImage.findByPk(req.params.userImageId)
    await userImage.update({
        is_deleted: true
    }, {
        where: {
            id: req.params.userImageId
        }
    })
    res.redirect(`/restaurant/${userImage.restaurant_id}`)
}