const models = require('../models/index');
const e = require('express');
const blog = require('../models/pm');


//Get all
exports.index = async (req, res) => {
    const device = await models.Device.findAll();
    res.send(
        device
    );
}

//Get by id
exports.show = async (req, res, next) => {
    try {
        const { id } = req.params;
        const device = await models.Device.findByPk(id);

        res.status(200).json({
            data: device
        });
    } catch (error) {
        res.status(200).json({
            error: {
                message: error.message
            }
        });
    }
}

//insert
exports.insert = async (req, res, next) => {
    try {
        const { nodeID, node_type, name, contact_name, contact_tel, lat, long, description, status } = req.body;
        //insert Device
        const device = await models.Device.create({
            nodeID: nodeID,
            node_type: node_type,
            name: name,
            contact_name: contact_name,
            contact_tel: contact_tel,
            lat: lat,
            long: long,
            description: description,
            status: status
        });

        console.log("data : ", device);

        res.status(201).json({
            message: 'เพิ่มข้อมูลเรียบร้อย',
            deta: {
                id: device.id,
                nodeID: device.nodeID,
                node_type: device.node_type,
                name: device.name,
                contact_name: device.contact_name,
                contact_tel: device.contact_tel,
                lat: device.lat,
                long: device.long,
                description: device.description,
                status: device.status
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

//update
exports.update = async (req, res, next) => {
    try {
        const { id, nodeID, node_type, name, contact_name, contact_tel, lat, long, description, status } = req.body;

        console.log("id : ",)
        if (req.params.id !== id) {
            const error = new Error('รหัสผู่ช้ใช้ไม่ถูกตอ้ง');
            error.statusCode = 400;
            throw error;
        }

        //update device
        const device = await models.Device.update({
            nodeID: nodeID,
            node_type: node_type,
            name: name,
            contact_name: contact_name,
            contact_tel: contact_tel,
            lat: lat,
            long: long,
            description: description,
            status: status
        }, {
            where: {
                id: id
            }
        });

        res.status(200).json({
            message: 'แก้ไขข้อมูลเรียบร้อย',
        });
    } catch (error) {
        res.status(200).json({
            error: {
                message: error.message
            }
        });
    }
}

//destroy
exports.destroy = async (req, res, next) => {
    try {

        const { id } = req.params;
        const device = await models.Device.findByPk(id);

        if (!device) {
            const error = new Error('ไม่พบ Device ในระบบ');
            error.statusCode = 404;
            throw error;
        }

        //delete Device by id
        await models.Device.destroy({
            where: {
                id: id
            }
        });

        res.status(200).json({
            message: 'ลบข้อมูลเรียบร้อย',
        });
    } catch (error) {
        res.status(200).json({
            error: {
                message: error.message
            }
        });
    }
}