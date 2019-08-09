// Import Like model
Like = require('../models/Like');
// Import Post model
Post = require('../models/Post');

exports.add = function(req, res) {
    const likeBody = req.body;

    Like.find({ "post_id": likeBody.post_id, "user_id": likeBody.username }, function(err, response) {
        // если пользователь найден
        if (response.username !== null) {
            // поиск по ользователям
            Post.find({ "username": likeBody.username }, function(error, result) {
                if (response.is_liked === true) {
                    result.data.likes--;
                    // to do
                    // save()

                } else {
                    result.data.likes++;
                    // to do
                    // save()

                };
            });
        } else {
            // если пользователь не найден
            // добавить в коллекция Likes
            let like = new Like();
            like.post_id = likeBody.post_id;
            like.username = likeBody.username;
            // установать флаг is_liked на true
            like.is_liked = true;
            // save()
        }

    });
};