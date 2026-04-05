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

      {/* 🌌 Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[180px] opacity-30 bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 Glass Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-[0_0_40px_rgba(168,85,247,0.4)]">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Sign in to continue to your account
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Email Address</label>
          <div className="mt-1 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Password</label>
          <div className="mt-1 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500">
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
          
        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        >
          Sign In
        </button>

        {/* Bottom */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login