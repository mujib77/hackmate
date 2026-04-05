import { useState, useEffect, use} from 'react'
import axios  from 'axios'
import { Link } from 'react-router-dom'
import BASE_URL from './api'

function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [college, setCollege] = useState('')

    function handleSubmit() {
        axios.post(`${BASE_URL}/auth/register`, {
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
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* 🌌 Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-30 top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[180px] opacity-30 bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 Glass Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-[0_0_40px_rgba(168,85,247,0.4)]">

        <h1 className="text-3xl font-bold text-white text-center mb-2">
          Create Account
        </h1>
        <p className="text-gray-300 text-center mb-6 text-sm">
          Join HackMate and find your team 🚀
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="text-gray-300 text-sm">Full Name</label>
          <div className="mt-1 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500">
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

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
              placeholder="Create a password"
              className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* College */}
        <div className="mb-6">
          <label className="text-gray-300 text-sm">College</label>
          <div className="mt-1 flex items-center bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-purple-500">
            <input
              type="text"
              placeholder="Enter your college"
              className="bg-transparent outline-none text-white w-full placeholder-gray-400"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
        >
          Create Account
        </button>

        {/* Bottom */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register