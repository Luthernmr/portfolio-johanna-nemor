import { Heading,Text, HStack, Image, Link } from '@chakra-ui/react'
import React from 'react'
export default function Header() {
const linkMap = [
    
]
    return (
        <HStack maxH={"20vh"} justifyContent={"space-between"} width={"100%"} border={"2px solid blue"}>
            <Image boxSize={'70px'} src='/Logo_jn.png' />
            <HStack>
                <Text>Test</Text>
                <Link sx={{ textDecoration: "underline", textDecorationColor: "red", textDecorationThickness: "2px", textUnderlineOffset: "2px" }} display={{ base: "none", md: 'flex' }} href={"#services"}>ACCUEUIL</Link>
                <Link display={{ base: "none", md: 'flex' }} href={"#about"}>À PROPOS</Link>
                <Link display={{ base: "none", md: 'flex' }} href={"https://www.linkedin.com/in/luthernmr/"} isExternal>CONTACT</Link>
            </HStack>
        </HStack>
    )
}