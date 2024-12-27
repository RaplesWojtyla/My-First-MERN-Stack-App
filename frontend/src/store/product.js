import { create } from 'zustand';

export const useProductStore = create((set) => ({
	product: [],
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
			product: [
				...state.product,
				data.data
			]
		}));

		return {
			success: true,
			message: "Produk berhasil ditambahkan."
		}
	}
}));
