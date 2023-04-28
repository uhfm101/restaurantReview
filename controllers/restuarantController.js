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

module.exports.displayRestaurant = async function(req, res){
    const restaurant = await Restaurant.findByPk(req.params.restaurantId, {
        include: ['owner']
    })
    res.render('restaurants/view', {restaurant})
}

module.exports.displayAll = async function(req, res){
    const restaurants = await Restaurant.findAll({
        include: ['owner']
    })
    res.render('restaurants/viewAll', {restaurants})
}

module.exports.renderEditForm = async function(req, res){
    const restaurant = await Restaurant.findByPk(req.params.restaurantId)
    res.render('restaurants/edit', {restaurant})
}

module.exports.updateRestaurant = async function(req, res){
    await Restaurant.update({
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
    },{
        where: {
            id: req.params.restaurantId
        }
    })
    res.redirect(`/restaurant/${req.params.restaurantId}`)
}

module.exports.deleteRestaurant = async function(req, res){
    await Restaurant.destroy({
        where: {
            id: req.params.restaurantId
        }
    })
    res.redirect('/')
}