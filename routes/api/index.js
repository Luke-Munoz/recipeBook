const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipes-routes');
<<<<<<< HEAD
const commentRoutes = require('./commentsRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/comment', commentRoutes);
=======

router.use('/user', userRoutes);
router.use('/recipe', )
>>>>>>> main

module.exports = router;