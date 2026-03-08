const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

 username: {
  type: String,
  required: true,
  unique: true
 },

 discord_id: String,

 role: String,

 department: String,

 clearance: Number,

 password: String,

 created_at: {
  type: Date,
  default: Date.now
 }

})

module.exports = mongoose.model("User", UserSchema)