const express = require('express');
const { resolve } = require('path');
const connectDB = require('./db')
const sign = require('./router')
require('dotenv').config();
const url = process.env.db
const app = express();
const port = 3010;

app.use(express.static('static'));

app.use('/user',sign);
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
connectDB(url)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
