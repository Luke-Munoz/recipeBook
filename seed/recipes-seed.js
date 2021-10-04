const seeder = require('mongoose-seed');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipebook"

// Connect to MongoDB via Mongoose
seeder.connect(MONGODB_URI, function() {
    // Load Mongoose models
    seeder.loadModels([
        "./models/Recipes.js",
    ]);
    // Clear specified collections
    seeder.clearModels([ "Recipes" ], function() {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });
    });
});

console.log('Began data construction');

// Data array containing seed data - documents organized by Model
const data = [
    {
        'model': 'Recipes',
        'documents': [
            {
                recipeTitle: "Yummy Chocolate Chicp Cookies",
                recipeText: "This recipe calls for 2 cups flour, 2 cups sugar, 2 cups cinnamaon, 1 half stick of butter, 2 eggs and 2 package of chocolate chips. Mix the sugar, flour, eggs, and butter in one bowl to form a nice sticky cooki dough. Preheat the oven to 400 degress farenheit. Cook the cookies in the oven for twenty minutes and let cool for five once they are done baking",
                createdBy: "Martin"
            },
            {
                recipeTitle: "Prime Rib Kabob",
                recipeText: "Get a piece of prime rib from the grocery store or any of choice of meat you prefer. Chopped the steak into cubes. Plan for six to eight cubes per kabob. Primary vegetebles to include will be green peppers, red peppers, red onions, and mushrooms. These vegetables need to be slice and try to fit three of each per kabob. While grilling the kabobs make sure to marinate the steak in any sauce of your choosing. Enjoy when they are done cooking",
                createdBy: "Susan",
            },
            {
                recipeTitle: "Soup",
                recipeText: "This recipe needs one pot of boiing water. 2 cups of minced peppers, celery, and mushrooms. Chop one piece of chicken into cubes to be put in the pot once the water in the pot is at a boil. Stir in the ingredients for twenty to fifty minutes before serving. Let the soup cool for 10 to 15 minutes before serving",
                createdBy: "Johnathon",
            },
            {
                recipeTitle: "Tasty Turkey Sandwhich",
                recipeText: "First step is to select a piece of bread of your choosing. Cut up to three slices of turkey or use prepackaged turkey from the store. Add lettuce, tomatoes, and onions of your choice to the slices of bread. Final ingredient is using honey mustard sauce or any sauce of your choosing",
                createdBy: "Berry",
            },
            {
                recipeTitle: "Spaghetti",
                recipeText: "This recipe calls for one package of store bought spaghetti. You may increase the number of packages if you guys want to be adventorous. Make sure to have the water boiling in the pot before serving the spaghetti. Cook for around 15 minutes for pasta quaity perfection and taste perfection. Any type of past you want to cook is fine to use when making this dish. Any sauce of your choice is fine to use when serving this dish",
                createdBy: "Jeff"
            }
        ]
    }
]