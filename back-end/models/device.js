'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Device.init({
    nodeID: DataTypes.STRING,
    node_type: DataTypes.STRING,
    name: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_tel: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Device',
    tableName: 'device'
  });

  Device.associate = function (models) {
    models.Device.hasMany(models.Pm, {
      as: 'pm',
      foreignKey: 'dev_id', //fk's blogs table
      sourceKey: 'id' //pk's users table
    })
  };

  Device.associate = function (models) {
    models.Device.hasMany(models.Sensor, {
      as: 'sensor',
      foreignKey: 'nodeID', //fk's blogs table
      sourceKey: 'nodeID' //pk's users table
    })
  };

  return Device;
};