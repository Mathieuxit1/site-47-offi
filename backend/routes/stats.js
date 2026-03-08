const express = require("express")
const router = express.Router()

const Document = require("../models/Document")
const User = require("../models/User")

router.get("/",async(req,res)=>{

 const documents = await Document.countDocuments()
 const users = await User.countDocuments()

 res.json({

  documents,
  users

 })

})

module.exports = router