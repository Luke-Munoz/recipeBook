const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comments-controller');

router.route('/:recipeId').post(addComment);

router
    .route('/:recipeId/:commentId')
    .put(addReply)
    .delete(removeComment);

router.route('/:recipeId/:commentId/:replyId').delete(removeReply);

module.exports = router