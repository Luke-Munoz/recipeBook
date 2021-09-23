const { Recipes } = require('../models')

const recipesController = {
    getAllPizza(req, res) {
        Recipes.find({})
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
        Recipes.findOne({ _id: parmas.id })
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
        Recipes.create(body)
            .then(dbRecipeData => res.json(dbRecipeData))
            .catch(err => res.json(err));
    },

    updateRecipe({ params, body }, res) {
        Recipes.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbRecipeData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'Noe recipe found!' });
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => res.json(err));
    }

};

module.exports = recipesController;