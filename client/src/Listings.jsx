import { useEffect, useState } from "react";
import axios from "axios";

function Listings() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/listings')
            .then(response => setListings(response.data))
            .catch(error => console.error('Error fetching listings:', error));
    }, []);

    return (<div>
            <h2>Hackathon Listings</h2>
            {listings.map(listing => (
                <div key={listing.id} className="listing">
                    <h3>{listing.hackathon_name}</h3>
                    <p>{listing.description}</p>
                    <p><strong>Roles Needed:</strong> {listing.roles_needed}</p>
                    <p><em>Posted by {listing.name} from {listing.college}</em></p>
                </div>
            ))}
        </div>
    );
}

export default Listings;