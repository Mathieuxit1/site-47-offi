const express = require("express")
const router = express.Router()
const multer = require("multer")

const authMiddleware = require("../middleware/auth")
const Document = require("../models/Document")
const sendDiscordLog = require("../utils/discordLogger")

// configuration upload
const storage = multer.diskStorage({

 destination: function (req, file, cb) {
  cb(null, "uploads/")
 },

 filename: function (req, file, cb) {
  cb(null, Date.now() + "-" + file.originalname)
 }

})

const upload = multer({ storage })


// Upload document
router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {

 try {

  if (!req.file) {
   return res.status(400).json({
    message: "No file uploaded"
   })
  }

  const document = new Document({

   title: req.body.title,
   filename: req.file.filename,
   department: req.body.department,
   category: req.body.category,
   clearance: req.body.clearance,
   uploaded_by: req.user.id,
   status: "pending"

  })

  await document.save()

  sendDiscordLog(
   `📄 Document uploaded: ${document.title} (Department: ${document.department}, Category: ${document.category}, Clearance: ${document.clearance}) by user ID: ${req.user.id}`
  )

  res.json({
   message: "Document uploaded successfully",
   document
  })

 } catch (error) {

  res.status(500).json({
   message: "Upload error",
   error
  })

 }

})


// Voir tous les documents (admin)
router.get("/", authMiddleware, async (req, res) => {

 try {

  const documents = await Document.find()

  res.json(documents)

 } catch (error) {

  res.status(500).json({
   message: "Server error"
  })

 }

})


// Voir seulement les documents approuvés (archives)
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