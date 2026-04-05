import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import BASE_URL from './api'

function Profile() {
const [editing, setEditing] = useState(false)
const [bio, setBio] = useState('')
const [skills, setSkills] = useState('')
const [github, setGithub] = useState('')
const [linkedin, setLinkedin] = useState('')
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log('Token:', token) // Debugging line to check if token is retrieved
        if (token) {
            axios.get(`${BASE_URL}/users/me`, {
                headers: {Authorization: token}
            })
            .then(res => {
                setProfile(res.data)
            })
            .catch(err => console.log('error:', err))
        }
    }, [])

    if (!profile) {
        return <div>Loading...</div>
    }

    function handleUpdate() {
    const token = localStorage.getItem('token')
    axios.put('http://localhost:5000/users/me', {
        bio,
        skills,
        github,
        linkedin
    }, {
        headers: {Authorization: token}
    })
    .then(res => {
        setProfile(res.data)
        setEditing(false)
    })
    .catch(err => console.log('error:', err))
}

return (
  <div className="min-h-screen bg-black text-white">
    <nav className="border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HackMate 🚀</Link>
    </nav>

    <div className="max-w-2xl mx-auto px-8 py-12">
      <h2 className="text-4xl font-black mb-8">Your Profile</h2>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 mb-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold">{profile.name}</h3>
          <p className="text-gray-400">{profile.email}</p>
          <p className="text-gray-400">🏫 {profile.college}</p>
          <p className="text-gray-300 mt-2">{profile.bio || 'No bio yet'}</p>
          <p className="text-blue-400">🛠 {profile.skills || 'No skills added'}</p>
          <p className="text-gray-400">🐙 {profile.github || 'No GitHub added'}</p>
          <p className="text-gray-400">💼 {profile.linkedin || 'No LinkedIn added'}</p>
        </div>
      </div>

      {editing ? (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col gap-4">
          <input type="text" placeholder="Bio" value={bio} onChange={e => setBio(e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Skills" value={skills} onChange={e => setSkills(e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="GitHub URL" value={github} onChange={e => setGithub(e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="LinkedIn URL" value={linkedin} onChange={e => setLinkedin(e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500" />
          <div className="flex gap-4">
            <button onClick={handleUpdate} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 font-bold py-3 rounded-xl transition">Save</button>
            <button onClick={() => setEditing(false)} className="flex-1 border border-gray-700 hover:border-gray-500 font-bold py-3 rounded-xl transition">Cancel</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setEditing(true)} className="w-full border border-gray-700 hover:border-gray-500 font-bold py-3 rounded-xl transition">
          Edit Profile
        </button>
      )}
    </div>
  </div>
) 
}

export default Profile