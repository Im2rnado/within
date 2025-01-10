# ESLSCA Connect

## Overview
This project is a web application developed as part of the ESLSCA Year 2 curriculum. It is a social networking platform for ESLSCA University built with Node.js, Express, MongoDB and React.

## Features
- User authentication (login, register, password reset)
- Different user roles (admin, regular user) 
- Posts system with likes
- Announcements system (admin only)
- User profiles with customizable details
- Light/dark theme support

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- bcryptjs for password encryption
- JWT for authentication
- CORS middleware

### Frontend  
- React
- React Router
- Bootstrap for styling
- Custom CSS

## API Endpoints

### Authentication
- POST /login - Login with username/email and password
- POST /register - Create new user account
- POST /forgetPassword - Reset user password

### Posts
- GET /posts - Get all posts
- GET /homePosts - Get trending and latest posts
- POST /addPost - Create new post
- DELETE /deletePost/:title - Delete a post
- POST /likePost/:title - Like/unlike a post

### Announcements
- GET /announcements - Get all announcements 
- POST /addAnnouncement - Create new announcement (admin only)
- DELETE /deleteAnnouncement/:title - Delete an announcement

### Profile
- GET /profile/:username - Get user profile
- POST /profile - Update user profile

## Installation
To install and run this project locally, follow these steps:
1. Clone the repository
2. Install dependencies in both server and client directories:
    ```bash
    cd server && npm install
    cd ../client && npm install
    ```
3. Create .env file in server directory with your MongoDB URI:
    ```bash
    MONGODB_URI=your_mongodb_uri
    ```
4. Start the server and client in 2 seperate terminals:
    ```bash
    cd server && node .
    cd client && npm start
    ```

## Contributors
- Yassin Bedier
- Ahmed Khattab
- Ahmed Hatem
- Islam Akram
- Ibrahim Labib

## License
This project is licensed under the MIT License - see the LICENSE file for details.