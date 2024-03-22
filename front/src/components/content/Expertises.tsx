import { Box, Image, Center, Text, Heading, Flex, VStack } from '@chakra-ui/react'

export default function Expertises() {
    const expertises = [
        { img: "/communication_interne.png", title: "Communication interne", skills: "Clarifier -  Engager - Mesurer" },
        { img: "/stratégie_de_communication.png", title: "Stratégie de communication", skills: "Adapter - Innover - Agir" },
        { img: "/creation_de_contenu.png", title: "Création de contenu", skills: "Rédiger - Concevoir - Optimiser" },
        { img: "/conduite_du_changement.png", title: "Conduite du changement", skills: "Accompagner - Planifier - Communiquer" }
    ]
    return (
        <Flex height={"100vh"} backgroundColor={"#353244"} width={"100%"} flexDirection={"row"} id='expertises'>
            <Center flexDirection={"row"} width={"50%"}>
                <VStack w={"100%"} spacing={5}>
                    {expertises.map((elem) => (
                        <Flex backgroundColor={"#FAF8FA"} borderRadius={"15px"} h={"20%"} minW={"80%"} maxW={"80%"} flexDirection={"row"} alignContent={'center'} p={4}
                            transform="translateX(0)"
                            transition="all 0.4s ease"
                            _hover={{
                                transform: "translateX(100px)"
                            }}
                        >
                            <Box height={'100%'} >
                                <Image boxSize={'120px'} objectFit="cover" filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));"} src={elem.img} />
                            </Box>
                            <Box width={"70%"} alignContent={'center'} ml={8}>
                                <Text fontSize={'40px'} fontWeight={'bold'} color={'#B131FA'}>{elem.title}</Text>
                                <Text fontSize={'32px'} color={"#353244"}>{elem.skills}</Text>
                            </Box>
                        </Flex>
                    ))}
                </VStack>
            </Center>
            <Box width={"50%"} h={'100%'} overflow={'hidden'}>
                <Flex textAlign={"center"} flexDirection={'column'} alignItems="center" justifyContent={"space-between"} height={"100%"}>
                    <Heading mt="10vh" size={"4xl"} color="white">MES EXPERTISES</Heading>
                    <Image height={"100%"} boxSize={"70%"} objectFit="fill" src='photo_joh_expertises.png' />
                </Flex >
            </Box>
        </Flex>
    )
}