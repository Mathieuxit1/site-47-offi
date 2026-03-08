const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://asia_admin:adminasia10@cluster0.yp5kitq.mongodb.net/asia_database?retryWrites=true&w=majority")

mongoose.connection.on("connected", () => {
    console.log("MongoDB Atlas connected")
})

mongoose.connection.on("error", (err) => {
    console.log("MongoDB error:", err)
})

module.exports = mongoose