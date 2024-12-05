# express-routing

# Express Routing Assignment

## Project Overview

This project demonstrates setting up an Express.js server with the following objectives:
- Organizing routes using `Express.Router`.
- Handling route parameters.
- Creating a nested route structure.
- Utilizing sample data for dynamic responses.

---

## Features

- **Root Endpoint**:
  - `GET /` - Responds with "Hello Wrld!".
  
- **About Endpoint**:
  - `GET /about` - Responds with "About Us".

- **Dynamic User Route**:
  - `GET /user/:id` - Responds with the provided user ID (e.g., "User ID: 123").

- **Nested Routes for Users**:
  - `GET /users` - Responds with "List of all users".
  - `GET /users/:id` - Responds with the provided user ID.
  - `GET /users/hello` - Responds with "Hello users".

- **POST Endpoint for User Creation**:
  - `POST /users` - Adds a new user to the in-memory user list.

---
