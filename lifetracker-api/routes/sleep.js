const express = require("express");
const router = express.Router();
const Sleep = require('../models/sleep')
const User = require('../models/user')

router.post('/create', async (req, res) => {
    console.log("/create route", req.body)
    try{
        const {start_time, end_time, token} = req.body
        const email = User.decodeToken(token).email
        console.log("email", email)
        const insert = await Sleep.insertSleep(start_time, end_time, email)
        if (insert){
            return res.status(201).json(req.body)
        }
        // res.status(201).json({start_time: start_time, end_time: end_time, email: email})
        res.status(200).json({error: 'sleep endpoint has invalid request'})
    } catch (err) {
        console.error(err.message)
    }

    // let token = req.body.token;
    // let decoded = User.decodeToken(token)
    // console.log(decoded)
    
    // res.send(decoded)
});

router.get('/', async (req, res, next) => {
    console.log("Sleep route", req.query)
    try{
        const { email } = req.query;
        console.log(email)
        const sleep = await Sleep.listSleep(email)
        return res.status(200).json({sleep: sleep})
    } catch (err) {
        next(err )
    }
})
module.exports = router