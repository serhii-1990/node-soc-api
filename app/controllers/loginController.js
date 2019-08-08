// Import jwt
const jwt = require('jsonwebtoken');
// Import jwt config
const config = require('../config/config');
//Import User model
Token = require('../models/Token');
// Create token list
const tokenList = {};

exports.login = function(req, res) {
    // необходимо сделать
    // проверку на то, что такой пользователь есть
    // в Users по username и password
    const loginData = req.body;
    const user = {
        "username": loginData.username,
        "password": loginData.password
    };

    const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
    const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });
    // отправляю токены клиент
    const response = {
        "token": token,
        "refreshToken": refreshToken
    };

    tokenList[refreshToken] = response;
    res.status(200).json(response);
    // необходимо записать в коллекцию:
    // ид/юзернейм пользователя,
    // рефреш токен,
    // ревок (по ум. должен быть false)
};

exports.refresh = function(req, res) {

    Token.findOne(req.params.refreshToken, function(err, refresh) {
        if (err)
            res.send(err);
        const loginData = req.body;
        refresh.refreshToken = loginData.refreshToken;

        if ((refresh.refreshToken) && (refresh.refreshToken in tokenList)) {
            const token = jwt.sign(refresh, config.secret, { expiresIn: config.tokenLife })
            const response = {
                "token": token,
            };
            tokenList[loginData.refreshToken].token = token
            res.status(200).json(response);
            refresh.save(function(err) {
                if (err)
                    res.json(err);
                res.json({
                    message: 'Refresh token updated',
                    data: refresh
                });
            });
        } else {
            res.status(404).send('Invalid request')
        }
    });
};