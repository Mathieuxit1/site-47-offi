const mongoose = require("mongoose")
const config = require("./config")

mongoose.connect(config.MONGO_URI)

.then(() => {

 console.log("MongoDB Atlas connected")

})

.catch((error) => {

 console.log("MongoDB connection error:", error)

})