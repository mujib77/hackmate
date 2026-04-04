import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function handleSubmit() {
        axios.post('http://localhost:5000/auth/login', {
            email, password
        })
        .then(res => {
            localStorage.setItem('token', res.data.token)
            navigate('/dashboard') // Redirect to dashboard after successful login
        })
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>

            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    )
}

export default Login