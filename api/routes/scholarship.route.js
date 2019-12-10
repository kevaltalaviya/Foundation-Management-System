const express = require('express');
const app = express();
const scholarshipRoutes = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
user: 'sevafoundation001@gmail.com',
pass: 'seva12345'
}
});
// Require Business model in our routes module
let Scholarship = require('../models/scholarship');

// Defined store route
scholarshipRoutes.route('/add').post(function (req, res) {
  let scholarship = new Scholarship(req.body);
  scholarship.save()
    .then(scholarship => {
      res.status(200).json({'scholarship': 'scholarship in added successfully'});

    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

scholarshipRoutes.route('/').get(function (req, res) {
  Scholarship.find(function (err, scholarships){
  if(err){
    console.log(err);
  }
  else {
    res.json(scholarships);
  }
});
});

scholarshipRoutes.route('/approve/:id').post(function (req, res) {
  let id = req.params.id;
  Scholarship.findById(id, function(err,  scholarship) {
    if (!scholarship)
    {
      console.log(scholarship + "  dd  "+id)
      return next(new Error('Could not load Document')); 
    }
    else {
        scholarship.approve = true;
        var mailOptions = {
          from:
          'sevafoundation001@gmail.com',
          to:
          req.body.email,
          subject:
          'your scholarship is granted',
          text:
          'your scholarship is granted'
          };
          transporter.sendMail(mailOptions, function(error, info){
          if (error) {
          console.log(error);
          } else {
          console.log('Email sent: ' + req.body.email+info.response);
		  
          }
          });
        scholarship.save().then(scholarship => {
          res.json('Update complete');
      })
      .catch(err => {
                 console.log("errr")
                     res.status(400).send("unable to update the database");
      });
    }
  });
});
module.exports = scholarshipRoutes;
