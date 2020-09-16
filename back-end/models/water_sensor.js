'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sensor.init({
    nodeID: DataTypes.STRING,
    type: DataTypes.STRING,
    val: DataTypes.FLOAT,
    gwID: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sensor',
    tableName: 'water_sensor'
  });

  Sensor.associate = function(models){
    models.Sensor.belongsTo(models.Gateway,{
      as: 'gateway',
      foreignKey: 'gwID', //pk's Gateway table
      sourceKey: 'gwID'//fk's Sensors table
    });
  };

  Sensor.associate = function(models){
    models.Sensor.belongsTo(models.Device,{
      as: 'device',
      foreignKey: 'nodeID', //pk's Gateway table
      sourceKey: 'nodeID'//fk's Sensors table
    });

  };

  return Sensor;


};