const models = require('../../models/index');
const device = require('../../models/water_sensor');
const express = require('express');
var converter = require('hex2dec');


exports.getSensor = async (req, res) => {
    const sql = 'SELECT * FROM water_sensor ORDER BY nodeID, TYPE,id DESC';
    const sensor = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
    });
    console.log("sensor :", sensor)
    // const sensor = await models.Sensor.findAll();
    res.send(
        sensor
    );
}

exports.getRuralroad = async (req, res) => {
    const sql = 'SELECT ws.nodeID, ws.type, d.name, CAST(AVG (ws.val) AS DECIMAL (12,2)) AS avg FROM water_sensor ws JOIN device d ON ws.nodeID = d.nodeID GROUP BY ws.nodeID, ws.type ORDER BY ws.nodeID, ws.createdAt DESC';
    const sensor = await models.sequelize.query(sql, {
        type: models.sequelize.QueryTypes.SELECT
    });
    console.log("sensor :", sensor)
    // const sensor = await models.Sensor.findAll();
    res.send(
        sensor
    );
}