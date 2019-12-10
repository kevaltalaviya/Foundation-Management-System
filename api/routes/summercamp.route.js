const express = require('express');
const app = express();
const summerCampRoutes = express.Router();

// Require Business model in our routes module
let SummerCamp = require('../models/SummerCamp');

// Defined store route
summerCampRoutes.route('/add').post(function (req, res) {
  let summerCamp = new SummerCamp(req.body);
  summerCamp.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
summerCampRoutes.route('/').get(function (req, res) {
  SummerCamp.find(function (err, summerCamps){
  if(err){
    console.log(err);
  }
  else {
    res.json(summerCamps);
  }
});
});
module.exports = summerCampRoutes;
