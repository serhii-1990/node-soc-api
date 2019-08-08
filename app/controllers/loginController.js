// Import jwt
const jwt = require('jsonwebtoken');
// Import jwt config
const config = require('../config/config');
//Import Token model
Token = require('../models/Token');
//Import User model
User = require('../models/User');
// Create token list
const tokenList = {};

exports.login = function(req, res) {
    const loginData = req.body;

    const user = {
        "username": loginData.username,
        "password": loginData.password
    };


    User.find({ "username": loginData.username }, { "password": loginData.password }, function(err, result) {
        if (result.length !== 0) {
            const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
            const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });
            // отправляю токены клиент
            const response = {
                "token": token,
                "refreshToken": refreshToken
            };
            // response for client
            tokenList[refreshToken] = response;
            res.status(200).json(response);
            // add data into token collection
            var tokens = new Token();
            tokens.username = loginData.username;
            tokens.refreshToken = refreshToken;
            tokens.isRevoked = false;

            tokens.save(function(err) {
                if (err)
                    console.log(err);
                else
                    console.log(tokens);
            });
        } else {
            res.json(err);
            console.log("User not found");
        }
    });


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