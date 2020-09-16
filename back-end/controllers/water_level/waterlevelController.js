const models = require('../../models/index');
const device = require('../../models/water_sensor');
const express = require('express');
var converter = require('hex2dec');

exports.insert = async (req, res) => {
    try {
        //get data
        const data = req.body;
        // console.log(sensorData);

        //insert gateway
        const gateway = await models.Gateway.create({
            gwID: data.gwID,
            key: data.key,
            lat: data.lat,
            lon: data.lon,
            timeStamp: data.timeStamp,
        });

        //insert sensor
        const sensorData = data.sensorData
        const gwID = data.gwID;
        for (var i = 0; i < sensorData.length; i++) {
            const sensor = await models.Sensor.create({
                nodeID: sensorData[i].nodeID,
                type: sensorData[i].type,
                val: sensorData[i].val,
                gwID: gwID
            });
        }

        res.status(201).json({
            message: 'เพิ่มข้อมูลข้อมูลเรีบยร้อย',
            // deta: {
            //     gwID: gateway.gwID,
            //     key: gateway.key,
            //     lat: gateway.lat,
            //     lon: gateway.lon,
            //     timeStamp: gateway.timeStamp,
            // }
        });
    } catch (error) {
        res.status(201).json({
            error: {
                message: error.message
            }
        });
    }
}

exports.show = async (req, res) => {
    const waterlevel = await models.Gateway.findAll({
        include: [
            {
                model: models.Sensor,
                as: 'sensor',
                attributes: ['id', 'nodeID', 'type', 'val']
            }
        ]
    });
    res.send(
        waterlevel
    );
}