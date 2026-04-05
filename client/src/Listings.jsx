import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BASE_URL from "./api";

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/listings`)
            .then(response => setListings(response.data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

   return (
  <div className="min-h-screen bg-black text-white">
    <nav className="border-b border-gray-800 px-8 py-4 flex justify-between items-center">
      <Link to="/dashboard" className="text-xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">HackMate 🚀</Link>
      <Link to="/create-listing" className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg text-sm font-bold">+ Post Listing</Link>
    </nav>

    <div className="max-w-4xl mx-auto px-8 py-12">
      <h2 className="text-4xl font-black mb-2">Open Teams</h2>
      <p className="text-gray-400 mb-10">Find your next hackathon squad</p>

      <div className="flex flex-col gap-4">
        {listings.map(listing => (
          <div key={listing.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white">{listing.hackathon_name}</h3>
              <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{listing.college}</span>
            </div>
            <p className="text-gray-400 mb-4">{listing.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-blue-400 text-sm">🎯 {listing.roles_needed}</span>
              <span className="text-gray-500 text-sm">by {listing.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default Listings;