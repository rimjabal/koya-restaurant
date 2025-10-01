# Development Instructions

## Setting Up the Project

After cloning the repository, you'll need to install the dependencies and set up both the frontend and backend:

1. Install server dependencies:
   `
   cd server
   npm install
   `

2. Install client dependencies:
   `
   cd ../client
   npm install
   `

## Placeholder Images

Since this is a template project, you'll need to add your own images to the following paths:

- /client/public/images/hero-bg.jpg - Hero section background
- /client/public/images/about-img.jpg - About section image
- /client/public/images/dish1.jpg, dish2.jpg, dish3.jpg - Featured menu item images
- /client/public/images/cta-bg.jpg - Call-to-action section background

You can use placeholder images from sites like [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/) for development purposes.

## Database Setup

1. Make sure you have MongoDB installed locally or use MongoDB Atlas for a cloud-based solution.
2. Update the .env file in the server folder with your MongoDB connection string.

## Running the Application

### Development Mode

1. Start the backend server:
   `
   cd server
   npm run dev
   `

2. In a separate terminal, start the frontend:
   `
   cd client
   npm start
   `

3. Access the application at http://localhost:3000

### Production Mode

1. Build the frontend:
   `
   cd client
   npm run build
   `

2. Start the production server:
   `
   cd ../server
   npm start
   `

## Customizing the Restaurant Theme

To customize the restaurant theme, you can modify the following files:

- /client/src/styles/theme.js - Color scheme and design tokens
- /client/src/styles/GlobalStyle.js - Global styles
- /client/src/styles/index.css - Additional CSS utilities
