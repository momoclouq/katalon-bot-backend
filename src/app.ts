import 'dotenv/config';

import { Request, Response } from "express";

import express from 'express';
import helmet from 'helmet';
const cors = require('cors');

const port = 5000;

const app = express();

app.use(helmet());
app.use(cors());

type Value = {
  value1: string;
  value2: string;
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Katalon bot backend');
});

app.get('/test', (req: Request, res: Response) => {
  const value: Value = {
    value1: "The heck",
    value2: "The hell"
  }

  res.send(value);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});