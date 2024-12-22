import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	productImg: {
		type: String,
		required: true
	}
}, {
	timestamps: true // this will automatically add createdAt and updatedAt fields
})

const Product = mongoose.model("Product", productSchema);

export default Product;
