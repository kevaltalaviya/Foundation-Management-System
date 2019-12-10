const express = require('express');
const app = express();
const moneydonationRoutes = express.Router();
var nodemailer = require('nodemailer');

// Require Business model in our routes module
let Moneydonation = require('../models/moneydonation');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
  user: 'sevafoundation001@gmail.com',
  pass: 'seva12345'
  }
  });
// Defined store route
moneydonationRoutes.route('/').post(function (req, res) {
  let moneydonation = new Moneydonation(req.body);
  moneydonation.save()
    .then(moneydonation => {
      var mailOptions = {
        from:
        'sevafoundation001@gmail.com',
        to:
        req.body.email,
        subject:
        'Your Donation is Received',
        text:"Dear Donor, your donation is received by Seva Foundation. We are very thank full for your kindness."
        
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + req.body.email+info.response);
          }
        });
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
      console.log("hello");

    res.status(400).send("unable to save to database");
    });
    
  });
    moneydonationRoutes.route('/').get(function (req, res) {
      Moneydonation.find(function (err, moneyDonations){
      if(err){
        console.log(err);
      }
      else {
        res.json(moneyDonations);
      }
    });
    });
module.exports = moneydonationRoutes;