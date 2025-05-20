import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();

// to fetch all products i am using get method
router.get("/", getProducts);
// to post a product i am using post method and it is first calling the product's stats from product.modle.js file's instance
router.post("/", createProduct );


router.put("/:id",updateProduct );
// following code is to delete a product using it's id
router.delete("/:id", deleteProduct);



export default router;