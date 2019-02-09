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

var api = express.Router();     //it will create new express router
//we are attaching these routes to new router api
api.get('/messages', (req, res) => {
    res.json(messages);      //send response
});

api.post('/messages', (req, res) => {
    messages.push(req.body)      //save data
    res.sendStatus(200);
});
app.use('/api', api);   //will tell app to use new api route

app.listen(1234);