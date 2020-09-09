const express = require('express');
require('dotenv').config();

const { PORT, API_BASE_URL, MONGODB_CONNECTION_URI } = require('../config');
const mongoose = require('mongoose');
const app = express();

const types = require('./routes/types');

mongoose.connect(`${MONGODB_CONNECTION_URI}`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

app.use(express.json());

app.use(`${API_BASE_URL}/types`, types);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});