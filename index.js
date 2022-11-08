const app = require('./config/express')();
const port = app.get('port');
require("dotenv-safe").config();

app.listen(port, () => {
    console.log('Servidor Online (' + port + ')')
});