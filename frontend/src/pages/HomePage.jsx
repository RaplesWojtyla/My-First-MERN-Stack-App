import { Container, HStack, VStack, Text, SimpleGrid, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { getAllProducts, products } = useProductStore();

	useEffect(() => {
		getAllProducts();
	}, [getAllProducts]);

	return (
		<Container maxW={"container.xl"} py={12}>
			<VStack spacing={8}>
				<Text
					fontSize={30}
					fontWeight={"bold"}
					textTransform={"uppercase"}
					textAlign={"center"}
					bgGradient={"linear(to-r, cyan.400, blue.500)"}
					bgClip={"text"}
				>
					Current Product
				</Text>

				{products.length == 0 && (
					<Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
						No Product Found😢{" "}
						<Link to={'/create'}>
							<Text as={'span'} color={'blue.500'} _hover={{ textDecoration: 'underline' }}>
								Create a Product
							</Text>
						</Link>
					</Text>
				)}

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3
					}}
					spacing={10}
					w={'full'}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>
			</VStack>
		</Container>
	)
}

export default HomePage;
