// Import Like model
Like = require('../models/Like');
// Import Post model
Post = require('../models/Post');

exports.add = function(req, res) {
    const likeBody = req.body;
    Like.find({ "post_id": likeBody.post_id, "user_id": likeBody.username }, function(err, response) {
        // If user is find
        if (response.username !== null) {
            // Search by username
            Post.find({ "username": likeBody.username }, function(error, result) {
                if (response.is_liked === true) {
                    result.data.likes--;
                    // TO DO
                    // SAVE()

                } else {
                    result.data.likes++;
                    // TO DO
                    // SAVE()

                };
            });
        } else {
            // If user isn't find
            // We will add user like into collection Likes
            let like = new Like();
            like.post_id = likeBody.post_id;
            like.username = likeBody.username;
            // Changed status
            like.is_liked = true;
            // TO DO
            // SAVE()
        }

    });
};

exports.get = function(req, res) {

    Like.count({ "post_id": req.params.post_id, "is_liked": true }, function(err, count) {
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