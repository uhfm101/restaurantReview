const {Restaurant, Review, Reply, userImage} = require('../models')

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
        owner_id: req.user.id,
    })
    res.redirect('/')
}

module.exports.displayRestaurant = async function(req, res){
    const restaurant = await Restaurant.findByPk(req.params.restaurantId, {
        include: [
            'owner',
            {
                model: Review,
                as: 'reviews',
                required: false,
                include: [{
                    model: Reply,
                    as: 'replies',
                    required: false
                }]
            }, 'userImages'],
        order: [
            ['reviews', 'commented_on', 'desc']
        ]
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
    if (!restaurant.isOwnedBy(req.user)){
        res.redirect('/')
        return
    }
    res.render('restaurants/edit', {restaurant})
}

module.exports.updateRestaurant = async function(req, res){
    const restaurant = await Restaurant.findByPk(req.params.restaurantId)
    if (!restaurant.isOwnedBy(req.user)){
        res.redirect('/')
        return
    }
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
    const restaurant = await Restaurant.findByPk(req.params.restaurantId)
    if (!req.user.is('admin') && !restaurant.isOwnedBy(user)){
        res.redirect('/')
        return
    }
    await Restaurant.destroy({
        where: {
            id: req.params.restaurantId
        }
    })
    res.redirect('/')
}
