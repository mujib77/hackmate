const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({ message: 'No token provided'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' })
        }
        req.user = user
        next()
    })
    
}

module.exports = authenticateToken