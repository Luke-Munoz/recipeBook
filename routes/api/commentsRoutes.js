const router = require('express').Router()
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require( //make the route to the controller file for the comments)
)

router.route('/:pizzaId').post(addComment);

router
    .route( //make the route to hit the id of the recipe and the id of the comment)
    )
    .put(addReply)
    .delete(removeComment);

router.route( //make the route to hit the pizzaId and the commentId and then replyid all in one route)
).delete(removeReply);

module.exports = router