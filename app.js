// app.js
const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/config');
const api = require('./api');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use('/api', api);

mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

