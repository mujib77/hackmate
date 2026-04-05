import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Listings from './Listings'
import CreateListing from './CreateListing'

function App() {
  return (
    <BrowserRouter>
      <h1>HackMate</h1>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/create-listing" element={<CreateListing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App