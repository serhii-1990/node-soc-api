// Import Comment model
Comment = require('../models/Comment');
// Get list of comments
exports.index = function(req, res) {
    Comment.get(function(err, comment) {
        if (err) {
            res.json({
                status: "error",
                message: err,
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
    var comment = new Comment();
    comment.username = req.body.username ? req.body.username : user.username;
    comment.title = req.body.title;
    comment.body = req.body.body;
    comment.image = req.body.image;
    comment.likes = req.body.likes;

    comment.save(function(err) {
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New comment created!',
                data: comment
            });
    });
};
// Get single comment
exports.view = function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
        if (err)
            res.send(err);
        res.json({
            message: 'Comment details loading..',
            data: comment
        });
    });
};
// Update comment
exports.update = function(req, res) {
    Comment.findById(req.params.comment_id, function(err, comment) {
        if (err)
            res.send(err);
        comment.username = req.body.username ? req.body.username : user.username;
        comment.title = req.body.title;
        comment.body = req.body.body;
        comment.image = req.body.image;
        comment.likes = req.body.likes;
        // save the comment and check for errors
        comment.save(function(err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Comment updated',
                data: comment
            });
        });
    });
};
// Delete comment
exports.delete = function(req, res) {
    Comment.remove({
        _id: req.params.comment_id
    }, function(err, comment) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Comment deleted'
        });
    });
};