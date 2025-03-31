# Test task

## Overview

This project consists of a frontend and a backend, each running as separate applications. Follow the instructions below to set up and start both servers.

## Prerequisites

Before you begin, ensure you have the following installed:
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Environment Variables
Both the frontend and backend may require specific environment variables.
Create a `.env` file in the root of each directory (frontend and backend) and add the following variables:

### Backend Environment Variables
Create a `.env` file in the `backend` directory:
PORT=3000
MEALDB_API_URL=https://www.themealdb.com/api/json/v1/1

### Frontend Environment Variables
Create a .env file in the frontend directory:
VITE_API_URL=http://localhost:3000/api/recipes

## Starting the Backend Server
Navigate to the backend directory:
cd backend

## Install the dependencies:
npm install

## Start the backend server:
npm run dev

# The backend server should now be running on http://localhost:3000.


### Starting the Frontend Server
Open a new terminal window or tab and navigate to the frontend directory:
cd frontend

## Install the dependencies:
npm install

## Start the frontend server:
npm run dev

# The frontend server should now be running on http://localhost:5173.


