# HackMate - Server

Backend API for HackMate, a platform to find hackathon teammates.

## What I learned
- Setting up Express with multiple route files
- User registration with bcrypt password hashing
- User login with JWT token generation
- Environment variables and security best practices
- Connecting Express to PostgreSQL

## API Routes
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login and receive JWT token

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- bcrypt
- jsonwebtoken
- dotenv

## How to run
cd server
npm install
nodemon index.js

## Note
Requires PostgreSQL running locally with a database called `hackmate`.
Create a `.env` file with your database credentials before running.