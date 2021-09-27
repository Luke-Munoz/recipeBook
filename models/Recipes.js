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
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments' 
        }
    ]
}, {
    toJSON: {
        virtuals: true,
    },
    id: false
});

RecipesSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Recipes = model('Recipes', RecipesSchema);
module.exports = Recipes;