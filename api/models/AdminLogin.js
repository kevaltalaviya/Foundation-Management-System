const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let AdminLogin = new Schema({
    email:{
    type: String
  }, 
  password:{
    type: String
  }, 
  
},{
    collection: 'AdminLogin'
});
module.exports = mongoose.model('AdminLogin', AdminLogin);
