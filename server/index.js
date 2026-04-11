require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const listingsRoutes = require('./listings')

app.use(express.json())

app.use(cors({
  origin: 'https://hackmate-nu.vercel.app'
}))

const authenticateToken = require('./middleware')
const userRoutes = require('./users')
const authRoutes = require('./auth')

app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/listings', listingsRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'HackMate API is running' })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})