'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Restaurant.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'owner_id'
      })
      Restaurant.hasMany(models.Review, {
        as: 'reviews',
        foreignKey: 'restaurant_id'
      })
      Restaurant.hasMany(models.userImage, {
        as: 'userImages',
        foreignKey: 'restaurant_id'
      })
    }
    isOwnedBy(user){
      return this.owner_id === user.id
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    user_image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurant',
    tableName: 'restaurant_restaurants',
    timestamps: false,
  });
  return Restaurant;
};