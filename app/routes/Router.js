// Initialize Express router
const router = require("express").Router();

//router.use(require('../config/tokenChecker'));
// Default API response
router.get("/", function(req, res) {
  res.json({
    status: "GL Social Network API",
    message: "REST API created using Node.js & Mongoose & Express"
  });
});

// Import login controller
const loginController = require("../controllers/loginController");
// Import user controller
const userController = require("../controllers/userController");
// Import post controller
const postController = require("../controllers/postController");
// Import post controller
const commentController = require("../controllers/commentController");
const likeController = require("../controllers/likeController");

// Login routes
router.route("/login").post(loginController.login);

router.route("/refresh/:refreshToken").post(loginController.refresh);

router.route("/revoke/:refreshToken").post(loginController.revoke);

// User routes
router
  .route("/user")
  // .get(userController.index)
  .post(userController.createEntity);
router
  .route("/user/:user_id")
  .get(userController.viewSingleEntity)
  .patch(userController.updateEntity)
  // .put(userController.update)
  .delete(userController.deleteEntity);

router.route("/user-posts/:user_id").get(postController.postsByUsername);

// Post routes
router
  .route("/post")
  .get(postController.index)
  .post(postController.new);
router
  .route("/post/:post_id")
  .get(postController.view)
  .patch(postController.update)
  // .put(postController.update)
  .delete(postController.delete);
router
  .route("/post-comments/:post_id")
  .get(postController.viewAllPostsCommetns);
router.route("/post-likes/:post_id").get(postController.viewAllPostsLikes);

// Comment routes
router
  .route("/comment")
  .get(commentController.index)
  .post(commentController.new);
router
  .route("/comment/:comment_id")
  .get(commentController.view)
  .patch(commentController.update)
  .put(commentController.update)
  .delete(commentController.delete);

// Likes
router.route("/like").post(likeController.add);
router.route("like/:like_id").post(likeController.get);

// Export API routes
module.exports = router;
