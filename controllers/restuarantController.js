const {Restaurant} = require('../models')

module.exports.renderAddForm = function(req, res){
    const restaurant = {
        name: '',
        image: '',
        description: ''
    }
    res.render('restaurants/add', {restaurant})
}

module.exports.addRestaurant = async function(req, res){
    const restaurant = await Restaurant.create({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        owner_id: 1,
    })
    res.redirect('/')
}