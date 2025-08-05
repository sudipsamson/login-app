sudipsamson
IZlGH5vHAezXLuzg

# Initialize Backend:

# Navigate to ls-app/backend in your terminal:
- cd ls-app/backend
- npm init -y

# Install dependencies:
- npm install express mongoose dotenv bcryptjs jsonwebtoken cors

# Dependencies Explained:

- express: Web framework for building APIs.
- mongoose: MongoDB object modeling for Node.js, simplifying database interactions.
- dotenv: Loads environment variables from .env for secure configuration.
- bcryptjs: Hashes passwords for secure storage.
- jsonwebtoken: Generates JWTs for user authentication.
- cors: Allows your React frontend to make requests to the backend.

# Set Up Environment Variables:

# Create backend/src/.env:
- MONGO_URI=mongodb+srv://sudip:mySecurePass123@cluster0.mongodb.net/lsDB?retryWrites=true&w=majority
- PORT=5000
- JWT_SECRET=mySecretKey123

# Explanation:

- MONGO_URI: Your Atlas connection string.
- PORT: Port for the Express server (e.g., 5000).
- JWT_SECRET: Secret key for signing JWTs (replace with a random, secure string in production).

