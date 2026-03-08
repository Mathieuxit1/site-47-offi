const express = require("express")
const path = require("path")

const app = express()

// Import de la base de données
require("./database")

// Import des routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const documentRoutes = require("./routes/documents")
const adminRoutes = require("./routes/admin")
const scpRoutes = require("./routes/scp")
const statsRoutes = require("./routes/stats")

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Dossier public
app.use(express.static(path.join(__dirname, "../public")))

// Routes API
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/documents", documentRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/scp", scpRoutes)
app.use("/api/stats", statsRoutes)

// Pages frontend
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/login/index.html"))
})

app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dashboard/index.html"))
})

app.get("/test", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dashboard/test.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/login/login.html"))
})

// Gestion des erreurs 404
app.use((req, res) => {
    res.status(404).json({
        error: "Page not found"
    })
})

// Port du serveur
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("ASIA DATABASE running on port " + PORT)
})