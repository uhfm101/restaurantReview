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
    }
  }
  Restaurant.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Restaurant',
    tablesName: 'restaurant_restaurants',
    timestamps: false
  });
  return Restaurant;
};