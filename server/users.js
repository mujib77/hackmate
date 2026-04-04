const express = require('express')
const router = express.Router()
const pool = require('./db')
const authenticateToken = require('./middleware')

router.get('/me', authenticateToken, async (req, res) => {
    const result = await pool.query(
        'SELECT id, name, email, college, bio, skills, github, linkedin FROM users WHERE id = $1',
        [req.user.id]
    )
    res.json(result.rows[0]
    )
})

router.put('/me', authenticateToken, async (req, res) => {
    const { bio, skills, github, linkedin } = req.body

    const result = await pool.query (
        "UPDATE users SET bio = $1, skills = $2, github = $3, linkedin = $4 WHERE id = $5 RETURNING *",
        [bio, skills, github, linkedin, req.user.id]
    )
    res.json(result.rows[0])
})

module.exports = router