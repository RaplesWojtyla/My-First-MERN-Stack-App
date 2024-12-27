import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connDb } from './config/db.js';
import productRoute from './routes/product.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json()); // Biar bisa nerima format JSON dari request

app.use("/api/products", productRoute);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, '/frontend/dist')));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, async () => {
	await connDb();
	console.log(`Server started at http://localhost:${PORT}`);
});