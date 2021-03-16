require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('./_helpers/error-handler');
// start server
const portConfig = require('./config/port.config');
//database
const db = require('./database/db.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/api/users', require('./controllers/users.controller'));

// global error handler
app.use(errorHandler);

db.connect()
  .then(() => {
    console.log('database connected..')
    app.listen(portConfig.PORT, () => {
      console.log('Listening on port: ' + portConfig.PORT);
    });
  });
