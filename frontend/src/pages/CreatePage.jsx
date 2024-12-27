import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const { createProduct } = useProductStore();
	const toast = useToast();

	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		productImg: ""
	});

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);

		toast({
			title: success == true ? "Berhasil!" : "Gagal",
			description: message,
			status: success == true ? "success" : "error",
			duration: 2500,
			isClosable: true,
		});

		if (success) {
			setNewProduct({
				name: "",
				price: "",
				productImg: ""
			});
		}
	}

	return (
		<Container maxW={"container.sm"}>
			<VStack spacing={8}>
				<Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
					Create New Product
				</Heading>

				<Box w={"full"} bg={useColorModeValue("red.900`", "gray.800")} p={6} rounded={"lg"} shadow={"md'"}>

					<VStack spacing={4}>
						<Input
							placeholder='Product Name'
							name='name'
							value={newProduct.name}
							onChange={(e) => setNewProduct({
								...newProduct,
								name: e.target.value
							})}
						/>

						<Input 
							placeholder="Product Price"
							name="price"
							type="number"
							value={newProduct.price}
							onChange={(e) => setNewProduct({
								...newProduct,
								price: e.target.value
							})}
						/>

						<Input
							placeholder="Product Img URL"
							name="productImg"
							value={newProduct.productImg}
							onChange={(e) => setNewProduct({
								...newProduct,
								productImg: e.target.value
							})}
						/>

						<Button colorScheme="blue" onClick={handleAddProduct} w={"full"} >
							Add Product
						</Button>
					</VStack>

				</Box>
			</VStack>
		</Container>
	)
}

export default CreatePage;
