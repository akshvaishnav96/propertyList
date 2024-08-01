import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;
const DATABASE_NAME = process.env.DATABASE_NAME;

let isConnected = false; // Track connection status

async function dbConn() {
    if (isConnected) {
        console.log('MongoDB connection already established');
        return; // Connection already established
    }

    try {
        const dbUrl = `${MONGODB_URL}/${DATABASE_NAME}`;
        await mongoose.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true; // Update connection status
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default dbConn;
