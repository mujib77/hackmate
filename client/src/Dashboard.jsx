import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    } 

    return (
        <div>
            <h1>Welcome to the HackMate</h1>
            <nav>
                <Link to="/profile">View Profile</Link>
                <Link to="/listings">View Listings</Link>
                <Link to="/create-listing">Post a Listing</Link>
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Dashboard