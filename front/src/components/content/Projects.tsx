import { Heading, Flex } from '@chakra-ui/react'
import ProjectCards from './ProjectCards'

export default function Projects() {
    return (
        <Flex width={"100%"} h={"100%"} backgroundColor={"#353244"} flexDirection={"column"} >
            <Flex alignItems={"center"} justifyContent={"space-around"} mt={"10vh"}>
            <Heading textAlign={"center"} size={{base: "xl", lg:"3xl"}} color={"#FFFFF8"}>Mes projets</Heading>
            </Flex>
            <ProjectCards />
        </Flex>
    )
} 