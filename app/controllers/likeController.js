// Import Like model
Like = require('../models/Like');

exports.add = function(req, res) {
    const likeBody = req.body;

    Like.find({ "post_id": likeBody.post_id, "user_id": likeBody.user_id }, function(err, response) {
        // если пользователь найден
        // проверить значение is_liked
        // если true Post.likes --, если false, то Post.likes ++

        // если пользователь не найден
        // добавить в коллекция Likes
        let like = new Like();
        like.post_id = likeBody.post_id;
        like.user_id = likeBody.user_id;
        like.is_liked = true;
        // установать флаг is_liked на true
        // save()

    });
};