import { create } from 'zustand';

export const useProductStore = create((set) => ({
	products: [],
	setProduct: (product) => set({ product }),
	createProduct: async (newProduct) => {
		if (!newProduct.name || !newProduct.price || !newProduct.productImg) {
			return {
				success: false,
				message: "Harap isi semua input."
			}
		}

		const res = await fetch('/api/products/create', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newProduct)
		});

		const data = await res.json();

		set((state) => ({
			products: [
				...state.products,
				data.data
			]
		}));

		return {
			success: data.success,
			message: data.message || "Produk berhasil ditambahkan."
		}
	},
	getAllProducts: async () => {
		const res = await fetch('/api/products/', {
			method: "GET"
		});

		const data = await res.json();
		set({ products: data.data });
	},
	deleteProduct: async (id) => {
		const res = await fetch(`/api/products/delete/${id}`, {
			method: "DELETE",
		});

		const data = await res.json();

		if (data.success) {
			// live update after delete
			set(state => ({
				products: state.products.filter(product => product._id !== id)
			}));
		}

		return {
			success: data.success,
			message: data.message
		};
	}
}));
