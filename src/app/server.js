var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();
var Users = require('../../data/model/events');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/SevaDB',{useNewUrlParser:true}).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('useCreateIndex',true);

// const app = express();
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());
const port = process.env.PORT || 3000;

const server = app.listen(port, function(){
 console.log('Listening on port ' + port);
});

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
  res.header('ACCESS_Control-Allow-Headers','*');

  if('OPTIONS' === req.method)
  {
    return res.sendStatus(200);
  }
  next();
});

app.get('/',function(req,res){
  res.json({
    status:false
  }); 
});

app.post("/addevent",function (req, res) {
   console.log("hello");

     events.insert({"event_name":req.body.event_name,"event_date":req.body.event_date,"event_address":req.body.event_address},function(err,users){
    console.log(req.body.event_name);
    console.log(users);
  });

});

