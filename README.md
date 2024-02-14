Setup

Prerequisites
Node.js installed on your machine
MongoDB installed and running locally or accessible remotely

Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your_username/BooksAndAuthors.git
Navigate to the project directory:
bash
Copy code
cd BooksAndAuthors
Install dependencies:
Copy code
npm install

Configuration
Rename the .env.example file to .env.
Modify the .env file and provide your MongoDB connection URI.
Configure any other settings in the .env file as necessary.
Starting the Server

Run the following command to start the server:
sql
Copy code
npm start

Usage
Authentication
This API uses OAuth for authentication via Passport middleware. You'll need to obtain credentials from your OAuth provider and configure them in the .env file. Once configured, users can authenticate with supported OAuth providers.

Endpoints
GET /books: Retrieve a list of all books.
GET /books/:id: Retrieve details of a specific book by ID.
POST /books: Create a new book.
PUT /books/:id: Update details of a specific book by ID.
DELETE /books/:id: Delete a specific book by ID.
GET /authors: Retrieve a list of all authors.
GET /authors/:id: Retrieve details of a specific author by ID.
POST /authors: Create a new author.
PUT /authors/:id: Update details of a specific author by ID.
DELETE /authors/:id: Delete a specific author by ID.

Middleware
CORS: Cross-Origin Resource Sharing is enabled to allow requests from different origins.
Session Management
Express-Session: Session management is handled using the Express-Session middleware.
Database
MongoDB: The MongoDB database is used to store books and authors information.
Documentation
Swagger: API documentation is available through Swagger. Access the Swagger UI by navigating to http://localhost:PORT/api-docs after starting the server.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.
