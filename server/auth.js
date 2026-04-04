require('dotenv').config()
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('./db')

router.post('/register', async(req, res) => {
    const { name, email, password, college} = req.body
    console.log(req.body)
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
        'INSERT INTO users (name, email, password, college) VALUES ($1, $2, $3, $4) RETURNING id,name,email,college',
        [name, email, hashedPassword, college]
    )

    res.json({ message: 'USER registered', user: result.rows[0] })

})

router.post('/login', async(req, res) => {
    const { email, password} = req.body

    const result = await pool.query (
        'SELECT * FROM users WHERE email = $1',
        [email]
    )

    if (result.rows.length === 0) {
        return res.status(401).json({message: 'User not found'})
    }

    const user = result.rows[0]

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
        return res.status(401).json({message: 'Invalid password'})
    }

    const token = jwt.sign(
        { id: user.id, email: user.email},
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
    res.json({ message: 'Login successful', token })
})

module.exports = router