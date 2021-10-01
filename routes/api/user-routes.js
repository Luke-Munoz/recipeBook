const router = require('express').Router();

const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser
} = require('../../controllers/user-controller');
// Set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up for the PUT and DELETE routes at /api/user/:id
router
    .route('/:id')
    .put(updateUser)
    .delete(deleteUser);

// post routes for the login and logout
 router
     .route('/')
     .post(loginUser);

 router
     .route('/')
     .post(logoutUser);

module.exports = router;

