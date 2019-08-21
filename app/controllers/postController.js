// Import Post model
Post = require("../models/Post");
User = require("../models/User");
Comment = require("../models/Comment");
Like = require("../models/Like");
// Get list of posts
exports.index = function(req, res) {
  Post.get(function(err, post) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json(post);
  });
};
// Create new post
exports.new = function(req, res) {
  User.find({ username: req.body.username }, function(err, userData) {
    console.log(userData);
    if (err) res.json(err);
    var post = new Post();
    post.username = req.body.username ? req.body.username : user.username;
    post.title = req.body.title;
    post.body = req.body.body;
    post.image = req.body.image;
    post.likes = req.body.likes;
    post.commentsNumber = req.body.commentsNumber;
    post.firstname = userData[0].userInfo.firstname;
    post.lastname = userData[0].userInfo.lastname;
    post.save(function(err) {
      if (err) res.json(err);
      else
        res.json({
          message: "New post created!",
          data: post
        });
    });
  });
};
// Get single post
exports.view = function(req, res) {
  Post.findById(req.params.post_id, function(err, post) {
    if (err) res.send(err);
    res.json(post);
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
  var pageNo = 1;
  var size = parseInt(req.query.size);
  if (pageNo < 0 || pageNo === 0) {
    response = {
      error: true,
      message: "invalid page number, should start with 1"
    };
    return res.json(response);
  }
  Post.findById(req.params.post_id, function(err, post) {
    if (post) {
      Comment.find({ postid: post._id }, function(err, comments) {
        if (err) res.send(err);
        // pageInfo.totalPages = Math.ceil(comments.length / size);
        // pageInfo.totalItems = comments.length;
        // pageInfo.itemsPerPage = size;
        // pageInfo.currentPage = pageNo;

        totalPages = Math.ceil(comments.length / size);
        totalItems = comments.length;
        itemsPerPage = size;
        currentPage = pageNo;
        Comment.find({ postid: post._id }, {}, { limit: size }, function(
          err,
          limitCommetns
        ) {
          if (err) res.send(err);
          res.json({
            message: "Comments rertived",
            totalPages,
            totalItems,
            itemsPerPage,
            currentPage,
            limitCommetns
          });
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

exports.viewAllPostsLikes = function(req, res) {
  Post.findById(req.params.post_id, function(err, post) {
    if (post) {
      Like.find({ post_id: post._id }, function(err, likes) {
        if (err) res.send(err);
        res.json({
          message: "Likes of post loaded",
          data: likes
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

exports.postsByUsername = function(req, res) {
  User.findById(req.params.user_id, function(err, user) {
    if (user) {
      Post.find({ username: user.username }, function(err, result) {
        if (err) res.send(err);
        res.json(result);
      });
    } else if (!user) {
      res.status(404).send("User not found");
      return;
    } else if (err) {
      res.send(err);
    }
  });
};
