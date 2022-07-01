import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import compress from 'compression';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import * as routes from './routes/index.js';

const app = express();

var corsOptions = {
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    origin: '*',
    allowedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization'],
    exposedHeaders: ['api_key', 'api-key', 'Content-Type', 'Authorization']
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(compress());
app.use(helmet());

// Restrict all routes to only 20 requests per IP address every minute
const limiter = rateLimit({
  windowMs: 10 * 60 * 100,    // 1 minute
  max: 20                     // 20 requests per IP
});

app.use(limiter);

// get all routes from index
app.use('/', routes.default);


/**
 * Set health check api
 */

app.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }

  res.status(200).send(data);
});

function happyEnding() {
  process.exit(0);
}

function sadEnding(err) {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
}

process.on('SIGINT', happyEnding);
process.on('SIGTERM', happyEnding);
process.on('uncaughtException', sadEnding);
process.on('unhandledRejection', sadEnding);

export default app;
