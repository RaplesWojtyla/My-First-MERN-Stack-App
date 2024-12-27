import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, FormControl, FormLabel, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

function ProductCard({ product }) {
	const textColor = useColorModeValue('gray.600', 'gray.200');
	const bgColor = useColorModeValue('white', 'gray.800')
	const toast = useToast();
	
	const { updateProduct, deleteProduct } = useProductStore();
	const [ updatedProduct, setUpdatedProduct ] = useState(product)

	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialRef = React.useRef(null);
	const finalRef = React.useRef(null);

	const handleDeleteProduct = async (id) => {
		const { success, message } = await deleteProduct(id);

		toast({
			title: success ? "Done!" : "Failed!",
			description: message,
			status: success ? "success" : "error",
			duration: 2500,
			isClosable: true
		});
	}

	const handleUpdateProduct = async (id, updatedProduct) => {
		const { success, message } = await updateProduct(id, updatedProduct);

		toast({
			title: success ? "Success!" : "Failed!",
			description: message,
			status: success ? "success" : "error",
			duration: 2500,
			isClosable: true
		});

		onClose();
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
					<IconButton icon={<EditIcon />} colorScheme={'blue'} onClick={onOpen}></IconButton>
					<IconButton icon={<DeleteIcon />} colorScheme={'red'} onClick={() => handleDeleteProduct(product._id)}></IconButton>

					<Modal
						initialFocusRef={initialRef}
						finalFocusRef={finalRef}
						isOpen={isOpen}
						onClose={onClose}
					>
					<ModalOverlay />

					<ModalContent>
						<ModalHeader>Add Product</ModalHeader>
						<ModalCloseButton />

						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Product Name</FormLabel>
								<Input 
									ref={initialRef}
									value={updatedProduct.name} 
									onChange={(e) => setUpdatedProduct({
										...updatedProduct,
										name: e.target.value
									})}
								/>
							</FormControl>
	
							<FormControl mt={6}>
								<FormLabel>Product Price</FormLabel>
								<Input 
									value={updatedProduct.price} 
									onChange={(e) => setUpdatedProduct({
										...updatedProduct,
										price: e.target.value
									})}
								/>
							</FormControl>
							
							<FormControl mt={6}>
								<FormLabel>Product Image</FormLabel>
								<Input 
									value={updatedProduct.productImg} 
									onChange={(e) => setUpdatedProduct({
										...updatedProduct,
										productImg: e.target.value
									})}
								/>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
							<Button colorScheme='red' onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
					</Modal>
				</HStack>
			</Box>
		</Box>
	)
}

export default ProductCard