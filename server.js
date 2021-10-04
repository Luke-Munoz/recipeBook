const session = require('express-session');
const mongoose = require('mongoose');
const express = require('express');
const MongoStore = require('connect-mongo');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipebook";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'foo',
    store: MongoStore.create({ mongoUrl: MONGODB_URI})
}));

app.use(require('./routes'));

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`You are connected to ${PORT}`));