const app = require('./config/express')();
const port = app.get('port');
const mongoose = require('./config/mongoose');
const jwt = require('jsonwebtoken');
require("dotenv-safe").config();

app.listen(port, () => {
    console.log('Servidor Online (' + port + ')')
});