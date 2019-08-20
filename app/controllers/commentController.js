// Import Comment model
Comment = require("../models/Comment");
User = require("../models/User");
Post = require("../models/Post");
// Get list of comments
exports.index = function(req, res) {
  Comment.get(function(err, comment) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Comments retrieved successfully",
      data: comment
    });
  });
};
// Create new comment
exports.new = function(req, res) {
  User.findOne({ username: req.body.username }, function(err, userData) {
    if (err) res.json(err, "User not found");
    Post.findOne({ _id: req.body.postid }, function(err, postData) {
      if (err) res.json(err, "Post not found");

      var comment = new Comment();
      comment.postid = req.body.postid ? req.body.postid : user.postid;
      comment.username = req.body.username;
      comment.body = req.body.body;
      comment.likes = req.body.likes;
      comment.firstname = userData.userInfo.firstname;
      comment.lastname = userData.userInfo.lastname;
      postData.commentsNumber++;
      postData.save(function(err) {
        if (err) res.json(err, "Comment number not added");
      });
      comment.save(function(err) {
        if (err) res.json(err);
        else
          res.json({
            message: "New comment created and added to the post!",
            data: comment
          });
      });
    });
  });
};
// Get single comment
exports.view = function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) res.send(err);
    res.json({
      message: "Comment details loading..",
      data: comment
    });
  });
};
// Update comment
exports.update = function(req, res) {
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err) res.send(err);
    comment.postid = req.body.postid ? req.body.postid : user.postid;
    comment.username = req.body.username;
    comment.body = req.body.body;
    comment.likes = req.body.likes;
    // save the comment and check for errors
    comment.save(function(err) {
      if (err) res.json(err);
      res.json({
        message: "Comment updated",
        data: comment
      });
    });
  });
};
exports.viewAllPostsCommetns = function(req, res) {
  const postComments = req.body;
  Comment.find({ postid: postComments.postid }, function(err, comments) {
    if (err) res.send(err);
    res.json({
      message: "Comments details loading..",
      data: comments
    });
  });
};

// Delete comment
exports.delete = function(req, res) {
  Comment.remove(
    {
      _id: req.params.comment_id
    },
    function(err, comment) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Comment deleted"
      });
    }
  );
};
