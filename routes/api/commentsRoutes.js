const router = require('express').Router()
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comments-controller');

router.route('/:pizzaId').post(addComment);

router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

router.route( //make the route to hit the pizzaId and the commentId and then replyid all in one route)
).delete(removeReply);

module.exports = router