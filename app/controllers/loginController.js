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
    // Get data from client
    const loginData = req.body;
    const user = {
        "username": loginData.username,
        "password": loginData.password
    };
    // Is user exists
    User.find({ "username": loginData.username }, { "password": loginData.password }, function(err, result) {
        if (result.length !== 0) {
            const token = jwt.sign(user, config.secret, { expiresIn: config.tokenLife });
            const refreshToken = jwt.sign(user, config.refreshTokenSecret, { expiresIn: config.refreshTokenLife });
            // Write down my tokens
            const response = {
                "token": token,
                "refreshToken": refreshToken
            };
            // Response tokens for client
            tokenList[refreshToken] = response;
            res.status(200).json(response);
            // Add data into token collection
            var tokens = new Token();
            tokens.username = loginData.username;
            tokens.refreshToken = refreshToken;
            tokens.isRevoked = false;
            // Save tokens info
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
};

exports.refresh = function(req, res) {
    Token.findOne({ "refreshToken": req.params.refreshToken }, function(err, result) {
        if (err)
            res.send(err);
        else
        // View token info by refreshToken
            res.send(result);
        // сгененрировать новый токен
        // вернуть клиенту аксесс токен и новый рефреш токен

        /*  const refreshData = req.body;
         refresh.refreshToken = refreshData.refreshToken;

         if ((refresh.refreshToken) && (refresh.refreshToken in tokenList)) {
             const token = jwt.sign(refresh, config.secret, { expiresIn: config.tokenLife })
             const response = {
                 "token": token,
             };
             tokenList[refreshData.refreshToken].token = token
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
         } */
    });
};

exports.invoke = function(req, res) {
    Token.findOne({ "refreshToken": req.params.refreshToken }, function(err, result) {
        if (err)
            res.send(err);
        else
        // View token info by refreshToken
            res.send(result);
    });
};