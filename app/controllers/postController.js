// Import Post model
Post = require("../models/Post");
User = require("../models/User");
Comment = require("../models/Comment");
// Get list of posts
exports.index = function(req, res) {
  Post.get(function(err, post) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Posts retrieved successfully",
      data: post
    });
  });
};
// Create new post
exports.new = function(req, res) {
  var post = new Post();
  post.username = req.body.username ? req.body.username : user.username;
  post.title = req.body.title;
  post.body = req.body.body;
  post.image = req.body.image;
  post.likes = req.body.likes;

  post.save(function(err) {
    if (err) res.json(err);
    else
      res.json({
        message: "New post created!",
        data: post
      });
  });
};
// Get single post
exports.view = function(req, res) {
  Post.findById(req.params.post_id, function(err, post) {
    if (err) res.send(err);
    res.json({
      message: "Post details loading..",
      data: post
    });
  });
};
// Update post
exports.update = function(req, res) {
  Post.findById(req.params.post_id, function(err, post) {
    if (err) res.send(err);
    post.username = req.body.username ? req.body.username : user.username;
    post.title = req.body.title;
    post.body = req.body.body;
    post.image = req.body.image;
    post.likes = req.body.likes;
    // save the post and check for errors
    post.save(win);
  });
};
// Delete post
exports.delete = function(req, res) {
  Post.remove(
    {
      _id: req.params.post_id
    },
    function(err, post) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Post deleted"
      });
    }
  );
};

exports.viewAllPostsCommetns = function(req, res) {
  Post.findById(req.params.post_id, function(err, post) {
    if (post) {
      Comment.find({ postid: post._id }, function(err, result) {
        if (err) res.send(err);
        res.json({
          message: "Comments of post loaded",
          data: result
        });
      });
    } else if (!post) {
      res.status(404).send("Post not found");
      return;
    } else {
      res.send(err);
    }
  });
};
