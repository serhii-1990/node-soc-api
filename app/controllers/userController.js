// Import User model
User = require('../models/User');
// Get list of users
exports.index = function(req, res) {
    User.get(function(err, user) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: user
        });
    });
};
// Create new user
exports.new = function(req, res) {
    let user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    user.country = req.body.country;
    user.state = req.body.state;
    user.city = req.body.city;

    user.save(function(err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New user created!',
                data: user
            });
    });
};
// Get single user
exports.view = function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Update user
exports.update = function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
        if (err)
            res.send(err);
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;
        user.country = req.body.country;
        user.state = req.body.state;
        user.city = req.body.city;
        // save the user and check for errors
        user.save(function(err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Delete user
exports.delete = function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};