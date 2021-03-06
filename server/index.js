const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const mockResponse = {
  weather: 'wow weather!'
};

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
  console.log('getting /api route');
  res.send(mockResponse);
});

app.get('/', (req, res) => {
  console.log('getting / route');
  res.sendFile(HTML_FILE);
});

app.listen(port, function () {
  console.log('App listening onnnnn port: ' + port);
});
