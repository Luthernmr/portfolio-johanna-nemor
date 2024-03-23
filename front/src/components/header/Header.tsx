import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, HStack, IconButton, Image, Link, MenuButton, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import { useState } from 'react'
export default function Header() {

    const header = ["ACCUEIL", "PRESENTATION", "PORTFOLIO", "LIVRE BLANC"]
    const [activeLink, setActiveLink] = useState("#accueil"); // Définissez le lien actif par défaut sur la page d'accueil
    // Fonction pour mettre à jour le lien actif lorsque vous cliquez sur un lien
    const handleLinkClick = (hash: any) => {
        setActiveLink(hash);
    };
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <HStack h={"10vh"} justifyContent={"space-between"} width={"100%"} mb={"2vh"}>
            <Image boxSize={'70px'} src='/Logo_jn.png' />
            <HStack fontSize={'2xl'} spacing={10} display={{ base: "none", lg: "flex" }}>
                {header.map((elem) => (
                    <Link
                        href={"#" + elem.toLowerCase()}
                        sx={{
                            textDecoration: activeLink === `${"#" + elem.toLowerCase()}` ? "underline" : "none",
                            textDecorationColor: activeLink === `${"#" + elem.toLowerCase()}` ? "#B131FA" : "transparent",
                            textUnderlineOffset: "10px",
                            transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                        }}
                        onClick={() => handleLinkClick(`"${"#" + elem.toLowerCase()}"`)}
                        css={{
                            boxShadow: "inset 0 0 0 0 #B131FA",
                            color: "#B131FA",
                            margin: "0 -.25rem",
                            padding: "0 .25rem",
                            transition: "color .3s ease-in-out, box-shadow .3s ease-in-out"
                        }}
                        _hover={{ boxShadow: "inset 100px 0 0 0 #B131FA", color: "white" }}
                    >
                        {elem}
                    </Link>

                ))}
                <Button fontSize={'2xl'} pl={10} pr={10} rounded={"full"} backgroundColor={"#B131FA"} color={"white"} _hover={{ opacity: "50%" }}>CONTACT</Button>
            </HStack>
            <Box display={{ base: "flex", lg: "none" }}>
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
                            <Flex flexDirection={"column"} justifyContent={"space-around"} height={"100%"}alignItems={"center"}>

                                <VStack fontSize={'2xl'} spacing={10} display={{ base: "flex", lg: "none" }}>
                                    {header.map((elem) => (
                                        <Link
                                            href={"#" + elem.toLowerCase()}
                                            sx={{
                                                textDecoration: activeLink === `${"#" + elem.toLowerCase()}` ? "underline" : "none",
                                                textDecorationColor: activeLink === `${"#" + elem.toLowerCase()}` ? "#B131FA" : "transparent",
                                                textUnderlineOffset: "10px",
                                                transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                                            }}
                                            onClick={() => handleLinkClick(`"${"#" + elem.toLowerCase()}"`)}
                                            css={{
                                                boxShadow: "inset 0 0 0 0 #B131FA",
                                                color: "#B131FA",
                                                margin: "0 -.25rem",
                                                padding: "0 .25rem",
                                                transition: "color .3s ease-in-out, box-shadow .3s ease-in-out"
                                            }}
                                            _hover={{ boxShadow: "inset 100px 0 0 0 #B131FA", color: "white" }}
                                        >
                                            {elem}
                                        </Link>

                                    ))}
                                </VStack>
                                <Button fontSize={'2xl'} pl={10} pr={10} rounded={"full"} w="80%" backgroundColor={"#B131FA"} color={"white"} _hover={{ opacity: "50%" }}>CONTACT</Button>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </HStack >
    )
}