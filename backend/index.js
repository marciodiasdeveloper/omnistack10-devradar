const express = require('express');
const app = express();

app.get('/', (request, response) => {
  return response.send('Hell World!');
});

app.listen(3333);