'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reflection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reflection.init({
    id: DataTypes.STRING,
    succes: DataTypes.STRING,
    low_point: DataTypes.STRING,
    take_away: DataTypes.STRING,
    owner_id: DataTypes.STRING,
    created_date: DataTypes.DATE,
    modified_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reflection',
  });
  return Reflection;
};