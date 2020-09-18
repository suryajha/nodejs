
const express = require('express');
const app = express();
 
//print in web
app.get('/', function (req, res) {
  res.send('Hello World node.js');
})

app.get('/home', function (req, res) {
    res.send('home page')
  })

app.get('/about', function (req, res) {
    res.send('about page')
  })
//port define 
var port = process.env.port || 3100;
app.listen(port, function() {
    console.log('App listening on port http://localhost:' + port);
});