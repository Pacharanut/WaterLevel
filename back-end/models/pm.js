'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pm.init({
    payload_hex: DataTypes.STRING,
    batt: DataTypes.FLOAT,
    temp: DataTypes.FLOAT,
    hum: DataTypes.FLOAT,
    pm25: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pm',
    tableName: 'pm'
  });

  Pm.associate = function(models){
    models.Pm.belongsTo(models.Device,{
      as: 'device',
      foreignKey: 'dev_id', //pk's device table
      sourceKey: 'dev_id'//fk's Pms table
    });
  };

  return Pm;
};