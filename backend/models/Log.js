const mongoose = require("mongoose")

const LogSchema = new mongoose.Schema({

 action:String,

 user:String,

 date:{
  type:Date,
  default:Date.now
 }

})

module.exports = mongoose.model("Log",LogSchema)