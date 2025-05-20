import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'; // Import the Product model

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the request body

app.post("/api/products", async (req,res)=>{
   const product = req.body; // user will send this data
   if (!product.name || !product.price || !product.image) {
       return res.status(400).json({ success: false, message: "Please provide all required fields" });
   }

   const newProduct = new Product(product)
   try 
   {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
   } catch (error) 
   {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server Error" }); 
   }
});
console.log(process.env.MONGO_URI);

// postman 
app.listen(5000,()=>{
    connectDB();
    console.log("connected to db");
    console.log("server started at http://localhost:5000");
});