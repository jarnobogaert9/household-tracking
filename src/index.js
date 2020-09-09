const express = require('express');
require('dotenv').config();

const { PORT } = require('../config');
const app = express();

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});