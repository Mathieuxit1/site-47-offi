const mongoose = require("mongoose")

const SCPSchema = new mongoose.Schema({

 number: String,

 class: String,

 clearance:Number,

 containment: String,

 description: String,

 tests: Array,

 documents: Array,

 created_at:{
  type:Date,
  default:Date.now
 }

})

module.exports = mongoose.model("SCP",SCPSchema)