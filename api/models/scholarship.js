const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Scholarship = new Schema({
  firstname:{
    type: String
  }, 
  middlename:{
    type: String
  }, 
  lastname:{
    type: String
  },
  email:{
    type: String
  },
  mobile_no:{
    type: Number
  },
  gender:{
    type: String
  },
  dob:{
    type: String
  },
  pincode:{
    type: Number
  },
  city:{
    type: String
  },
  bank_name:{
    type: String
  },
  account_no:{
    type: Number
  },
  IFSC_no:{
    type: Number
  },
  percentage:{
    type: Number
  },
  marksheet:{
    type: String
  },
  approve:{
    type: Boolean
  }
},{
    collection: 'Scholarship'
});

module.exports = mongoose.model('Scholarship', Scholarship);