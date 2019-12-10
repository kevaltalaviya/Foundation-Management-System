const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
const adminlogin1 = require('./models/AdminLogin');
const summercampRoute = require('./routes/summercamp.route');
const bloodcampRoute = require('./routes/bloodcamp.route');
const agrotollRoute =require('./routes/agrotool.route');
const scholarshipRoute = require('./routes/scholarship.route');
const moneydonationRoute = require('./routes/moneydonation.route');
const summercampregistration = require('./routes/summercampregistration.route');
const adminlogin =   require('./routes/adminlogin.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/summer-camp', summercampRoute);
app.use('/blood-camp', bloodcampRoute);
app.use('/agro-tool', agrotollRoute);
app.use('/scholarship',scholarshipRoute);
app.use('/moneydonation',moneydonationRoute);
app.use('/summercampregistration',summercampregistration);
app.use('/adminlogin',adminlogin);
const port = process.env.PORT || 4000;
app.listen(port);
app.post('/adminlogin',function(req,res,next){
  let p=adminlogin1.findOne({email:req.body.email,password:req.body.password}).exec();

 p.then(function(doc)
 {   if(doc)
     {
		 console.log(doc);
      return res.status(201).json(doc);
     }
});
p.catch(function(err){
        return res.status(501).json({massage:"error"});
    });
}); 




