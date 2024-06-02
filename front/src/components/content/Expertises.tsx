import { Box, Image, Center, Text, Heading, Flex, VStack } from '@chakra-ui/react'

export default function Expertises() {
    const expertises = [
        { img: "/communication_interne.png", title: "Communication interne", skills: "Clarifier -  Engager - Mesurer" },
        { img: "/stratégie_de_communication.png", title: "Stratégie de communication", skills: "Adapter - Innover - Agir" },
        { img: "/creation_de_contenu.png", title: "Création de contenu", skills: "Rédiger - Concevoir - Optimiser" },
        { img: "/conduite_du_changement.png", title: "Conduite du changement", skills: "Accompagner - Planifier - Communiquer" }
    ]
    return (
        <Flex height={"100vh"} backgroundColor={"#353244"} width={"100vw"} maxW={"100vw"} flexDirection={{ base: "column-reverse", lg: "row" }} id='expertises' >
            <Center flexDirection={"row"} width={{ base: "100%", xl: "50%" }} h={"100%"}>
                <VStack w={"100%"} spacing={5}>
                    {expertises.map((elem, index) => (
                        <Flex backgroundColor={"#FAF8FA"} borderRadius={"15px"} h={"20%"} minW={"80%"} maxW={"80%"} flexDirection={"row"} alignContent={'center'} p={2}
                            transform="translateX(0)"
                            transition="all 0.4s ease"
                            key={index}
                        >
                            <Box height={'100%'} >
                                <Image boxSize={{ base: "70px", xl: '120px' }} objectFit="cover" filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"} src={elem.img} />
                            </Box>
                            <Box width={"100%"} alignContent={'center'} ml={8}>
                                <Text fontSize={{ base: "md", lg: '2xl' }} fontWeight={'bold'} color={'#B131FA'}>{elem.title}</Text>
                                <Text  fontSize={{ base: "sm", xl: 'xl' }} color={"#353244"}>{elem.skills}</Text>
                            </Box>
                        </Flex>
                    ))}
                </VStack>
            </Center>
            <Flex textAlign={"center"} flexDirection={'column'} alignItems="center" justifyContent={"space-between"} height={{ base: "20%", lg: "100%" }}>
                <Heading mt="10vh" size={{base: "xl", lg:"2xl"}}   fontFamily={'century-gothic'} color="white">Mes expertises</Heading>
                <Image display={{ base: "none", lg: "flex" }} height={"100%"} boxSize={"70%"} objectFit="cover" src='photo_joh_expertises.png' />
            </Flex >
        </Flex>
    )
}