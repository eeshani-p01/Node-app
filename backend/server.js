var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var messages =  [
    {
      text: 'Some text',
      owner: 'Eeshani Patel'
    },
    {
      text: 'Some New Text',
      owner: 'Mr, Json'
    }
];

app.use(bodyParser.json());     //will describe what receieve in the body should be json
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/messages', (req, res) => {
    res.json(messages);      //send response
});

app.post('/api/messages', (req, res) => {
    console.log(req.body)      //save data
    res.sendStatus(200);
});


app.listen(1234);