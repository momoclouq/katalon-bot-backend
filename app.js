const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const port = 5000;

const app = express();

app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Katalon bot backend');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});