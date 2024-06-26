import { Box, Image, Center, Text, Heading, Flex } from '@chakra-ui/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';


export default function Experiences() {
    gsap.registerPlugin(ScrollTrigger)


    useEffect(() => {
        // Configuration de GSAP pour l'animation
        gsap.registerPlugin(ScrollTrigger);


        // Créer l'animation avec GSAP
        const boxesL = document.querySelectorAll('.expL');
        const boxesR = document.querySelectorAll('.expR');

        boxesL.forEach(box => {
            gsap.fromTo(
                box,
                {
                    x: -200, // Position de départ
                    opacity: 0 // Opacité de départ
                },
                {
                    y: 0,
                    x: 0, // Position d'arrivée
                    opacity: 1, // Opacité d'arrivée
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
        boxesR.forEach(box => {
            gsap.fromTo(
                box,
                {
                    x: 200, // Position de départ
                    opacity: 0 // Opacité de départ
                },
                {
                    y: 0,
                    x: 0, // Position d'arrivée
                    opacity: 1, // Opacité d'arrivée
                    scrollTrigger: {
                        trigger: box,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        toggleActions: 'play none none reverse',
                    }
                }
            );
        });
    }, []);

    return (
        <Flex  height={"100vh"} maxH="100%" width={"100%"} flexDirection={"column"} alignItems={"center"} >
            <Center mt={"5vh"} >
                <Heading   fontFamily={'century-gothic'} textAlign={"center"} size={{base: "xl", lg:"2xl"}}  color={"gray.600"} backgroundColor={"purple.100"} p={2} borderRadius={"25"}>Mes experiences</Heading>
            </Center>
            <Image   height="100%" position={"relative"} bottom={"0px"} src='/experience.png' display={{ base: "flex", lg: "none" }}/>

            <Flex width="100%" justifyContent={{ base: "center", lg: "space-between" }} alignItems={{ base: "center", lg: "start" }} alignContent={"center"}  display={{ base: "none", lg: "flex" }}>
                <Flex flexDirection={'column'} width={"100%"} alignItems={"end"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "none", lg: "flex" }}>
                    <Box _hover={{
                        transform: 'scale(1.05)',
                    }}
                        transition="transform 0.2s ease-in-out">

                        <Flex
                            position="relative"
                            right="5%"
                            id='box'
                            className='expL'
                            _hover={{
                                "& .text-container": {
                                    textShadow: "0px 0px 5px #D180FF"// Appliquer l'ombre au texte au survol
                                }
                            }}
                            alignItems={"center"}
                            justifyContent={"center"}
                            >
                            <Image mr={4}  boxSize="70px" src='/SNCF_Voyageurs.png' />
                            <Box >
                                <Flex textAlign="end" flexDirection="row" fontSize="2xl">
                                    <Text color="#B131FA" className="text-container">SNCF VOYAGEURS </Text>
                                    <Text>- LYON</Text>
                                </Flex>
                                <Text color="#353244" fontSize="xl">Sept 2022 - Aujourd’hui</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box _hover={{
                        transform: 'scale(1.05)',
                    }}
                    transition="transform 0.2s ease-in-out">

                        <Flex position={"relative"} right={"-15%"} className='expL'
                            _hover={{
                                "& .text-container": {
                                    textShadow: "0px 0px 5px #D180FF"
                                },
                                transform: 'scale(1.1)',
                            }} 
                            alignItems={"center"}
                            justifyContent={"center"}
                            >
                            <Image mr={4} boxSize={"70px"} src='/Mon_cabas_vert.png' />
                            <Box >
                                <Flex textAlign={"end"} flexDirection={"row"} fontSize={"2xl"}>
                                    <Text color={"#B131FA"} className="text-container">MON CABAS VERT </Text><Text>- LYON</Text>
                                </Flex>
                                <Text color={"#353244"} fontSize={"xl"}>Sept 2021 - Sept 2022</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box _hover={{
                        transform: 'scale(1.05)',
                    }}
                    transition="transform 0.2s ease-in-out">

                        <Flex position={"relative"} right={"5%"} className='expL'>
                            <Image mr={4}  boxSize={"70px"} src='/Direct_market.png' />
                            <Box>
                                <Flex textAlign={"end"} flexDirection={"row"} fontSize={"2xl"} _hover={{
                                    "& .text-container": {
                                        textShadow: "0px 0px 5px #D180FF"
                                    }
                                    
                                }}
                                alignItems={"center"}
                                justifyContent={"center"}
                                >
                                    <Text color={"#B131FA"} className="text-container">DIRECT MARKET </Text><Text>- STRASBOURG</Text>
                                </Flex>
                                <Text color={"#353244"} fontSize={"xl"}>Avr 2021 - Juin 2021</Text>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Image objectFit={"contain"} objectPosition={"bottom"} src="/timeline.png" />
                <Flex flexDirection={'column'} width={"100%"} height={"70%"} justifyContent={"space-between"} mt={"2vh"} display={{ base: "none", lg: "flex" }}>
                    <Box position={"relative"} left={"-10%"} width={"80%"} className='expR'>
                        <Text color={"#B131FA"} fontSize={"2xl"} fontWeight={"bold"} >Chargée de communication interne</Text>
                        <Text color={"#353244"} fontSize={"lg"}>Stratégie , création de contenu, évenementiel, vidéo, graphisme, conduite du changement, gestion de projet</Text>
                    </Box>
                    <Box position={"relative"} left={"5%"} width={"80%"} className='expR'>
                        <Text color={"#B131FA"} fontSize={"2xl"} fontWeight={"bold"} >Chargée de communication 360°</Text>
                        <Text color={"#353244"} fontSize={"lg"}>Community management, stratégie , création de contenu, vidéo, graphisme, emailing, rédaction web (SEO)</Text>
                    </Box>
                    <Box position={"relative"} left={"-10%"} width={"80%"} className='expR'>
                        <Text color={"#B131FA"} fontSize={"2xl"}fontWeight={"bold"} >Assistante chargée de communication et marketing</Text>
                        <Text color={"#353244"} fontSize={"lg"}>Graphisme, emailing, évenementiel, community management</Text>
                    </Box>
                </Flex>
            </Flex>

        </Flex>
    )
}