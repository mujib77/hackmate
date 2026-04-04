require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const port = 5000

const authRoutes = require('./auth')
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.json({message: 'HackMate API is running'})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})