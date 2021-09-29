const seeder = require('mongoose-seed');
const dateFormat = require("../utils/dateFormat");
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/recipebook', function() {
    // Load Mongoose models
    seeder.loadModels([
        "server/User.js",
        "server/Recipes.js",
        "server/Comments.js",
    ]);
    // Clear specified collections
    seeder.clearModels(["User", "Recipes", "Comments"], function() {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });
    });
});
// Data array containing seed data - documents organized by Model
const data = [
    {
        'model': 'User',
        'documents': [
            {
                username: "TheRealMario",
                email: "MarioIsBetter@gmail.com",
                password: "PeachIsmyQueen1!",
            },
            {
                username: "TheRealMario",
                email: "MarioIsBetter@gmail.com",
                password: "PeachIsmyQueen1!",
            },
            {
                username: "TheRealMario",
                email: "MarioIsBetter@gmail.com",
                password: "PeachIsmyQueen1!",
            },
            {
                username: "TheRealMario",
                email: "MarioIsBetter@gmail.com",
                password: "PeachIsmyQueen1!",
            }
        ],

        'model': 'Recipes',
        'documents': [
            {
                recipeTitle: "Yummy Food",
                recipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                createdBy: "Mario",
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
                comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                recipeTitle: "Steak",
                recipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                createdBy: "Yoda",
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
                comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                recipeTitle: "Soup",
                recipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                createdBy: "Bowser",
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
                comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                recipeTitle: "Sandwhich",
                recipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                createdBy: "Pikachu",
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
                comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
            {
                recipeTitle: "Water",
                recipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                createdBy: "Jeff",
                createdAt: {
                    type: Date,
                    default: Date.now,
                    get: (createdAtVal) => dateFormat(createdAtVal),
                },
                comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            },
        ]
    }
]

