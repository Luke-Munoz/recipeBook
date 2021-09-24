const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const RecipesSchema = new Schema({
    recipeTitle: {
        type: String,
        required: true,
    },
    recipeText: {
        type: String,
        required: true,
        minlength: 1,
        maxLength: 280
    },

    //import users data and use it here
    userName: {
        type: String,
        required: true
    },
    comments: {
        type: String,
        required: false,
        minlength: 1,
        maxLength: 150
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }

}, {
    toJSON: {
        virtuals: true,
    },
    id: false
}, );


RecipesSchema.virtual('reactionCount').get(function() {
    return this.friends[0];
})

const Recipe = model('Recipe', RecipesSchema);
module.exports = Recipe;