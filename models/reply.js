'use strict';
const moment = require('moment')
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Reply extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Reply.init({
        reviewer_name: DataTypes.STRING,
        body: DataTypes.STRING,
        commented_on: DataTypes.DATE,
        rating: DataTypes.INTEGER,
        restaurant_id: DataTypes.INTEGER,
        parent_review_id: DataTypes.INTEGER,
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
        modelName: 'Reply',
        timestamps: false,
        tableName: 'restaurant_reviews'
    });
    return Reply;
};