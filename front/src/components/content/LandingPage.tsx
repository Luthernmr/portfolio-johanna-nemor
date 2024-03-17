import { Box, Image, Center, Text, Heading, Button, Flex } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function LandingPage() {
    return (
        <Box backgroundColor={"white"}  height={"85vh"} maxH={"85vh"} borderRadius="30px 30px 0 0" overflow={'hidden'}>
            <Box position={"absolute"} top="15%" left={"10%"} width={"25%"} height={"80%"}>
                <Flex  justifyContent={"space-evenly"} flexDirection={"column"} h={"100%"} >
                    <Box>
                        <Text ml={5} fontSize={"32px"}>Bonjour, je suis</Text>
                        <Heading fontSize={"80px"}>JOHANNA</Heading>
                        <Text ml={5} fontSize={"40px"} color="#B131FA">Experte en communication & marketing </Text>
                    </Box>
                    <Flex flexDirection={"column"}>

                        <Button backgroundColor={"#B131FA"} color={"white"} rounded={"full"} width={"10em"} mb={5} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}>Télécharger mon  CV</Button>
                        <Button backgroundColor={"#353244"} color={"white"} rounded={"full"} width={"10em"} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}>Découvrir mon portfolio</Button>
                    </Flex>
                    <Center width={"100%"} mt={10}>
                        < ChevronDownIcon boxSize={20}  color={"#B131FA"}  animation="bounce 1.5s infinite"/>
                    </Center>
                </Flex>
            </Box>
            <Box blockSize={"100%"}>
                <Center>

                    <Box backgroundImage="url('/Fond_page_accueil.png')"
                        backgroundSize="60%" // Assurez-vous que l'image de fond couvre toute la 
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                    >
                        <Image  boxSize={'4xl'} marginTop="-4vh" src="/photo_joh_page_accueil.png" />
                    </Box>
                <Box position={"absolute"} w={"17%"} top={"72%"} right={"20%"}>
                    <Image  transform="rotate(-20deg)"  boxSize={"150px"} src='/fleche.png'/>
                    <Text fontSize={"25px"} color={"#B131FA"}>Votre meilleur atout pour une communication fluide et transparente</Text>
                </Box>
                </Center>
            </Box>

        </Box>
    )
}