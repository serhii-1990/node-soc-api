// Import User model
User = require("../models/User");
Post = require("../models/Post");
Like = require("../models/Like");
// Get list of users
exports.index = function(req, res) {
  User.get(function(err, user) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json(user);
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
    if (err) res.json(err);
    else
      res.json({
        message: "New user created!",
        data: user
      });
  });
};
// Get single user
exports.view = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
// Update user
exports.update = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (err) res.send(err);

    user.country = req.body.country;
    user.state = req.body.state;
    user.city = req.body.city;
    user.userInfo = {
      preview: req.body.preview,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      status: req.body.status,
      education: req.body.education,
      job: req.body.job,
      birthday: req.body.birthday,
      isBlocked: req.body.isBlocked
    };
    user.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "User Info updated",
        user
      });
    });
  });
};

// Delete user
exports.delete = function(req, res) {
  User.remove(
    {
      _id: req.params.user_id
    },
    function(err, user) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "User deleted"
      });
    }
  );
};
