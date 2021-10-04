const session = require('express-session');
const mongoose = require('mongoose');
const express = require('express');
const MongoStore = require('connect-mongo');

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipebook"

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'foo',
    store: MongoStore.create({ mongoUrl: MONGODB_URI})
}));

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`You are connected to ${PORT}`));