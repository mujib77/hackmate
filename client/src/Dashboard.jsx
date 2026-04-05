import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    } 

   return (
  <div className="min-h-screen bg-black text-white">
    <nav className="border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HackMate 🚀</h1>
      <div className="flex gap-6 items-center">
        <Link to="/listings" className="text-gray-400 hover:text-white transition">Browse</Link>
        <Link to="/create-listing" className="text-gray-400 hover:text-white transition">Post</Link>
        <Link to="/profile" className="text-gray-400 hover:text-white transition">Profile</Link>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition">Logout</button>
      </div>
    </nav>

    <div className="max-w-4xl mx-auto px-8 py-20 text-center">
      <h2 className="text-6xl font-black mb-6">Find Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dream Team</span></h2>
      <p className="text-gray-400 text-xl mb-10">Connect with developers, designers and ML engineers for your next hackathon</p>
      <div className="flex gap-4 justify-center">
        <Link to="/listings" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 px-8 py-4 rounded-xl font-bold text-lg transition">Browse Teams</Link>
        <Link to="/create-listing" className="border border-gray-700 hover:border-gray-500 px-8 py-4 rounded-xl font-bold text-lg transition">Post Listing</Link>
      </div>
    </div>
  </div>
)
}

export default Dashboard