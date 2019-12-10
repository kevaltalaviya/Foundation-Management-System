const express = require('express');
const app = express();
const adminLoginRoute = express.Router();
// Require Business model in our routes module
let AdminLogin = require('../models/AdminLogin');
// Defined store route
adminLoginRoute.route('/add').post(function (req, res) {
  let adminLogin = new AdminLogin(req.body);
  adminLogin.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
adminLoginRoute.route('/').get(function (req, res) {
  AdminLogin.find(function (err, adminLogin){
  if(err){
    console.log(err);
  }
  else {
    res.json(adminLogins);
  }
});
});
module.exports = adminLoginRoute;