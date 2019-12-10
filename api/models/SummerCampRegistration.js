const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let SummerCampRegistration = new Schema({
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
  age:{
    type:Number
  },
  gender:{
    type: String
  },
  mobile_no:{
    type: Number
  },
  title:{
    type:String
  }
},{
    collection: 'SummerCampRegistration'
});

module.exports = mongoose.model('SummerCampRegistration', SummerCampRegistration);