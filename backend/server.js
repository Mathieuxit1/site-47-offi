const express = require("express")
const path = require("path")

const app = express()

// Import database
require("./database")

// Import routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const documentRoutes = require("./routes/documents")
const adminRoutes = require("./routes/admin")
const scpRoutes = require("./routes/scp")
const statsRoutes = require("./routes/stats")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static folders
app.use(express.static("public"))
app.use("/uploads", express.static("uploads"))

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/documents", documentRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/scp", scpRoutes)
app.use("/api/stats", statsRoutes)

// Pages

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/login/login.html"))
})

app.get("/login", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/login/login.html"))
})

app.get("/dashboard", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/dashboard/index.html"))
})

app.get("/archives", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/archives/index.html"))
})

app.get("/scp", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/scp/index.html"))
})

app.get("/admin", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/admin/index.html"))
})

app.get("/boot", (req, res) => {
 res.sendFile(path.join(__dirname, "../frontend/boot/index.html"))
})

// Server start
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
 console.log("ASIA DATABASE running on port " + PORT)
})