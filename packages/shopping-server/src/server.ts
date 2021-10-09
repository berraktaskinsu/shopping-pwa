import express = require('express');
import http = require('http');
import mongoose = require('mongoose');
import dbConfig = require('./config/database.config');
import routes = require('./routes/index.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('', routes);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });

const port = process.env.PORT || '8000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
  console.info(`Server is up and running on port ${port}`);
});
