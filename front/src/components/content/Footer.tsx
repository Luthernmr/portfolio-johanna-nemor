import { Box, Image, Text, Heading, Flex, HStack, Center, Link } from '@chakra-ui/react'

export default function Footer() {

    return (
        <Flex height={ "40vh"} width={"100%"} flexDirection={{ base: "column", lg:"row"}} backgroundColor={"#1a1824"} p={{base :"5", xl:"0"}}>
            <Center width={{ base: "100%", lg:"70%"}}   h={{ base: "100%", lg:"100%"}}  flexDirection={"column"} position={"relative"}>
                <Box  width={{ base:"100%", lg:"50%"}}  textAlign={{base:'center', lg:'start'}}  ml={{base:"", lg:"10em"}}>
                    <Heading lineHeight={"1.2em"} width={'100%'} size={{ base: "md", lg: "xl", xl: "xl",  }} color={"#B131FA"}>Envie de se rencontrer?</Heading>
                    <Text fontSize={{ base:"sm" , lg:"lg"}} color={"white"}>Prenons le temps de discuter autour d'un café.</Text>
                </Box>
                <Image display={{base : "none", xl: "flex"}} position={"absolute"} bottom={"0"} left={"0"} boxSize='100%' objectFit={"contain"} objectPosition={"left bottom"} src='/Photo_Joh_footer.png' />
            </Center>
            <Center flexDirection={"column"} width={{ base: "100%", lg:"40%"}} h={{ base: "100%"}} >
                <Text color={"white"} fontSize={{base:"lg", xl:"xl"}} >Contactez-moi !</Text>
                <HStack spacing={5} mt={5}>
                    <Link href="https://www.linkedin.com/in/johanna-revert-nemor-consulting-social-media-lyon-conduite-du-changement-communication-interne/" target="_blank" rel="noopener noreferrer">
                        <Image boxSize={"50px"} color={"red"} src='/linkedin.png' alt="LinkedIn" _hover={{
                            opacity: "0.8"
                        }} />
                    </Link>
                    <Link href="mailto:jrevert06@gmail.com">
                        <Image boxSize={"60px"} src='/mail.png' alt="Mail" _hover={{
                            opacity: "0.8"
                        }} />
                    </Link>
                </HStack>
            </Center>
        </Flex>
    )
} 