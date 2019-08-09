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
    Token.findOne({ "refreshToken": req.params.refresh }, { "isRevoked": false }, function(err, result) {
        const refreshData = req.body;
        // Is refresh token empty
        if (refreshData !== null) {
            const getRefreshToken = {
                    "refreshToken": req.params.refresh
                }
                // Generate new refresh token
            const token = jwt.sign(getRefreshToken, config.secret, { expiresIn: config.tokenLife })
                // Create response to client
            const response = {
                "refreshToken": token,
            };
            res.status(200).json(response);
            // Add upd data into token collection
            var tokens = new Token();
            // How can i write down an old username?
            tokens.username = tokens.username;
            tokens.refreshToken = token;
            tokens.isRevoked = false;
            // Save tokens info
            tokens.save(function(err) {
                if (err)
                    console.log(err);
                else
                    console.log(tokens);
            });
        } else {
            res.status(404).send('Invalid request')
        }
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