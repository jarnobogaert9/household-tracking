const express = require('express');
const cors = require('cors'); 
require('dotenv').config();

const { PORT, API_BASE_URL, MONGODB_CONNECTION_URI } = require('../config');
const mongoose = require('mongoose');
const app = express();

const types = require('./routes/types');
const users = require('./routes/users');

mongoose.connect(`${MONGODB_CONNECTION_URI}`, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
});

app.use(express.json());
app.use(cors());

app.use(`${API_BASE_URL}/types`, types);
app.use(`${API_BASE_URL}/users`, users);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});