import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BASE_URL from "./api";

function CreateListing() {
    const [hackathonName, setHackathonName] = useState("");
    const [description, setDescription] = useState("");
    const [rolesNeeded, setRolesNeeded] = useState("");
    const navigate = useNavigate();


    const handleSubmit = () => {
        axios.post(`${BASE_URL}/listings`, {
            hackathon_name: hackathonName,
            description: description,
            roles_needed: rolesNeeded
        }, { headers: { authorization: localStorage.getItem('token') } })
            .then(() => {
                navigate('/listings');
            });
    };

   return (
  <div className="min-h-screen bg-[#0a0a0c] text-white font-sans flex flex-col relative overflow-hidden">
      
      {/* 1. BACKGROUND NEBULA GLOWS */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. HEADER */}
      <header className="flex justify-between items-center px-8 md:px-12 py-8 relative z-10">
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="p-2 bg-gradient-to-br from-purple-500/20 to-transparent rounded-lg border border-purple-500/20 group-hover:border-purple-500/50 transition-all">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100">Back to Dashboard</h1>
        </Link>
        <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HackMate</h1>
      </header>

      {/* 3. MAIN FORM SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 pb-20">
        
        {/* HEADING SECTION */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Post a <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">New Listing</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium">Find your perfect hackathon teammates</p>
        </div>

        {/* GLASS FORM CARD */}
        <div className="w-full max-w-2xl p-8 md:p-12 border border-white/10 bg-white/[0.03] rounded-[40px] backdrop-blur-xl shadow-2xl relative">
          
          {/* Subtle Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <form className="space-y-6">
            {/* Hackathon Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Hackathon Name</label>
              <input 
                type="text" 
                placeholder="e.g. Smart India Hackathon" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-600"
              />
            </div>

            {/* Project Idea */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">What are you building?</label>
              <textarea 
                rows="4"
                placeholder="Briefly describe your project idea..." 
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-600 resize-none"
              />
            </div>

            {/* Roles Needed */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Roles Needed</label>
              <input 
                type="text" 
                placeholder="e.g. Frontend, ML Engineer, UI/UX" 
                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-600"
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/20 hover:scale-[1.01] active:scale-[0.98] transition-all mt-4"
            >
              Create Listing →
            </button>
          </form>
        </div>

        {/* Optional Secondary Action */}
        <button className="mt-8 px-8 py-3 rounded-full bg-yellow-700/10 border border-yellow-600/30 text-yellow-500/80 font-bold text-sm hover:bg-yellow-700/20 transition-all uppercase tracking-widest">
          Find a Mentor instead
        </button>
      </main>

    </div>
  );
}

export default CreateListing;
