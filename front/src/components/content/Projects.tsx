import { Heading, Flex } from '@chakra-ui/react'
import ProjectCards from './ProjectCards'

export default function Projects() {
    return (
        <Flex width={"100%"} h={"100%"} flexDirection={"column"} >
            <Flex alignItems={"center"} justifyContent={"space-around"} mt={"10vh"}>
                <Heading fontFamily={'century-gothic'} textAlign={"center"} size={{ base: "xl", lg: "2xl" }} color={"gray.600"} backgroundColor={"purple.100"} p={2} borderRadius={"25"} >Mes projets</Heading>
            </Flex>
            <ProjectCards />
        </Flex>
    )
} 