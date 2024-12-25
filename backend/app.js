import express from 'express';
import dotenv from 'dotenv';
import { connDb } from './config/db.js';
import productRoute from './routes/product.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // Biar bisa nerima format JSON dari request

app.use("/api/products", productRoute);

app.listen(PORT, async () => {
	await connDb();
	console.log(`Server started at http://localhost:${PORT}`);
});