const router = require('express').Router();

const {
    createRecipe,
    updateRecipe,
    getAllRecipe,
    getRecipeById
} = require( '../../controllers/recipes-contoller');

router.route('/').get(getAllRecipe).post(createRecipe);

router.route('/:id').get(getRecipeById).put(updateRecipe);

module.exports = router;