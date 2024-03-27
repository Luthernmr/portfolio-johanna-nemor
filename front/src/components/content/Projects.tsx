import { Heading, Flex } from '@chakra-ui/react'
import ProjectCards from './ProjectCards'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

export default function Projects() {
    return (
        <Flex width={"100%"} h={"100%"} backgroundColor={"#B131FA"} flexDirection={"column"} >
            <Flex alignItems={"center"} justifyContent={"space-around"} mt={"5%"}>
                <Heading textDecoration={"underline"} fontWeight={"light"} textDecorationThickness={"1px"} color={"white"} >MES PROJETS</Heading>
                <ChakraLink as={ReactRouterLink} to={"/portfolio"} fontSize={"4xl"} textDecoration={"underline"} color="white" href='#portfolio'>Explorer mon portfolio</ChakraLink>
            </Flex>
            <ProjectCards />
        </Flex>
    )
} 