const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
require("dotenv-safe").config();

module.exports = () => {
    const app = express();

    app.set('port', '3000');

    app.use(bodyParser.json());

    consign({ 
        cwd: 'api',
        verbose:false
    })
        //.include('models')
        .then('controller')
        .then('routes')
        .into(app);

    return app;
};