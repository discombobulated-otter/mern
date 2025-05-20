import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
export const connectDB = async () => {
    try 
    {
        // const mongoose = require('mongoose');
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } 
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
    catch (error) 
    {
        console.error(`Error: ${error.message}`);
        process.exit(1);     // code 1 means Exit process with failure and 0 means success.
    }
};