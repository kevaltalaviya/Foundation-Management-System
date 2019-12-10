const express = require('express');
const app = express();
const summercampregistrationRoute = express.Router();

// Require Business model in our routes module
let SummerCampRegistration = require('../models/SummerCampRegistration');

// Defined store route
summercampregistrationRoute.route('/add').post(function (req, res) {
  let summerCampRegistration = new SummerCampRegistration(req.body);
  summerCampRegistration.save()
    .then(SummerCampRegistration => {
      res.status(200).json({'summercampregistration': 'summercampregistration in added successfully'}); 
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

summercampregistrationRoute.route('/get/:title').get(function (req, res) {

  let title = req.params.title;
  SummerCampRegistration.find({"title":title},function (err, summerCampList){
    console.log("hello")
  if(err){
    console.log(err);
  }
  else {
    res.json(summerCampList);
  }
});
});

module.exports = summercampregistrationRoute;