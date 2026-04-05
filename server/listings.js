const express = require('express')
const router = express.Router()
const pool = require('./db')
const authenticateToken = require('./middleware')

// Create a listing
router.post('/', authenticateToken, async (req, res) => {
  const { hackathon_name, description, roles_needed } = req.body
  
  const result = await pool.query(
    'INSERT INTO listings (user_id, hackathon_name, description, roles_needed) VALUES ($1, $2, $3, $4) RETURNING *',
    [req.user.id, hackathon_name, description, roles_needed]
  )
  
  res.json(result.rows[0])
})

// Get all listings
router.get('/', async (req, res) => {
  const result = await pool.query(
    'SELECT listings.*, users.name, users.college FROM listings JOIN users ON listings.user_id = users.id ORDER BY created_at DESC'
  )
  
  res.json(result.rows)
})

module.exports = router