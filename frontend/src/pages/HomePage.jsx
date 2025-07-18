import React, { use } from 'react'
import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'
const HomePage = () => {
  const {fetchProducts,products} = useProductStore()
  useEffect(() => {
    fetchProducts();
  },[ fetchProducts]);

  console.log("products",products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text 
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products 🚀 
        </Text>

      <SimpleGrid 
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={10}
        width={"full"}
      >
        {(products || []).map((product)=> (
          <ProductCard key = {product._id} product={product} />
        ))}
      </SimpleGrid>
      {products.length === 0 && (
      <Text 
          fontSize={"xl"}
          textAlign={"center"}
          color={"gray.600"}
          fontWeight={"bold"}>
            No Product found 😢 {" "}
            <Link to={"/create"}>
              <Text as="span" color="blue.500" textDecoration="underline">
              Create a new product
              </Text>
            </Link>
          </Text>)}
      </VStack>
    </Container>
  )
}

export default HomePage