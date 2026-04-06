# HackMate 🚀

**Find your perfect hackathon team.**

HackMate connects developers, designers, and ML engineers looking for teammates for hackathons. Post a listing, browse open teams, and build something great together.

🌐 **Live:** https://hackmate-nu.vercel.app

---

## Features

- User registration and login with JWT authentication
- Secure password hashing with bcrypt
- Create and browse hackathon team listings
- Edit your profile with skills, bio, and social links
- Protected routes — only logged in users can post
- Clean dark UI built with Tailwind CSS

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, React Router, Axios

**Backend:** Node.js, Express.js, PostgreSQL (Neon), JWT, bcrypt

**Deployment:** Vercel (frontend), Railway (backend)

## Running Locally

**Backend:**
```bash
cd server
npm install
nodemon index.js
```

**Frontend:**
```bash
cd client
npm install
npm run dev
```

Create a `.env` file in the server folder with your database credentials before running.


---

Built by [Mujib](https://github.com/mujib77)