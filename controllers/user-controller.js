const {User} = require("../models")

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
            .select('-__v')
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // post route for creating a user
    createUser({body}, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update a user by id
    updateUser({params, body}, res) {
        User.findOneAndUpdate({id: params.id}, body, {new: true})
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({message: 'No user found with this id!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete user 
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.id})
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({message: 'No user found with this id!'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },

    loginUser(req, res) {
        console.log(req);

        User.findOne({email: req.body.email})
            .then(dbUserData => {
                console.log(dbUserData);
                if (!dbUserData) {
                    res.status(400).json({message: 'No user with that email!'});
                    return;
                }

                if (req.body.password !== dbUserData.password) {
                    res.status(400).json({message: 'Incorrect password!'});
                    return;
                }
                req.session.save(() => {
                    req.session.user_id = dbUserData.id;
                    req.session.username = dbUserData.username;
                    req.session.loggedIn = true;

                    res.json({user: dbUserData, message: 'You are now logged in!'});
                })
            })
    },

    logoutUser(req, res) {
        if (req.session.loggedIn) {
            req.session.destroy(() => {

                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    }

}

module.exports = userController;