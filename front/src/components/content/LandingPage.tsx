import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react'
import PortfolioButton from './Buttons/PortfolioButton';
import DownloadCvButton from './Buttons/DownloadCvButton';

function MobileView (){
    return (
        <>
            <Box height={"100%"} display="flex" alignItems="flex-end" mb={{base:"5", lg:"0"}}>
                <Image display={{ base: 'flex', lg: "none" }} src='/JOH_mobile.png' objectFit="contain" />
                <Image display={{ base: 'none', lg: "flex" }} src='/photo_joh_page_accueil.png' objectFit="contain" />
            </Box>
            <Flex flexDirection={"column"} display={{ base: 'flex', lg: "none" }} width={"100%"} alignItems={"center"} mb={5}>
                <DownloadCvButton />
                <PortfolioButton />
            </Flex>
    </>
    )
}

export default function LandingPage() {
    return (
        <Flex backgroundColor={"#FFFFF8"} height={"85vh"} maxH={"85vh"} borderRadius="30px 30px 0 0" overflow={'hidden'} pl={8} pt={8} pr={8} flexDirection={{ base: "column", lg: "row" }} justifyContent={"space-around"} >
            <Box position={"relative"} w={{ base: "100%", lg: "40%" }} height={"100%"}  mb={{base:"2", lg:"0"}}>
                <Flex justifyContent={"space-evenly"} flexDirection={"column"} h={"100%"} >
                    <Flex flexDirection={"column"} lineHeight={"1"}>
                        <Text fontSize={{base:"l",lg:"2xl"}}>Bonjour, je suis</Text>
                        <Heading  fontFamily={'century-gothic'} fontSize={{ base: "2em", lg: "4em" }} mt={-2} mb={10}>JOHANNA</Heading>
                        <Text fontSize={{ base: "lg", lg:"2xl" }} color="#B131FA">Experte en communication & marketing</Text>
                    </Flex>
                    <Flex flexDirection={"column"} display={{ base: 'none', lg: "flex" }}>
                        <DownloadCvButton />
                        <PortfolioButton />
                    </Flex>
                </Flex>
            </Box>
            <MobileView />
        </Flex>
    )
}