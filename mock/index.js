var express = require('express');
var app = express();
var request = require('request');
var json = require('./test.json');

app.use(express.static('images'))

app.get('/companies', function (req, res) {
  request.get('https://api.hitta.se/search/v7/app/company/VdgWZZ___C', (error, response, body) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.send(body);
  });
});

app.get('/reviews', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(json));
});

app.listen(3003, () => {
  console.log('mock server started at 3003');
});