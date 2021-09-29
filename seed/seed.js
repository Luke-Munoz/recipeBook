const seeder = require("mongoose-seed");
const { User, Recipes, Comments } = require("./models/index");
const dateFormat = require("../utils/dateFormat");
// Connect to MongoDB via Mongoose
seeder.connect("mongodb://localhost/recipebook", function() {
    // Load Mongoose models
    seeder.loadModels([
        "models/User.js",
        "models/Recipes.js",
        "models/Comments.js",
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
const data = [{
    User: [{
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
        },
    ],
    Recipes: [{
            RecipeTitle: "Yummy Food",
            RecipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            userName: "Mario",
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => dateFormat(createdAtVal),
            },
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            RecipeTitle: "Steak",
            RecipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            userName: "Yoda",
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => dateFormat(createdAtVal),
            },
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            RecipeTitle: "Soup",
            RecipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            userName: "Bowser",
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => dateFormat(createdAtVal),
            },
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            RecipeTitle: "Sandwhich",
            RecipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            userName: "Pikachu",
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => dateFormat(createdAtVal),
            },
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            RecipeTitle: "Water",
            RecipeText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            userName: "Jeff",
            createdAt: {
                type: Date,
                default: Date.now,
                get: (createdAtVal) => dateFormat(createdAtVal),
            },
            comments: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
    ],
}, ];



