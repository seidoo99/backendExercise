const express = require('express');
const app = express();

const port = 3000;
var counter = 10;

app.post('/increment', function(req, res) {
    counter++;
    res.send(counter);
});
app.post('/decrement', function(req, res) {
    counter--;
    res.send(counter);
});
app.get('/value', function(req, res, next) {
    res.send(counter);
});
app.listen(port, () => console.log('app listening ...'));