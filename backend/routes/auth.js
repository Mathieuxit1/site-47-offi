const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User")
const config = require("../config")
const sendDiscordLog = require("../utils/discordLogger")

router.post("/login", async (req, res) => {

    const { username, password } = req.body

    try {

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(400).json({
                message: "User not found"
            })
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(400).json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                clearance: user.clearance
            },
            config.JWT_SECRET,
            { expiresIn: "8h" }
        )

        sendDiscordLog(`User logged in: ${user.username} (Role: ${user.role}, Clearance: ${user.clearance})`)

        res.json({
            message: "Login successful",
            token
        })

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        })

    }

})

router.get("/test", (req, res) => {
    res.json({
        message: "Auth route working"
    })
})

module.exports = router