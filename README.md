# Post-Comments Service

A simple web application for creating posts and commenting on them, built using Node.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Why MongoDB](#whymongodb)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Introduction

The Post-Comments Service is a web application where users can create posts and add comments to existing posts. It provides a simple interface for managing posts and their associated comments.

## Screenshots

![image](https://github.com/DhruvDua1105/PostCommentService/assets/86777191/7ba124a5-ca10-419b-bc79-31d1b96a2539)
![image](https://github.com/DhruvDua1105/PostCommentService/assets/86777191/c8f3c304-3eb6-4d7b-bf0a-1c8c8484332b)

## Features

- User can create a new post with a title and description.
- User can view a list of posts.
- User can view details of a specific post, including its comments.
- User can add comments to a post.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing posts and comments.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **Bootstrap**: Frontend framework for styling the UI.
- **EJS**: Embedded JavaScript templates for rendering views.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **nodemon**: Module for automatically rerunning the server when any change gets detected

## Why MongoDB is used?

- To decide on an appropriate way to store posts and comments, MongoDB seemed an excellent choice due to its flexibility, scalability, and document-oriented data model.
- MongoDB is a NoSQL database that stores data in JSON-like documents, making it well-suited for storing nested data structures such as posts and comments.

## Getting Started

### Prerequisites

- Node.js installed on your local machine.
- MongoDB installed and running locally or accessible remotely.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DhruvDua1105/PostCommentService.git

2. Install the packages
   
   ```bash
   npm install

3. Edit your .env file
   
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/{your_DB_name}

## Running the application

### Start the server

   ```bash
   npm run dev
   ```

## API Endpoints

- **GET `/posts`**: Retrieve all posts.
- **GET `/posts/:postId`**: Retrieve a specific post by ID.
- **POST `/posts`**: Create a new post.
- **POST `/comments/:postId`**: Add a comment to a post.
- **GET `/comments/:postId`**: Retrieve all the comments to a post.

Detailed API documentation can be found in this link:
https://documenter.getpostman.com/view/36282717/2sA3XPC2dJ

## Deployment

To deploy this application to a production environment, consider:

- Using a cloud MongoDB service (e.g., MongoDB Atlas) for remote database hosting.
- Deploying the Node.js application to a cloud platform (e.g., Heroku, AWS, Azure).

