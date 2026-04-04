import { Link } from 'react-router-dom'
function Dashboard() {
    return (
        <div>
            <h1>Welcome to the HackMate</h1>
            <nav>
                <Link to="/profile">View Profile</Link>
            </nav>
        </div>
    )
}

export default Dashboard