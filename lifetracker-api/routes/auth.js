const express = require("express")
const user = require("../models/user")
const router = express.Router()

router.post("/login", async (req, res, next) => {
try {
    // take username and password and try to authenticate
} catch (err) {
    next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        // take firstName, lastName, email, password
        // create neww user in database
    } catch (err) {
        next(err)
        }
    })
    

module.exports = router