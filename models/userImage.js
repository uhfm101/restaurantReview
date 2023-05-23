'use strict';
const {
    Model, Op
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class userImage extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            }
    }
    userImage.init({
        user_image: DataTypes.STRING,
        restaurant_id: DataTypes.INTEGER,
        user_name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'userImage',
        tableName: 'restaurant_userImages',
        timestamps: false,
    });
    return userImage;
};