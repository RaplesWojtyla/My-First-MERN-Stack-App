import Product from '../models/product.model.js';
import mongoose from 'mongoose';


export const createProduct = async (req, res) => {
	const productData = req.body;

	if (!productData.name || !productData.price || !productData.productImg) {
		return res.send(400).send({
			success: false,
			message: "Please input all fields"
		})
	}

	const newProduct = new Product(productData);

	try {
		await newProduct.save();
		
		res.status(201).send({
			success: true,
			data: newProduct
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: "Internal server error."
		});
	}
}

export const getAllProducts = async (req, res) => {
	try {
		const products = await Product.find({});

		res.status(200).send({
			success: true,
			data: products
		});
	} catch (error) {
		console.log(`Error saat mengambil data produk: ${error.message}`);

		res.status(500).send({
			success: false,
			message: "Internal server error"
		});
	}
}

export const updateProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send({
			success: false,
			message: "Invalid Product ID"
		});
	}

	const productReqData = req.body;

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, productReqData, {new: true});

		res.status(200).send({
			success: true,
			data: updatedProduct
		});
	} catch (error) {
		console.log(`Error: ${error.message}`);
		res.status(500).send({
			success: false,
			message: "Internal server error."
		});
	}
}

export const deleteProduct = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send({
			success: false,
			message: "Invalid Product ID"
		});
	}

	try {
		await Product.findByIdAndDelete(id);

		res.status(200).send({
			success: true,
			message: "Product deleted successfully"
		});
	} catch {
		res.status(500).send({
			success: false,
			message: "Internal server error"
		});
	}
}