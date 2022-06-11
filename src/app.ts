import 'dotenv/config';

import { Request, Response } from "express";

import express from 'express';
import helmet from 'helmet';
const cors = require('cors');

import mainRouter from './routes/main.route';
import config from './config/config';

const port = config.port;

const app = express();

app.use(helmet());
app.use(cors());

app.use('/', mainRouter);

app.get('/test', (req: Request, res: Response) => {
  res.send('This is a test path');
});

app.use((req: Request, res: Response) => {
  res.send('Path not supported');
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});