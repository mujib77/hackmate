import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateListing() {
    const [hackathonName, setHackathonName] = useState("");
    const [description, setDescription] = useState("");
    const [rolesNeeded, setRolesNeeded] = useState("");
    const navigate = useNavigate();


    const handleSubmit = () => {
        axios.post('http://localhost:5000/listings', {
            hackathon_name: hackathonName,
            description: description,
            roles_needed: rolesNeeded
        }, { headers: { authorization: localStorage.getItem('token') } })
            .then(() => {
                navigate('/listings');
            });
    };

    return (<div>
        <h2>Create a Hackathon Listing</h2>
        <input
            type="text"
            placeholder="Hackathon Name"
            value={hackathonName}
            onChange={e => setHackathonName(e.target.value)}
        />
        <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
        />
        <input
            type="text"
            placeholder="Roles Needed"
            value={rolesNeeded}
            onChange={e => setRolesNeeded(e.target.value)}
        />
        <button onClick={handleSubmit}>Create Listing</button>
    </div>);
}

export default CreateListing;
