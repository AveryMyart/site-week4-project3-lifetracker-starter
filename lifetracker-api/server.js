const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {PORT} = require("./config")
const security = require("./middleware/security")
const authRoutes = require("./routes/auth")
const sleepRoutes = require("./routes/sleep")

const {BadRequestError, NotFoundError} = require('./utils/errors')

const app = express()

app.use(cors())

app.use(express.json())

app.use(morgan("tiny"))


app.use("/auth", authRoutes)

app.use('/sleep', sleepRoutes)

app.get('/', (req, res) => res.send('hello'))



app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message

    return res.status(status).json({
        error: {message, status}
    })
})

app.listen(PORT, () => {
    console.log(`🚀Server running on http://localhost:${PORT}` )
})

