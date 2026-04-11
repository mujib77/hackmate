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
  const token = localStorage.getItem('token');
  if (token) {
    axios.get(`${BASE_URL}/users/me`, {
      headers: { Authorization: token }
    })
    .then(res => {
      setProfile(res.data);
    })
    .catch(err => {
      console.error('Profile fetch failed:', err);
      // Stop the loading state even if it fails so we can show an error or empty profile
      setProfile({ name: "User", email: "Error loading data", skills: [] }); 
    });
  } else {
    navigate('/login');
  }
}, []);

    if (!profile) {
        return <div>Loading...</div>
    }

    function handleUpdate() {
    const token = localStorage.getItem('token')
    axios.put(`${BASE_URL}/users/me`, {
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

<div className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-purple-500/30 relative overflow-hidden flex flex-col">
    
    {/* 1. BACKGROUND NEBULA GLOWS - The "Cinematic" Feel */}
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

    {/* 2. HEADER */}
    <nav className="px-8 md:px-12 py-6 flex justify-between items-center relative z-10 border-b border-white/5 bg-black/20 backdrop-blur-md">
      <Link to="/dashboard" className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-2">
        HackMate 🚀
      </Link>
      <Link to="/dashboard" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
        Back to Dashboard
      </Link>
    </nav>

    {/* 3. MAIN CONTENT */}
    <div className="max-w-2xl mx-auto w-full px-6 py-12 relative z-10">
      
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight italic">
          Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Profile</span>
        </h2>
        <p className="text-slate-500 font-medium mt-2">Manage your developer identity</p>
      </div>

      {/* DISPLAY CARD */}
      <div className="bg-white/[0.03] border border-white/10 rounded-[32px] backdrop-blur-xl p-8 md:p-10 mb-8 shadow-2xl relative overflow-hidden group">
        {/* Subtle top light highlight */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Avatar Placeholder */}
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-[2px] shadow-lg shadow-purple-500/10">
            <div className="w-full h-full bg-[#0d0d0f] rounded-2xl flex items-center justify-center text-3xl">
              👤
            </div>
          </div>

          <div className="flex flex-col gap-3 flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-tight text-white">{profile.name}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium">
              <span className="text-slate-400">{profile.email}</span>
              <span className="text-slate-600 hidden md:inline">•</span>
              <span className="text-purple-400">🏫 {profile.college}</span>
            </div>
            
            <div className="mt-4 space-y-4">
              <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">About Me</p>
                <p className="text-slate-300 leading-relaxed">{profile.bio || 'No bio yet'}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Connect</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <div className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-xs font-bold text-blue-400">
                    🛠 {profile.skills || 'No skills'}
                  </div>
                  <div className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-xs font-bold text-slate-300">
                    🐙 {profile.github ? 'GitHub Linked' : 'No GitHub'}
                  </div>
                  <div className="px-4 py-2 bg-slate-900/50 border border-white/10 rounded-xl text-xs font-bold text-blue-500">
                    💼 {profile.linkedin ? 'LinkedIn Linked' : 'No LinkedIn'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDITING FORM SECTION */}
      {editing ? (
        <div className="bg-white/[0.05] border border-purple-500/20 rounded-[32px] backdrop-blur-2xl p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Update Information
          </h4>
          
          <div className="flex flex-col gap-5">
            {[
              { label: "Bio", val: bio, set: setBio, ph: "Tell us what you're building..." },
              { label: "Skills", val: skills, set: setSkills, ph: "React, Node, Python..." },
              { label: "GitHub URL", val: github, set: setGithub, ph: "github.com/username" },
              { label: "LinkedIn URL", val: linkedin, set: setLinkedin, ph: "linkedin.com/in/username" }
            ].map((input, i) => (
              <div key={i} className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">{input.label}</label>
                <input 
                  type="text" 
                  placeholder={input.ph} 
                  value={input.val} 
                  onChange={e => input.set(e.target.value)}
                  className="w-full bg-slate-900/50 text-white placeholder-slate-600 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" 
                />
              </div>
            ))}

            <div className="flex gap-4 mt-4">
              <button 
                onClick={handleUpdate} 
                className="flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-[1.02] active:scale-[0.98] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-purple-500/20"
              >
                Save Profile
              </button>
              <button 
                onClick={() => setEditing(false)} 
                className="flex-1 border border-white/10 bg-white/5 hover:bg-white/10 font-bold py-4 rounded-2xl transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setEditing(true)} 
          className="w-full bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 hover:border-white/20 font-bold py-5 rounded-[24px] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xl group"
        >
          <span className="bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-white">
            Edit Profile Details
          </span>
        </button>
      )}
    </div>

    {/* Footer branding */}
    <footer className="mt-auto py-10 text-center opacity-20">
      <p className="text-[10px] font-bold uppercase tracking-[0.5em]">HackMate encrypted profile system</p>
    </footer>
  </div>
);
}

export default Profile