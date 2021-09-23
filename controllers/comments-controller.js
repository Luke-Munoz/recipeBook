const { Comment, Recipe } = require("../models");


const commentController = {

    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
            .then(({ _id }) => {
                return Recipe.findOneAndUpdate({ _id: params.recipeId }, { $push: { comments: _id } }, { new: true });
            })
            .then(dbRecipesData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'No recipe found with this id!' });
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => res.json(err));
    },

    addReply({ params, body }, res) {
        Comment.findOneAndUpdate({ _id: params.commentId }, { $push: { replies: body } }, { new: true, runValidators: true })
            .then(dbRecipeData => {
                if (!dbRecipeData) {
                    res.status(404).json({ message: 'no recipe found with this id!' });
                    return;
                }
                res.json(dbRecipeData);
            })
            .catch(err => res.json(err));
    }


}