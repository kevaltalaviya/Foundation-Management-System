const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Moneydonation = new Schema({
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
  bank_name:{
    type: String
  },
  account_no:{
    type: Number
  },
  IFSC_no:{
    type: Number
  },
  amount:{
    type: Number
  },
  
},{
    collection: 'Moneydonation'
});

module.exports = mongoose.model('Moneydonation', Moneydonation);