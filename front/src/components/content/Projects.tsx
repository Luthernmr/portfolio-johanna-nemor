import { Heading, Flex } from '@chakra-ui/react'
import ProjectCards from './ProjectCards'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

export default function Projects() {
    return (
        <Flex width={"100%"} h={"100%"} backgroundColor={"#353244"} flexDirection={"column"} >
            <Flex alignItems={"center"} justifyContent={"space-around"} mt={"10vh"}>
            <Heading textAlign={"center"} size={{base: "xl", lg:"3xl"}} color={"#FFFFF8"}>MES PROJETS</Heading>
                <ChakraLink as={ReactRouterLink} display={{base: "none", lg:"flex"}}  to={"/portfolio"} fontSize={"4xl"} textDecoration={"underline"} color="white" >Explorer mon portfolio</ChakraLink>
            </Flex>
            <ProjectCards />
        </Flex>
    )
} 