const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let BloodCamp = new Schema({
  camp_title:{
    type: String
  }, 
  camp_date:{
    type: Date
  }, 
  camp_address:{
    type: String
  }, 
  
},{
    collection: 'BloodCamp'
});

module.exports = mongoose.model('BloodCamp', BloodCamp);