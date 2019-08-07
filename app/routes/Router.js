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
// User routes
router.route('/user')
    .get(userController.index)
    .post(userController.new);
router.route('/user/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;