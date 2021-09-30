const seeder = require('mongoose-seed');

const info = "mongodb://localhost/recipebook";

seeder.connect(info, function() {
    // Load the models
    seeder.loadModels([
        "./models/User.js",
    ]);
    // Clear prexisitng data
    seeder.clearModels([ "User" ], function() {
        // populate database
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });
    });
});

// Write data array containing data - documents are initated by model

const data = [
    {
        'model': 'User',
        'documents': [
            {
                username: "NikePro12",
                email: "jazz44@gmail.com",
                password: "Court34$gmailscom"
            },
            {
                username: "KoolAid32",
                email: "hotmess25@gmail.com",
                password: "Drink#$juice12"
            },
            {
                username: "Barstool35",
                email: "legs456@gmail.com",
                password: "Wood%32yroks"
            },
            {
                username: "RogueOne32",
                email: "warsar45@msn.com",
                password: "Xwing6red!"
            },
            {
                username: "YodaMaster",
                email: "allgen23@gmail.com",
                password: "Light2aber!"
            }
        ]
    }
]

