import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { writeFile, readFile } from 'fs/promises';

// remember to start with nodemon --ignore db.json server.js

// Point to .env file
dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json()); // parse JSON bodies

app.get('/', async (req, res) => {
    res.send('Hello from the backend');
});

  


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});