// Import Like model
Like = require("../models/Like");
// Import Post model
Post = require("../models/Post");

exports.add = function(req, res) {
  const likeBody = req.body;
  Like.find(
    { post_id: likeBody.post_id, username: likeBody.username },
    function(err, response) {
      console.log("response is :", response.username);
      // If user is find
      if (response.username) {
        // Part 1
        // Search by username

        Post.find({ username: likeBody.username }, function(error, result) {
          console.log(result);
          if (result === true) {
            //   result.data.likes--;
            console.log(result);
            console.log("true-like", result);
            // TO DO
            // SAVE()
          } else {
            //   result.data.likes++;
            console.log(result);
            console.log("false-like", result);
            // TO DO
            // SAVE()
          }
        });

        console.log("response.username found");
      } else {
        // Part 2
        console.log("response.username not found");
        // If user isn't find
        // We will add user like into collection Likes
        let like = new Like();
        like.post_id = likeBody.post_id;
        like.username = likeBody.username;
        // Changed status
        like.is_liked = true;
        // TO DO
        like.save(function(err) {
          if (err) res.json(err);
          res.json({
            message: "Like added",
            data: like
          });
        });
      }
    }
  );
};

exports.get = function(req, res) {
  Like.count({ post_id: req.params.post_id, is_liked: true }, function(
    err,
    count
  ) {
    if (err) {
      res.json(err);
    } else {
      // Here is count of like's for post
      console.log(count);
      // TO DO
      // Write down count into Post.likes model
    }
  });
};
