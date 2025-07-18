import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoute from './routes/product.route.js';
import router from './routes/product.route.js';
dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the request body

app.use("/api/products", productRoute); // this is the route for products


// this just to check if the server is running or not and changes in the code are being reflected or not
app.listen(process.env.PORT || 5000,()=>{
    const dbConnected = connectDB();
    if (dbConnected) {
        console.log("connected to db");
    }
    console.log(`server started at http://localhost:${process.env.PORT}`);
});
// 56:35
