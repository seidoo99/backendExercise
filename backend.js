const express = require('express');
const bodyParser = require('body-parser');
var app = express();

//add middleware 
const jsonParser = bodyParser.json();


//define global array
var globalArray = [];
app.post('/twitter', jsonParser, (req, res) => {
    const data = {
        name: req.body.name,
        message: req.body.message
    }
    globalArray.push(data);
    res.send('hey twitter')
});
app.get('/getTwitter', (req, res) => {
    globalArray.map((mes) => {
        res.send(mes)
    })
})
app.listen(3000, () => console.log('listning to twitter server ...'));