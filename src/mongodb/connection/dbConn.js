import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URL;
const databaseName = process.env.DATABASE_NAME;

let isConnected = false; // Track connection status

async function dbConn() {
    if (isConnected) {
        console.log('MongoDB connection already established');
        return; // Connection already established
    }

    try {
        const dbUrl = `${mongodbUrl}${databaseName}`;
        await mongoose.connect(dbUrl);

        isConnected = true; // Update connection status
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default dbConn;
