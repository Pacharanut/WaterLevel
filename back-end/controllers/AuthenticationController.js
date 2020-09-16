const models = require('../models/index');
const e = require('express');
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

exports.register = async (req, res) => {
    // const email = req.body.email
    // console.log("email : " ,email)
    // res.send({
    //     message: 'Hello '+ email +'! Yiur user was registered! Have fun!'
    // })
    try {
        //insert User
        const user = await models.User.create(req.body);
        res.status(201).json({
            message: 'เพิ่มข้อมูลเรียบร้อย',
            deta: {
                id: user.id,
                email: user.email,
                password: user.password,
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

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await models.User.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            return res.status(403).send({
                error: 'The login information was incorrect'
            })
        }

        const isPasswordValid = await user.comparePassword(password)
        if (!isPasswordValid) {
            return res.status(403).send({
                error: 'The login information was incorrect hashPassword'
            })
        }

        const userJson = user.toJSON()
        res.send({
            user: userJson,
            token: jwtSignUser(userJson)
        })
    } catch (err) {
        res.status(500).send({
            error: 'An error has occured trying to log in'
        })
    }
}
