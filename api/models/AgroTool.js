const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let AgroTool = new Schema({
  tool_name:{
    type: String
  }, 
  tool_mrp:{
    type: Number
  }, 
  tool_discount:{
    type: Number
  }, 
  tool_sell_price:{
    type: Number
  }, 
  tool_address:{
    type: String
  }, 
  tool_photo:{
    type: String
  }, 
  
},{
    collection: 'AgroTool'
});

module.exports = mongoose.model('AgroTool', AgroTool);