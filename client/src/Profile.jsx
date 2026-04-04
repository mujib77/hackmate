import { useState, useEffect } from 'react'
import axios from 'axios'

function Profile() {
const [editing, setEditing] = useState(false)
const [bio, setBio] = useState('')
const [skills, setSkills] = useState('')
const [github, setGithub] = useState('')
const [linkedin, setLinkedin] = useState('')
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log('Token:', token) // Debugging line to check if token is retrieved
        if (token) {
            axios.get('http://localhost:5000/users/me', {
                headers: {Authorization: token}
            })
            .then(res => {
                setProfile(res.data)
            })
            .catch(err => console.log('error:', err))
        }
    }, [])

    if (!profile) {
        return <div>Loading...</div>
    }

    function handleUpdate() {
    const token = localStorage.getItem('token')
    axios.put('http://localhost:5000/users/me', {
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
        <div>
            <h1>Profile</h1>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>College: {profile.college}</p>
            <p>Bio: {profile.bio}</p>
            <p>Skills: {profile.skills}</p>
            <p>GitHub: {profile.github}</p>
            <p>LinkedIn: {profile.linkedin}</p>

            {editing ? (
                <div>
                    <input type="text" placeholder='Bio' value={bio} onChange={(e) => setBio(e.target.value)} />
                    <input type="text" placeholder='Skills' value={skills} onChange={(e) => setSkills(e.target.value)} />
                    <input type="text" placeholder='GitHub' value={github} onChange={(e) => setGithub(e.target.value)} />
                    <input type="text" placeholder='LinkedIn' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setEditing(false)}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setEditing(true)}>Edit Profile</button>
            )}

        </div>
    )
}

export default Profile