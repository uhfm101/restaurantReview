'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Review.init({
    reviewer_name: DataTypes.STRING,
    body: DataTypes.STRING,
    commented_on: DataTypes.DATE,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false,
    tableName: 'restaurant_reviews'
  });
  return Review;
};