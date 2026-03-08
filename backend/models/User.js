const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

username:String,

password:String,

role:{
type:String,
default:"scientist"
},

department:String,

clearance:{
type:Number,
default:1
},

discord_id:String,

created_at:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("User",UserSchema)