const mongoose = require('mongoose');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipebook', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/public')));
}


app.listen(PORT, () => console.log(`You are connected to ${PORT}`));