import { Box, Image, Text, Heading, Flex, HStack, Center, Link } from '@chakra-ui/react'


export default function Contact() {

    return (
        <Flex height={"100vh"} width={"100%"} flexDirection={{ base: "column", lg:"row"}}>
            <Center width={{ base: "100%", lg:"70%"}}   h={{ base: "70%", lg:"100%"}} backgroundColor={"#FFFFF8"} flexDirection={"column"} position={"relative"}>
                <Box  width={{ base:"100%", lg:"50%"}} alignItems={"center"} justifyContent={"center"} mb={{base:"15em", lg: "10em"}} ml={{base:"", lg:"10em"}}  textAlign={{base:'center', lg:'start'}}>
                    <Heading lineHeight={"1.2em"} width={'100%'} size={{ base: "lg", lg: "2xl", xl: "4xl",  }} color={"#B131FA"}>Envie de se rencontrer?</Heading>
                    <Text fontSize={{ base:"lg" , lg:"4xl"}}>Prenons le temps de discuter autour d'un café.</Text>
                </Box>
                <Image position={"absolute"} bottom={"0"} left={"0"} boxSize='70%' objectFit={"contain"} objectPosition={"left bottom"} src='/Photo_Joh_footer.png' />
            </Center>
            <Center flexDirection={"column"} width={{ base: "100%", lg:"40%"}} h={{ base: "35%", lg:"100%"}} backgroundColor={"#353244"} p={5}>
                <Text color={"white"} fontSize={"4xl"} >Contactez-moi !</Text>
                <HStack spacing={10} mt={10}>
                    <Link href="https://www.linkedin.com/in/johanna-revert-nemor-consulting-social-media-lyon-conduite-du-changement-communication-interne/" target="_blank" rel="noopener noreferrer">
                        <Image boxSize={"100px"} color={"red"} src='/linkedin.png' alt="LinkedIn" _hover={{
                            opacity: "0.8"
                        }} />
                    </Link>
                    <Link href="mailto:jrevert06@gmail.com">
                        <Image boxSize={"120px"} src='/mail.png' alt="Mail" _hover={{
                            opacity: "0.8"
                        }} />
                    </Link>
                </HStack>
            </Center>
        </Flex>
    )
} 