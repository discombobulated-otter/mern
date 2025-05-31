import { PlusSquareIcon } from '@chakra-ui/icons'
import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return <Container maxW= {"1140px"} px = {4}>
    <Flex
      h={16} 
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir = {{
        base:coloumn,
        sm: "row",
      }}>
      <Text

        fontSize={{base:"22",sm:"28"}}
        fontWeight={"bold"}
        textTranformation={"uppercase"}
        textAlign={"center"}
        bgGradient = {"linear(to-r,), #7928CA,#FF0080"}
        bgClip={"text"}
      >  
        <Link to={"/"}>Product Store</Link>
      </Text>


      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={20} />
            Create Product
          </Button>
        </Link>
      </HStack>
    </Flex>
  </Container>
}

export default Navbar