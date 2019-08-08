// Import jwt
const jwt = require('jsonwebtoken');
// Import jwt config
const config = require('../config/config');
//Import User model
User = require('../models/User');
// Create token list
const tokenList = {};

exports.login = function(req, res) {
    const loginData = req.body;
    // необходимо сделать
    // проверку на то, что такой пользователь есть
    // в Users по username и password
    const user = {
        "username": loginData.username,
        "password": loginData.password
    };

    const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });

    const response = {
        "status": "Logged in",
        "token": token,
        "refreshToken": refreshToken
    };

    tokenList[refreshToken] = response;
    res.status(200).json(response);
    console.log("Hey! It's login func!");
};

exports.token = function(req, res) {
    const loginData = req.body;
    if ((loginData.refreshToken) && (loginData.refreshToken in tokenList)) {
        const user = {
            "username": loginData.username,
            "password": loginData.password
        };
        const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife })
        const response = {
            "token": token,
        };
        // update the token in the list
        tokenList[loginData.refreshToken].token = token
        res.status(200).json(response);
    } else {
        res.status(404).send('Invalid request')
    }
};