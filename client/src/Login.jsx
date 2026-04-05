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
  <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
    
    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"></div>

    <div className="relative bg-gray-900 bg-opacity-80 backdrop-blur-sm p-10 rounded-3xl w-full max-w-md border border-gray-700 shadow-2xl">
      
      <div className="mb-8">
        <h1 className="text-4xl font-black text-white mb-2">HackMate 🚀</h1>
        <p className="text-gray-400">Find your perfect hackathon team</p>
      </div>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg"
      >
        Login →
      </button>

      <p className="text-gray-500 text-center mt-6 text-sm">
        No account? <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium">Create one free</Link>
      </p>
    </div>
  </div>
)
}

export default Login