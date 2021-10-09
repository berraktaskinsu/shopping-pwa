import express from 'express';
import http from 'http';
import mongoose from 'mongoose';

import dbConfig from './database/database.config';
import { router as routes } from './routes/index.route';

import { Book } from './database/models';

const app = express();
const apiRoot = '';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRoot, routes);

mongoose.connect(dbConfig);
const db = mongoose.connection;

db.on('error', (err: Error) => {
  console.error(err);
});

db.on('connected', () => {
  console.info(`Successfully connected to mongodb`);
});

const port = process.env.PORT || 8080;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.info(`Server is up and running on port ${port}`);
});
