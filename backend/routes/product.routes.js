import express from 'express';
import { createProduct, getAllProducts, updateProduct, deleteProduct } from '../controller/product.controller.js';

const route = express.Router();

// route.get("/", async (req, res) => {
// 	res.send("Server is ready");
// });

route.post("/create", createProduct);

route.get("/", getAllProducts);

route.put("/update/:id", updateProduct);

route.delete("/delete/:id", deleteProduct);

export default route;