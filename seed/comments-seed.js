const seeder = require('mongoose-seed');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipebook"

seeder.connect(MONGODB_URI, function() {
    // Load the comments model
    seeder.loadModels([
        "./models/Comments.js",
    ]);
    // Clear the model
    seeder.clearModels([ "Comments" ], function() {
        // populate database
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });
    });
});

// Write the data for the comments model

const data = [
    {
        'model': 'Comments',
        'documents': [
            {
                writtenBy: "Holly Bakerfield",
                commentBody: "My kids absolutely love this recipe because they are chocolate lovers themselves. The cookies I made were gone in five seconds"
            },
            {
                writtenBy: "Jane Aniston",
                commentBody: "I would spice up this recipe with adding a list of other seasonings that can work well with the steak. My children have always been fans of meat kabobs and ask to have them again"
            },
            {
                writtenBy: "Baxter Jenkins",
                commentBody: "I really loved this recipe and enjoy soups alot because they are a food that I always had while growing up. The browth had a nice rich flavor that some would die for"
            },
            {
                writtenBy: "Amanda Sigefreid",
                commentBody: "I feel like this recipe is just like another other sandwhich someone can make by themselves. What sets this sandwhich apart from other sandwhich companies that make sandwhiches on a normal basis"
            },
            {
                writtenBy: "Sabrina Loveless",
                commentBody: "I am excited to have another recipe to add to my cookbook that is easy to use and is something that most people universally like. Pasta is always a hit in my house."
            }
        ]
    }
]