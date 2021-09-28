const router = require('express').Router();

const {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');
// Set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up for the PUT and DELET routes at /api/user/:id
router
    .route('/:id')
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/login')
    .post(login);

router
    .route('/logout')
    .post(logout);

module.exports = router;