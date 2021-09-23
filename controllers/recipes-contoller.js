const { Recipe } = require('../models')

const recipesController = {
    getAllPizza(req, res) {
        Recipe.find({})
            .populate({
                path: 'comments',
                select: '-__V'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    getRecipeById({ parmas }, res) {
        Recipe.findOne({ _id: parmas.id })
            .populate({
                path: 'comments',
                select: '-__V'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    createRecipe({ body }, res) {
        Recipe.create(body)
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => res.json(err));
    },

    updateRecipe({ params, body }, res) {
        Recipe.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbRecipeData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'No recipe found!' });
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => res.json(err));
    }

};

module.exports = recipesController;