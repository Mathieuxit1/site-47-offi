const mongoose = require("mongoose")

const DocumentSchema = new mongoose.Schema({

 title:String,

 filename:String,

 department:String,

 category:String,

 clearance:Number,

 status:{
  type:String,
  default:"pending"
 },

 uploaded_by:String,

 approved_by:String,

 created_at:{
  type:Date,
  default:Date.now
 }

})

module.exports = mongoose.model("Document",DocumentSchema)