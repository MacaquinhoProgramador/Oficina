import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async() => {
    mongoose
        .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}`)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error));
};

export default connectDB;