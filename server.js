const session = require('express-session');
const mongoose = require('mongoose');
const express = require('express');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/recipebook'})
}));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`You are connected to ${PORT}`));