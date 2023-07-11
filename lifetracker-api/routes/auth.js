const express = require("express")
const User = require("../models/user")
const router = express.Router()
const security = require('../middleware/security')

router.post("/login", async (req, res, next) => {
    try {
        const user = await User.login(req.body)
        if (user) {
            let token = User.generateToken(user)
            console.log(token)
            res.status(200).json(token)
            return
        }
        res.status(200).json({error: 'login endpoint has invalid user'})
        
    } catch (err) {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        const user = await User.register(req.body)
        return res.status(201).json({user})
    } catch (err) {
        next(err)
    }
})

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
    try {
        const { email } = res.locals.user;
        const user = await User.fetchUserByEmail(email);
        const publicUser = User.createPublicUser(user);
        return res.status(200).json({ user: publicUser })
        
    } catch (err) {
        next(err);
    }
})



module.exports = router

