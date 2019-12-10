const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let SummerCamp = new Schema({
  camp_title:{
    type: String
  }, 
  description:{
    type: String
  }, 
  start_date:{
    type: String
  },
  end_date:{
    type: String
  },
  fee_amount:{
    type: Number
  },
  max_seat:{
    type: Number
  },
  min_age:{
    type: Number
  },
  max_age:{
    type: Number
  },
  last_date_to_reg:{
    type: String
  },
  photo:{
    type: String
  }
},{
    collection: 'SummerCamp'
});

module.exports = mongoose.model('SummerCamp', SummerCamp);