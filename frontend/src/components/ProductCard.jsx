import { DeleteIcon, DragHandleIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue, useToast } from '@chakra-ui/react'
// import { transform } from 'framer-motion'
import React, { use } from 'react'
import { useProductStore } from '../store/product';

const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.800", "gray.200");
    const bg = useColorModeValue("white", "gray.700");
    const {deleteProduct} = useProductStore();
    const toast = useToast();
    const handleDeleteProduct = async (pid) => {
      const {success, message} = await deleteProduct(pid);
      if (success) {
          toast({
              title: "Product deleted",
              description: message,
              status: "success",
              duration: 3000,
              isClosable: true,
          });
      } else {
          toast({
              title: "Error deleting product",
              description: message,
              status: "error",
              duration: 3000,
              isClosable: true,
          });
      }
    };

  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow= 'hidden'
        transition='all 0.3s'
        _hover ={{transform: "translateY(-5px)",shadow:"xl"}}
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>

        <Box p={4}>
             <Heading as='h3' size='md' mb={2}>
                {product.name}
             </Heading>
             <Text fontWeight={'bold'} fontSize='xl' color={textColor} mb={4}>
                ${product.price}
             </Text>
            <HStack spacing={4}>
              <IconButton icon={<EditIcon />} colorScheme='blue' aria-label='Edit Product' />
              <IconButton icon={<DeleteIcon/>} onClick={() => {handleDeleteProduct(product._id)}} colorScheme='red' aria-label='Delete Product' />
            </HStack>
        </Box>

    </Box>
  )
}

export default ProductCard