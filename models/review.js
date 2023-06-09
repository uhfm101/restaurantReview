'use strict';
const moment = require('moment')
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
      Review.hasMany(models.Reply,{
        as: 'replies',
        foreignKey: 'parent_review_id'
      })
    }
  }
  Review.init({
    reviewer_name: DataTypes.STRING,
    body: DataTypes.STRING,
    commented_on: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    parent_review_id: DataTypes.INTEGER,
    is_deleted: DataTypes.BOOLEAN,
    reviewedAgo: {
      type: DataTypes.VIRTUAL,
      get(){
        let reviewedOn = moment(this.commented_on)
        let now = moment()
        return moment.duration(reviewedOn.diff(now)).humanize(true)
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false,
    tableName: 'restaurant_reviews',
    defaultScope: {
      where: {
        parent_review_id: null
      }
    }
  });
  return Review;
};