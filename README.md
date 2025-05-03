# Miniblog - Full Stack Blog Application

## Description

Miniblog is a simple blog application built with a **React.js** frontend and a **Node.js/Express** backend. The application allows users to register, log in, create posts, view posts, and delete posts. This project uses JWT authentication for secure login sessions and MongoDB for storing data.

### Key Features:
- **User Authentication**: Login and registration with JWT-based authentication.
- **CRUD Operations**: Create, Read, and Delete blog posts.
- **Responsive Design**: The application is mobile-friendly, optimized for all screen sizes.
- **Modern Tech Stack**: Built using React.js, Tailwind CSS, Node.js, and MongoDB.

---

## Table of Contents
- [Frontend](#frontend)
- [Backend](#backend)
- [Installation](#installation)
- [Usage](#usage)


---

## Frontend

### Technologies Used:
- **React.js** - JavaScript library for building user interfaces.
- **React Router** - For routing between pages.
- **Axios** - For making HTTP requests to the backend.
- **Tailwind CSS** - For utility-first CSS styling.
- **Vite** - Fast development server and build tool.

### Features:
- **Login Page**: Users can log in using their email and password.
- **Create Post Page**: After logging in, users can create new posts.
- **Post List**: A page to view a list of all blog posts.
- **Post Detail**: A page to view individual blog posts.
- **Delete Post**: Users can delete their own posts.

### Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Miniblog.git
   cd Miniblog
   
1.cd Frontend
2.cd miniblog
3.npm install
4.npm run dev
the frontend will be accessible at http://localhost:5173

Components:
Login: Handles user authentication.

CreatePost: Allows authenticated users to create a new blog post.

PostList: Displays all available blog posts.

PostDetail: Shows the details of a selected post.

Navbar: A navigation bar that links to different pages.

Backend
Technologies Used:
Node.js - JavaScript runtime for backend services.

Express.js - Web application framework for Node.js.

MongoDB - NoSQL database for storing user and post data.

Mongoose - ODM (Object Data Modeling) library for MongoDB.

JWT - JSON Web Tokens for secure authentication.

dotenv - For managing environment variables.

Features:
User Authentication: JWT tokens are used to authenticate users and protect routes.

Post Management: Users can create, read, and delete their blog posts.

Error Handling: Consistent error handling for API requests.


Setup:
1.cd Backend
2.npm install
3.npm start


Usage
Once both the backend and frontend servers are running:

Frontend will be accessible at http://localhost:5173 for creating and viewing blog posts.

Backend will be running at http://localhost:5000 to handle API requests for authentication and posts.

Features for the User:

Login: Users can log in by entering their email and password.

Create Post: After logging in, users can create new posts, which are stored in the backend database.

View Posts: All posts are displayed in the app, and users can view details of any post.

Delete Post: Authenticated users can delete their own posts.
