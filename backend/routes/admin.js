const express = require("express")
const router = express.Router()
const checkRole = require("../middleware/permissions")

const authMiddleware = require("../middleware/auth")
const Document = require("../models/Document")
const sendDiscordLog = require("../utils/discordLogger")

// Voir les documents en attente
router.get("/pending", authMiddleware, checkRole("admin"), async (req, res) => {

 try {

  const documents = await Document.find({ status: "pending" })

  res.json(documents)

 } catch (error) {

  res.status(500).json({
   message: "Server error"
  })

 }

})


// Approuver un document
router.post("/approve/:id", authMiddleware, async (req, res) => {

 try {

  const document = await Document.findById(req.params.id)

  if (!document) {
   return res.status(404).json({
    message: "Document not found"
   })
  }

  document.status = "approved"
  document.approved_by = req.user.id

  await document.save()

  sendDiscordLog(
   `✅ Document approved: ${document.title} (Department: ${document.department}, Category: ${document.category}, Clearance: ${document.clearance}) by user ID: ${req.user.id}`
  )

  res.json({
   message: "Document approved",
   document
  })

 } catch (error) {

  res.status(500).json({
   message: "Server error"
  })

 }

})


// Rejeter un document
router.post("/reject/:id", authMiddleware, async (req, res) => {

 try {

  const document = await Document.findById(req.params.id)

  if (!document) {
   return res.status(404).json({
    message: "Document not found"
   })
  }

  document.status = "rejected"

  await document.save()

  sendDiscordLog(
   `❌ Document rejected: ${document.title} by user ID: ${req.user.id}`
  )

  res.json({
   message: "Document rejected",
   document
  })

 } catch (error) {

  res.status(500).json({
   message: "Server error"
  })

 }

})


// Voir les documents approuvés
router.get("/approved", authMiddleware, async (req, res) => {

 try {

  const documents = await Document.find({ status: "approved" })

  res.json(documents)

 } catch (error) {

  res.status(500).json({
   message: "Server error"
  })

 }

})

module.exports = router