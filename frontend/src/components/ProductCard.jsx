import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
import React from 'react'
import { useProductStore } from '../store/product';

function ProductCard({ product }) {
	const textColor = useColorModeValue('gray.600', 'gray.200');
	const bgColor = useColorModeValue('white', 'gray.800')
	const toast = useToast();
	const { deleteProduct } = useProductStore();

	const handleDeleteProduct = async (id) => {
		const { success, message } = await deleteProduct(id);

		toast({
			title: success ? "Berhasil!" : "Gagal",
			description: message,
			status: success ? "success" : "error",
			duration: 2500,
			isClosable: true
		});
	}

	return (
		<Box
			shadow={'lg'}
			rounded={'lg'}
			overflow={'hidden'}
			transition={'all 0.3s'}
			_hover={{
				transform: 'translateY(-8px)',
				shadow: 'xl'
			}}
			bg={bgColor}
		>
			<Image
				src={product.productImg}
				alt={product.name}
				h={48}
				w={'full'}
				objectFit={'cover'}
			/>

			<Box p={4}>
				<Heading as={'h3'} size={'md'} mb={2}>
					{product.name}
				</Heading>

				<Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
					Rp {product.price.toLocaleString('ID-id')}
				</Text>

				<HStack spacing={2}>
					<IconButton icon={<EditIcon />} colorScheme={'blue'} ></IconButton>
					<IconButton icon={<DeleteIcon />} colorScheme={'red'} onClick={() => handleDeleteProduct(product._id)}></IconButton>
				</HStack>
			</Box>
		</Box>
	)
}

export default ProductCard