import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/database/db.js';
import urlShorterRouter from './src/routes/shortUrl.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Body parser middleware

// Connect to MongoDB
connectDB()
    .then(() => {
        console.log('MongoDB Connected');

        app.get('/',(req,res)=>{
            res.send('connected');
        })
        // Routes
        app.use('/api/v1/shorturl', urlShorterRouter);

        // Start the server
        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
    });

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
