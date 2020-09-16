const models = require('../../models/index');
const device = require('../../models/device');
const express = require('express');
var converter = require('hex2dec');

exports.insert = async (req, res) => {
    try {
        //get data
        const data = req.body;
        //substr
        const payload_hex = data.DevEUI_uplink.payload_hex; //016a018a0a62151c001200
        const payload = payload_hex.toString().substr(6, 16); //8a0a62151c001200
        const h_batt = payload.toString().substr(0, 2); //8a
        const h_temp = payload.toString().substr(2, 4); //0a62
        const h_hum = payload.toString().substr(6, 4); //151c
        const h_pm25 = payload.toString().substr(10, 4); //0012
        //hexToDec
        const batt = getBatt(h_batt);
        const temp = (converter.hexToDec(h_temp)) * 0.01;
        const hum = (converter.hexToDec(h_hum)) * 0.01;
        const pm25 = converter.hexToDec(h_pm25)

        function getBatt(h_batt) {
            const batt = converter.hexToDec(h_batt);
            if (batt < 128) {
                return batt * 0.1
            }
            else {
                return (batt - 128) * 0.1
            }

        }

        console.log(payload_hex);


        //insert pm
        const pm = await models.Pm.create({
            payload_hex: payload,
            batt: batt,
            temp: temp,
            hum: hum,
            pm25: pm25,
        });

        res.status(201).json({
            message: 'เพิ่มข้อมูลข้อมูลเรีบยร้อยแล้ว',
            deta: {
                id: pm.id,
                payload_hex: pm.payload_hex,
                batt: pm.batt,
                temp: pm.temp,
                hum: pm.hum,
                pm25: pm.pm25
            }
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
    const pm = await models.Pm.findAll({
        include: [
            {
                model: models.Device,
                as: 'device',
                attributes: ['id', 'lat']
            }
        ]
    });
    res.status(201).json({
        message: 'ข้อมูล',
        deta: pm
    });
}

