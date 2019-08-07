const express = require('express');
const app = express();
const auth = require('../middleware/auth');

app.post('/', auth, (req, res, next) => {
    res.status(200).send("flight rescheduled!");
})

module.exports = app;