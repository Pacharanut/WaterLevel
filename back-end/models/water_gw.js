'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gateway extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gateway.init({
    gwID : DataTypes.STRING,
    key: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lon:DataTypes.DOUBLE,
    timeStamp: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Gateway',
    tableName: 'water_gw'
  });

  Gateway.associate = function (models) {
    models.Gateway.hasMany(models.Sensor, {
      as: 'sensor',
      foreignKey: 'gwID', //fk's blogs table
      sourceKey: 'gwID' //pk's users table
    })
  };

  return Gateway;
};