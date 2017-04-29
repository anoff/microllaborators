const express = require('express');
const app = express();
const https = require('https');
const fs = require("fs");

const PORT = 8083;

const options = {
  key: fs.readFileSync("domain.key"),
  cert: fs.readFileSync("domain.crt")
}
app.use(express.static('public'));
app.use('node_modules/', express.static('public'));

const server = https.createServer(options, app);

server.listen(PORT, err => {
  err && console.error(err);
  console.log(`server started on https://localhost:${PORT}`);
});
