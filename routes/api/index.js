const router = require('express').Router();
const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipes-routes');

router.use('/user', userRoutes);
router.use('/recipe', )

module.exports = router;