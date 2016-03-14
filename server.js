var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static(__dirname));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
