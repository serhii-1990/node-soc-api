// Initialize Express router
const router = require('express').Router();
// Default API response
router.get('/', function(req, res) {
    res.json({
        status: 'GL Social Network API',
        message: 'REST API created using Node.js & Mongoose & Express',
    });
});
// Import user controller
const userController = require('../controllers/userController');
// Import post controller
const postController = require('../controllers/postController');
// User routes
router.route('/user')
    .get(userController.index)
    .post(userController.new);
router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Post routes
router.route('/post')
    .get(postController.index)
    .post(postController.new);
router.route('/post/:post_id')
    .get(postController.view)
    .patch(postController.update)
    .put(postController.update)
    .delete(postController.delete);

// Export API routes
module.exports = router;