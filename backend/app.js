import express from 'express';
import dotenv from 'dotenv';
import { connDb } from './config/db.js';
import productRoute from './routes/product.routes.js';

dotenv.config();

const app = express();

app.use(express.json()); // Biar bisa nerima format JSON dari request

app.use("/api/products", productRoute);

app.listen(5000, async () => {
	await connDb();
	console.log('Server started at http://localhost:5000');
});