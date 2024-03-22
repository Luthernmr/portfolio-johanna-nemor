import { Box, Image, Center, Text, Heading, Button, Flex, Link } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'


export default function LandingPage() {
    return (
        <Flex backgroundColor={"white"} height={"85vh"} maxH={"85vh"} borderRadius="30px 30px 0 0" overflow={'hidden'} pl={8} pt={8} pr={8}>
            <Box position={"relative"} width={"30%"} height={"100%"} >
                <Flex justifyContent={"space-evenly"} flexDirection={"column"} h={"100%"} >
                    <Box>
                        <Text fontSize={"32px"}>Bonjour, je suis</Text>
                        <Heading fontSize={"80px"}>JOHANNA</Heading>
                        <Text fontSize={"40px"} color="#B131FA">Experte en communication & marketing </Text>
                    </Box>
                    <Flex flexDirection={"column"}>

                        <Button backgroundColor={"#B131FA"} color={"white"} rounded={"full"} width={"10em"} mb={5} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}>Télécharger mon  CV</Button>
                        <Button backgroundColor={"#353244"} color={"white"} rounded={"full"} width={"10em"} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}>Découvrir mon portfolio</Button>
                    </Flex>
                </Flex>
                    <Center width={"100%"} position={"absolute"} bottom={0} left={"-25%"} zIndex={5}>
                        <Link href="#expertises" >
                            < ChevronDownIcon boxSize={20} color={"#B131FA"} animation="bounce 1.5s infinite" />
                        </Link>
                    </Center>
            </Box>
            <Box blockSize={"100%"}>
                    <Image  src='/fond-pa.png' boxSize={"100%"} objectFit="contain" objectPosition="bottom"/>
            </Box>

        </Flex>
    )
}