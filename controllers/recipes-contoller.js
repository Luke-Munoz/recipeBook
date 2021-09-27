const { Recipes } = require('../models')

const recipesController = {
    getAllRecipe(req, res) {
        Recipes.find({})
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbRecipesData => res.json(dbRecipesData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getRecipeById({ params }, res) {
        Recipes.findOne({ _id: params.id })
            .populate({
                path: 'comments',
                select: '-__v'
            })
            .select('-__v')
            .then(dbRecipesData => {
                if (!dbRecipesData) {
                    res.status(400).json({ message: 'No recipe found with this id' });
                    return;
                }
                res.json(dbRecipesData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    createRecipe({ body }, res) {
        Recipes.create(body)
            .then(dbRecipesData => res.json(dbRecipesData))
            .catch(err => res.status(400).json(err));
    },

    updateRecipe({ params, body }, res) {
        Recipes.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbRecipeData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'No recipe found with this id!' });
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => res.status(400).json(err));
    }

};

module.exports = recipesController;