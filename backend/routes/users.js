const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

const User = require("../models/User")
const sendDiscordLog = require("../utils/discordLogger")

// Création d'un utilisateur (admin)
router.post("/create", async (req, res) => {

    const { username, password, role, department, clearance, discord_id } = req.body

    try {

        // Vérifier si l'utilisateur existe déjà
        const existingUser = await User.findOne({ username })

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        // Hash du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10)

        // Création de l'utilisateur
        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            department,
            clearance,
            discord_id
        })

        await newUser.save()

        sendDiscordLog(`New user created: ${username} (Role: ${role}, Department: ${department}, Clearance: ${clearance})`)

        res.json({
            message: "User created successfully",
            user: newUser
        })

    } catch (error) {

        res.status(500).json({
            message: "Server error",
            error
        })

    }

})

module.exports = router