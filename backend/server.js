var express = require('express');
var app = express();

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

app.get('/messages', (req, res) => {
    res.json(messages);      //send response
});

app.listen(4200);