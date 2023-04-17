const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/', (req, res) => {
  res.send('Received a POST request');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
