import { useState, useEffect, use} from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [college, setCollege] = useState('')

    function handleSubmit() {
        axios.post('http://localhost:5000/auth/register', {
           name, email, password, college
        })
        .then(data => {
            setName('')
            setEmail('')
            setPassword('')
            setCollege('')

        })
    }  

    return (
        <div>
            <h1>Register</h1>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder='College' value={college} onChange={(e) => setCollege(e.target.value)} />
            <button onClick={handleSubmit}>Register</button>

            <p>
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>

    )
}

export default Register