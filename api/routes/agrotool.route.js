const express = require('express');
const app = express();
const agroToolRoutes = express.Router();

// Require Business model in our routes module
let AgroTool = require('../models/AgroTool');

// Defined store route
agroToolRoutes.route('/add').post(function (req, res) {
  let agroTool = new AgroTool(req.body);
  agroTool.save()
    .then(agroTool => {
      res.status(200).json({'agroTool': 'agroTool is added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
agroToolRoutes.route('/').get(function (req, res) {
    AgroTool.find(function (err, agroTools){
    if(err){
      console.log(err);
    }
    else {
      res.json(agroTools);
    }
  });
});

// Defined edit route
agroToolRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AgroTool.findById(id, function (err, agroTool){
      res.json(agroTool);
  });
});

// Defined delete | remove | destroy route
agroToolRoutes.route('/delete/:id').get(function (req, res) {
  AgroTool.findByIdAndRemove({_id: req.params.id}, function(err, agroTool){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

//  Defined update route
agroToolRoutes.route('/update/:id').post(function (req, res) {
  let id = req.params.id;
    AgroTool.findById(id, function(err,  agroTool) {
    if (!agroTool)
    {
      console.log(agroTool + "  dd  "+id)
      return next(new Error('Could not load Document')); 
    }
    else {
        
        agroTool.tool_name = req.body.tool_name,
        agroTool.tool_mrp = req.body.tool_mrp,
        agroTool.tool_discount = req.body.tool_discount,
        agroTool.tool_sell_price = req.body.tool_sell_price,
        agroTool.tool_address = req.body.tool_address,
        agroTool.tool_photo = req.body.tool_photo,
        agroTool.save().then(agroTool => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});



module.exports = agroToolRoutes;