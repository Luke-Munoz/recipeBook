const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipes-routes');
const commentRoutes = require('./commentsRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/comment', commentRoutes);

module.exports = router;