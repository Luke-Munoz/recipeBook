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
    userName: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    // need to reference the comment model to get the information of the comments
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],

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


RecipesSchema.virtual('reacitonCount').get(function() {
    return this.comments.length;
});

RecipesSchema.virtual('userCount').get(function() {
    return this.userName.length;
})

const Recipe = model('Recipe', RecipesSchema);
module.exports = Recipe;