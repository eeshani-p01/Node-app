var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

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
var users = [];

app.use(bodyParser.json());     //will describe what receieve in the body should be json
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var api = express.Router();     //it will create new express router
var auth = express.Router();    //creating auth route

//we are attaching these routes to new router api
api.get('/messages', (req, res) => {
    res.json(messages);      //send response
});

api.get('/messages/:user', (req, res) => {
    var user = req.params.user;
    var result = messages.filter(message => message.owner == user);
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body)      //save data
    res.sendStatus(200);
});

auth.post('/login', (req, res)=>{
    var user = users.find(user=> user.email == req.body.email);
    if(!user) 
       sendAuthError(res);
    if(user.password == req.body.password) 
        sendToken(user, res);
    else
       sendAuthError(res);
});

auth.post('/register', (req, res)=>{
    var index = users.push(req.body) - 1;
    var user = users[index];
    user.id = index;
   sendToken(user, res);
});

function sendToken(user, res){
    var token = jwt.sign(user.id, '123');
    res.json({firstName:user.firstName ,token});
}

function sendAuthError(res){
    return res.json({ success: false, message: 'Email or password incorrect' })
}

app.use('/api', api);   //will tell app to use new api route
app.use('/auth', auth); 

app.listen(1234);