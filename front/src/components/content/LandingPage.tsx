import { Box, Image, Center, Text, Heading, Button, Flex, Link } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {useNavigate} from 'react-router-dom';


export default function LandingPage() {
    const onButtonClick = () => {
        const pdfUrl = "/CV_NEMOR_Johanna.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "/CV_NEMOR_Johanna.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/portfolio');
    return (
        <Flex backgroundColor={"#FFFFF8"} height={"85vh"} maxH={"85vh"} borderRadius="30px 30px 0 0" overflow={'hidden'} pl={8} pt={8} pr={8} flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-around"} >
            <Box position={"relative"} w={{ base: "100%", lg: "40%" }} height={"100%"}  mb={{base:"2", lg:"0"}}>
                <Flex justifyContent={"space-evenly"} flexDirection={"column"} h={"100%"} >
                    <Flex flexDirection={"column"} lineHeight={"1"}>
                        <Text fontSize={{base:"2xl",lg:"4xl"}}>Bonjour, je suis</Text>
                        <Heading fontSize={{ base: "2em", lg: "4em" }}>JOHANNA</Heading>
                        <Text fontSize={{ base: "2xl", lg:"4xl" }} color="#B131FA">Experte en communication & marketing </Text>
                    </Flex>
                    <Flex flexDirection={"column"} display={{ base: 'none', lg: "flex" }}>
                        <Button backgroundColor={"#B131FA"} color={"white"} rounded={"full"} width={"15em"} mb={5} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"} onClick={onButtonClick} >Télécharger mon  CV</Button>
                        <Button backgroundColor={"#353244"} color={"white"} rounded={"full"} width={"15em"} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"} onClick={handleOnClick}>Découvrir mon portfolio</Button>
                    </Flex>
                </Flex>
                <Center width={"100%"} position={"absolute"} bottom={0} left={"-25%"} zIndex={5} display={{ base: 'none', lg: "flex" }}>
                    <Link href="#expertises" >
                        < ChevronDownIcon boxSize={20} color={"#B131FA"} animation="bounce 1.5s infinite" />
                    </Link>
                </Center>
            </Box>
            <Box height={"100%"} display="flex" alignItems="flex-end" mb={{base:"5", lg:"0"}}>
                <Image display={{ base: 'flex', lg: "none" }} src='/JOH_mobile.png' objectFit="contain" />
                <Image display={{ base: 'none', lg: "flex" }} src='/photo_joh_page_accueil.png' objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"} display={{ base: 'flex', lg: "none" }} width={"100%"} alignItems={"center"} mb={{base:"5", lg:"0"}}>
                <Button backgroundColor={"#B131FA"} color={"white"} rounded={"full"} width={"10em"} mb={5} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}  onClick={onButtonClick} >Télécharger mon  CV</Button>
                <Button backgroundColor={"#353244"} onClick={handleOnClick} color={"white"} rounded={"full"} width={"10em"} boxShadow="0px 2px 6px rgba(0, 0, 0, 0.5)" fontSize={"xl"}>Découvrir mon portfolio</Button>
            </Flex>
        </Flex>
    )
}