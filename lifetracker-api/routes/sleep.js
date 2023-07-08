const express = require("express");
const router = express.Router();
const Sleep = require('../models/sleep')

router.post('/create', async (req, res) => {
    res.send(req.body)
});

router.get('/', async (req, res, next) => {
    try{
        const { user } = res.locals
        const sleep = await Sleep.listSleep(req.body, user)
        return res.status(200).json({sleep: sleep})
    } catch (err) {
        next(err)
    }
})
module.exports = router