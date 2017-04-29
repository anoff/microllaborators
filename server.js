const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static('public'));

app.listen(PORT, err => {
  err && console.error(err);
  console.log(`server started on http://localhost:${PORT}`);
})
