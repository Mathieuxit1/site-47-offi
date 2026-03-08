const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/auth")
const checkClearance = require("../middleware/permissions")
const SCP = require("../models/SCP")

router.get("/", authMiddleware, checkClearance(1), async (req,res)=>{

 const scps = await SCP.find()

 res.json(scps)

})

// voir tous les SCP
router.get("/", authMiddleware, async (req,res)=>{

 const scps = await SCP.find()

 res.json(scps)

})

// voir un SCP précis
router.get("/:id", authMiddleware, async (req,res)=>{

 const scp = await SCP.findById(req.params.id)

 if(req.user.clearance < scp.clearance){
  return res.status(403).json({
   message:"Insufficient clearance level"
  })
 }

 res.json(scp)

})

// créer un SCP
router.post("/create", authMiddleware, async (req,res)=>{

 const scp = new SCP(req.body)

 await scp.save()

 res.json({
  message:"SCP created",
  scp
 })

})

module.exports = router