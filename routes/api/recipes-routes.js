const router = require('express').Router();
const {
    createRecipe,
    updateRecipe,
    getAllRecipe,
    getRecipeById
} = require( //make the route for the controler file and imput it here)
)

router.route('/').get(getAllRecipe).post(createRecipe)

router.route('/:id').get(getRecipeById).put(updateRecipe)

module.exports = router;