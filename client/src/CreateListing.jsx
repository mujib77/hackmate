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
  <div className="min-h-screen bg-black text-white">
    <nav className="border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HackMate 🚀</Link>
      <Link to="/listings" className="text-gray-400 hover:text-white transition text-sm">← Back to listings</Link>
    </nav>

    <div className="max-w-2xl mx-auto px-8 py-12">
      <h2 className="text-4xl font-black mb-2">Post a Listing</h2>
      <p className="text-gray-400 mb-10">Find your perfect hackathon teammates</p>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Hackathon Name"
          value={hackathonName}
          onChange={e => setHackathonName(e.target.value)}
          className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="What are you building?"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={4}
          className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
        />
        <input
          type="text"
          placeholder="Roles needed (e.g. Frontend, ML engineer)"
          value={rolesNeeded}
          onChange={e => setRolesNeeded(e.target.value)}
          className="w-full bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-bold py-3 rounded-xl transition mt-2"
        >
          Post Listing →
        </button>
      </div>
    </div>
  </div>
)
}

export default CreateListing;
