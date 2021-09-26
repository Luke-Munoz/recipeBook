const router = require('express').Router();
const userRoutes = require('./user-routes');
<<<<<<< HEAD
const recipeRoutes = require('./recipes-routes');
const commentRoutes = require('./commentsRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/comment', commentRoutes);
=======
// const recipeRoutes = require('./recipes-routes');

router.use('/user', userRoutes);
// router.use('/recipe', recipeRoutes);
>>>>>>> main

module.exports = router;