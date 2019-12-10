const express = require('express');
const app = express();
const bloodCampRoutes = express.Router();

// Require Business model in our routes module
let BloodCamp = require('../models/BloodCamp');

// Defined store route
bloodCampRoutes.route('/add').post(function (req, res) {
  let bloodCamp = new BloodCamp(req.body);
  bloodCamp.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});
bloodCampRoutes.route('/').get(function (req, res) {
  BloodCamp.find(function (err, bloodCamps){
  if(err){
    console.log(err);
  }
  else {

    res.json(bloodCamps);
  }
});
});
// // Defined get data(index or listing) route
// summerCampRoutes.route('/').get(function (req, res) {
//     Business.find(function (err, businesses){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(businesses);
//     }
//   });
// });

// // Defined edit route
// summerCampRoutes.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Business.findById(id, function (err, business){
//       res.json(business);
//   });
// });

// //  Defined update route
// summerCampRoutes.route('/update/:id').post(function (req, res) {
//     Business.findById(req.params.id, function(err, next, business) {
//     if (!business)
//       return next(new Error('Could not load Document'));
//     else {
//         business.person_name = req.body.person_name;
//         business.business_name = req.body.business_name;
//         business.business_gst_number = req.body.business_gst_number;

//         business.save().then(business => {
//           res.json('Update complete');
//       })
//       .catch(err => {
//             res.status(400).send("unable to update the database");
//       });
//     }
//   });
// });

// // Defined delete | remove | destroy route
// summerCampRoutes.route('/delete/:id').get(function (req, res) {
//     Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
//         if(err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = bloodCampRoutes;
