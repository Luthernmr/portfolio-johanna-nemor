import { Box, Image, Center, Text, Heading, Flex } from '@chakra-ui/react'

export default function Experiences() {
    return (
        <Flex backgroundColor="#FAF8FA" height={"100vh"} maxH="100vh" width={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
            <Center height={"20%"}>
                <Heading textAlign={"center"} size={"3xl"}>MES EXPERIENCES</Heading>
            </Center>
            <Flex width="100%" justifyContent={{ base: "center", lg: "space-between" }} alignItems={{ base: "center", lg: "start" }} alignContent={"center"} border={"2px solid green"} >
                <Flex flexDirection={'column'} width={"100%"} alignItems={"end"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "none", lg: "flex" }}>
                    <Flex position={"relative"} right={"5%"}>
                        <Image boxSize={"70px"} src='/SNCF_Voyageurs.png' />
                        <Box>
                            <Flex textAlign={"end"} flexDirection={"row"} fontSize={"32px"}>
                                <Text color={"#B131FA"}>SNCF VOYAGEURS </Text><Text>- LYON</Text>
                            </Flex>
                            <Text color={"#353244"} fontSize={"20"}>Sept 2022 - Aujourd’hui</Text>
                        </Box>
                    </Flex>
                    <Flex position={"relative"} right={"-15%"}>
                        <Image boxSize={"70px"} src='/Mon_cabas_vert.png' />
                        <Box>
                            <Flex textAlign={"end"} flexDirection={"row"} fontSize={"32px"}>
                                <Text color={"#B131FA"}>MON CABAS VERT </Text><Text>- LYON</Text>
                            </Flex>
                            <Text color={"#353244"} fontSize={"20"}>Sept 2021 - Sept 2022</Text>
                        </Box>
                    </Flex>
                    <Flex position={"relative"} right={"5%"}>
                        <Image boxSize={"70px"} src='/Direct_market.png' />
                        <Box>
                            <Flex textAlign={"end"} flexDirection={"row"} fontSize={"32px"}>
                                <Text color={"#B131FA"}>DIRECT MARKET </Text><Text>- STRASBOURG</Text>
                            </Flex>
                            <Text color={"#353244"} fontSize={"20"}>Avr 2021 - Juin 2021</Text>
                        </Box>
                    </Flex>
                </Flex>


                <Flex flexDirection={'column'} width={"100%"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "flex", lg: "none" }}>
                    <Box position={"relative"} left={"5%"} width={"100%"} border={"1px solid"} textAlign={"center"}>
                        <Text color={"#B131FA"} fontSize={{ base: "2xl", lg: "4xl" }}>Chargée de communication 360°</Text>
                        <Text color={"#353244"} fontSize={{ base: "lg", lg: "xl" }}>Community management, stratégie , création de contenu, vidéo, graphisme, emailing, rédaction web (SEO)</Text>
                    </Box>
                </Flex>
                <Image border={"1px solid pink"} objectFit={"contain"} objectPosition={"bottom"} src="/timeline.png" />
                <Flex flexDirection={'column'} width={"100%"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "flex", lg: "none" }}>
                    <Box position={"relative"} left={"15%"} width={"100%"} border={"1px solid"} textAlign={"center"}>
                        <Text color={"#B131FA"} fontSize={{ base: "2xl", lg: "4xl" }}>Chargée de communication interne</Text>
                        <Text color={"#353244"} fontSize={{ base: "lg", lg: "xl" }}>Stratégie , création de contenu, évenementiel, vidéo, graphisme, conduite du changement, gestion de projet</Text>
                    </Box>
                    <Box position={"relative"} left={"-55%"} width={"70vw"} border={"1px solid"} textAlign={"center"}>
                        <Text color={"#B131FA"} fontSize={{ base: "2xl", lg: "4xl" }}>Assistante chargée de communication et marketing</Text>
                        <Text color={"#353244"} fontSize={{ base: "lg", lg: "xl" }}>Graphisme, emailing, évenementiel, community management</Text>
                    </Box>
                </Flex>






                <Flex flexDirection={'column'} width={"100%"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "none", lg: "flex" }}>
                    <Box position={"relative"} left={"-15%"} width={"70%"}>
                        <Text color={"#B131FA"} fontSize={"32px"}>Chargée de communication interne</Text>
                        <Text color={"#353244"} fontSize={"20"}>Stratégie , création de contenu, évenementiel, vidéo, graphisme, conduite du changement, gestion de projet</Text>
                    </Box>
                    <Box position={"relative"} left={"-15%"} width={"70%"}>
                        <Text color={"#B131FA"} fontSize={"32px"}>Assistante chargée de communication et marketing</Text>
                        <Text color={"#353244"} fontSize={"20"}>Graphisme, emailing, évenementiel, community management</Text>
                    </Box>
                </Flex>
            </Flex>

        </Flex>
    )
}