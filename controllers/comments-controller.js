const { Comments, Recipes } = require("../models");


const commentController = {

    addComment({ params, body }, res) {
        console.log(body);
        Comments.create(body)
            .then(({ _id }) => {
                return Recipes.findOneAndUpdate({ _id: params.recipeId }, { $push: { comments: _id } }, { new: true });
            })
            .then(dbRecipesData => {
                if (!dbRecipesData) {
                    res.status(404).json({ message: 'No recipe found with this id!' });
                    return;
                }
                res.json(dbRecipesData);
            })
            .catch(err => res.json(err));
    },

    removeComment({ params }, res) {
        Comments.findOneAndDelete({ _id: params.commentId })
            .then(deletedComment => {
                if (!deletedComment) {
                    return res.status(404).json({ message: 'No comment with this id!' });
                }
                return Recipes.findOneAndUpdate(
                    { _id: params.recipeId },
                    { $pull: { comments: params.commentId } },
                    { new: true }
                );
            })
            .then(dbRecipesData => {
                if (!dbRecipesData) {
                    res.status(404).json({ message: 'No recipe found with this id!' });
                    return;
                }
                res.json(dbRecipesData);
            })
            .catch(err => res.json(err));
    },

    addReply({ params, body }, res) {
        Comments.findOneAndUpdate({ _id: params.commentId }, { $push: { replies: body } }, { new: true })
            .then(dbRecipesData => {
                if (!dbRecipesData) {
                    res.status(404).json({ message: 'no recipe found with this id!' });
                    return;
                }
                res.json(dbRecipesData);
            })
            .catch(err => res.json(err));
    },

    removeReply({ params }, res) {
        Comments.findOneAndUpdate(
            { _id: params.commentId },
            { $pull: { replies: { replyId: params.replyId } } },
            { new: true }
        )
        .then(dbRecipesData => res.json(dbRecipesData))
        .catch(err => res.json(err));
    }
}

module.exports = commentController;