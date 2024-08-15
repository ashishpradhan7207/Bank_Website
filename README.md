# Bank Website Project

This is a full-stack bank website project built with HTML, CSS, JavaScript for the frontend, and Node.js, Express.js, and MongoDB for the backend. The website includes user authentication, a home page, services page, about page, contact page, and a user dashboard.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User authentication (register, login, logout)
- User dashboard with personalized information
- Contact form submission
- Service page displaying bank services
- Responsive design

## Project Structure

bank-website/
│
├── /assets
│ ├── banner.jpg # Banner image
│ ├── logo.png # Bank logo image
│ └── styles.css # CSS file for styling
│
├── /scripts
│ └── script.js # JavaScript file for interactivity
│
├── /backend # Backend directory
│ ├── /config
│ │ └── db.js # MongoDB connection setup
│ │
│ ├── /controllers # Logic for handling requests and responses
│ │ ├── authController.js # Controller for authentication
│ │ ├── userController.js # Controller for user-related operations
│ │ ├── contactController.js # Controller for contact form
│ │ └── serviceController.js # Controller for services
│ │
│ ├── /models # Mongoose schemas and models
│ │ ├── User.js # User schema/model
│ │ ├── Contact.js # Contact form schema/model
│ │ └── Service.js # Service schema/model
│ │
│ ├── /routes # Defines application routes
│ │ ├── authRoutes.js # Routes for authentication
│ │ ├── userRoutes.js # Routes for user-related operations
│ │ ├── contactRoutes.js # Routes for contact form submissions
│ │ ├── serviceRoutes.js # Routes for services
│ │ └── index.js # Main route file that combines all routes
│ │
│ ├── /middlewares # Middleware functions
│ │ ├── authMiddleware.js # Middleware for protecting routes
│ │ ├── errorHandler.js # Custom error handling middleware
│ │ └── logger.js # Middleware for logging requests
│ │
│ ├── .env # Environment variables
│ ├── .gitignore # Files and directories to ignore in Git
│ ├── package.json # npm dependencies and scripts
│ ├── server.js # Main entry point of the backend application
│ └── README.md # Project documentation
│
├── index.html # Home Page
├── login.html # Login Page
├── signup.html # Sign-Up Page
└── dashboard.html # Dashboard Page

## Installation

To get started with this project, clone the repository and install the necessary dependencies.

### Clone the Repository

git clone https://github.com/your-username/bank-website.git
cd bank-website
Install Dependencies
Navigate to the backend directory and install the required Node.js packages:

cd backend
npm install
Environment Variables
Create a .env file in the backend directory to store environment variables:

touch .env
Add the following content to the .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret_key with a secret key for JWT.

Running the Project
Run the Backend Server
To start the backend server, navigate to the backend directory and run the following command:

npx nodemon server.js
The server should be running at http://localhost:5000.

Open the Frontend
You can open the HTML files in the root directory (e.g., index.html, login.html) in your web browser to view the frontend.

API Endpoints
Here are the main API endpoints available in this project:

POST /api/auth/register: Register a new user.
POST /api/auth/login: Login a user and return a JWT token.
GET /api/users: Get information about the authenticated user.
POST /api/contact: Submit a contact form.

License

This project is licensed under the MIT License. See the LICENSE file for details.
