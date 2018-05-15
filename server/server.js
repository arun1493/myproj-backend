import express from 'express';
import cors from './modules/core/middlewares/cors';
import logger from './modules/core/middlewares/logger';
import db from './db';
import errors from './errors';
import bodyParser from 'body-parser';
let app = express();
let apiRouter = express.Router();


/**
 * Building server side routes
 */
let serverRoutes = require('./routes');
serverRoutes(apiRouter);

app.use(cors, logger);
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

/**
 * Applying routes to express app
 */
app.use('/api', apiRouter);

/**
 * Running the server in desired port
 */
 // Connect to Mongo on start

db.connect('mongodb://localhost:27017/localmongo', (err) => {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1);
  } else {
    app.listen(8000, () => {
      console.log('Listening on port 8000');
    });
  }
});

/**
 *  Fallback
 */
app.use(errors);
