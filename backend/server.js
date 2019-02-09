var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello');      //send response
});

app.listen(4200);