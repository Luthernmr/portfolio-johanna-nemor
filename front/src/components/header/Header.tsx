import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, Image, VStack, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'
import ContactButton from '../content/Buttons/ContactButton';



export default function Header() {

    const header = [
        { name: "Accueil", link: "/" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Livre blanc", link: "/livre-blanc" },
    ]
    const [activeLink, setActiveLink] = useState("/"); // Définissez le lien actif par défaut sur la page d'accueil
    // Fonction pour mettre à jour le lien actif lorsque vous cliquez sur un lien
    const handleLinkClick = (hash: any) => {
        setActiveLink(hash);
        onClose();
    };
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <HStack h="10vh" justifyContent={"space-between"} width={"100%"} mb={"2vh"} >
            <ChakraLink as={ReactRouterLink} to={"/"}>
                <Image boxSize={{ base: "50px", lg: '70px' }} src='/Logo_jn.png' />
            </ChakraLink>
            <HStack fontSize={'xl'} spacing={10} display={{ base: "none", lg: "flex" }}>
                {header.map((elem, index) => (
                    <ChakraLink as={ReactRouterLink}
                        fontFamily={"century-gothic"}
                        key={index}
                        to={elem.link}
                        sx={{
                            textDecoration: activeLink === `${elem.link}` ? "underline" : "none",
                            textDecorationColor: activeLink === `${elem.link}` ? "#B131FA" : "transparent",
                            textUnderlineOffset: "10px",
                            transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                        }}
                        onClick={() => handleLinkClick(`"${elem.link}"`)}
                        css={{
                            boxShadow: "inset 0 0 0 0 #B131FA",
                            color: "#B131FA",
                            margin: "0 -.25rem",
                            padding: "0 .25rem",
                            transition: "color .3s ease-in-out, box-shadow .3s ease-in-out"
                        }}
                        _hover={{ boxShadow: "inset 100px 0 0 0 #B131FA", color: "white" }}
                    >
                        {elem.name}
                    </ChakraLink>

                ))}
                <ContactButton />
            </HStack>
            <Box display={{ base: "flex", lg: "none" }} >
                <HamburgerIcon
                    color="#B131FA"
                    boxSize={10} // Définissez la taille de l'icône selon vos besoins
                    aria-label="Options"
                    onClick={onOpen}
                />
                <Drawer onClose={onClose} isOpen={isOpen} size={"full"} placement={"top"}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                            <Flex flexDirection={"column"} justifyContent={"space-around"} height={"100%"} alignItems={"center"}>

                                <VStack fontSize={'2xl'}   spacing={10} display={{ base: "flex", lg: "none" }}>
                                    {header.map((elem, index) => (
                                        <ChakraLink as={ReactRouterLink}
                                            key={index}
                                            to={elem.link}
                                            sx={{
                                                textDecoration: activeLink === `${elem.link}` ? "underline" : "none",
                                                textDecorationColor: activeLink === `${elem.link}` ? "#B131FA" : "transparent",
                                                textUnderlineOffset: "10px",
                                                transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                                            }}
                                            onClick={() => handleLinkClick(`"${elem.link}"`)}
                                            css={{
                                                boxShadow: "inset 0 0 0 0 #B131FA",
                                                color: "#B131FA",
                                                margin: "0 -.25rem",
                                                padding: "0 .25rem",
                                                transition: "color .3s ease-in-out, box-shadow .3s ease-in-out"
                                            }}
                                            _hover={{ boxShadow: "inset 100px 0 0 0 #B131FA", color: "white" }}
                                        >
                                            {elem.name}
                                        </ChakraLink>

                                    ))}
                                </VStack>
                                <ContactButton />
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </HStack >
    )
}