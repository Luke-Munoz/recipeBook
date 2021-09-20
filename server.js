const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOD_URI || 'mongob://localhost/recipeBook', {
    useFindAndModify: false,
    userNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('debug', true);

