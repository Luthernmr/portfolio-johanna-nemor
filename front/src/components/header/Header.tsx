import { Button, HStack, Image, Link } from '@chakra-ui/react'
import { useState } from 'react'
export default function Header() {

    const [activeLink, setActiveLink] = useState("#accueil"); // Définissez le lien actif par défaut sur la page d'accueil

    // Fonction pour mettre à jour le lien actif lorsque vous cliquez sur un lien
    const handleLinkClick = (hash: any) => {
        setActiveLink(hash);
    };
    return (
        <HStack h={"10vh"} justifyContent={"space-between"} width={"100%"} mb={"2vh"} >
            <Image boxSize={'70px'} src='/Logo_jn.png' />
            <HStack fontSize={'2xl'} spacing={10}>
                <Link
                    href="#accueil"
                    sx={{
                        textDecoration: activeLink === "#accueil" ? "underline" : "none",
                        textDecorationColor: activeLink === "#accueil" ? "#B131FA" : "transparent",
                        textUnderlineOffset: "10px",
                        transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                    }}
                    onClick={() => handleLinkClick("#accueil")}
                >
                    ACCUEIL
                </Link>
                <Link
                    href="#presentation"
                    sx={{
                        textDecoration: activeLink === "#presentation" ? "underline" : "none",
                        textDecorationColor: activeLink === "#presentation" ? "#B131FA" : "transparent",
                        textUnderlineOffset: "10px",
                        transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                    }}
                    onClick={() => handleLinkClick("#presentation")}
                >
                    PRESENTATION
                </Link>
                <Link
                    href="#portfolio"
                    sx={{
                        textDecoration: activeLink === "#portfolio" ? "underline" : "none",
                        textDecorationColor: activeLink === "#portfolio" ? "#B131FA" : "transparent",
                        textUnderlineOffset: "10px",
                        transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                    }}
                    onClick={() => handleLinkClick("#portfolio")}
                >
                    PORTFOLIO
                </Link>
                <Link
                    href="#livre-blanc"
                    sx={{
                        textDecoration: activeLink === "#livre-blanc" ? "underline" : "none",
                        textDecorationColor: activeLink === "#livre-blanc" ? "#B131FA" : "transparent",
                        textUnderlineOffset: "10px",
                        transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                    }}
                    onClick={() => handleLinkClick("#livre-blanc")}
                >
                    LIVRE BLANC
                </Link>
                <Button fontSize={'2xl'} pl={10} pr={10} rounded={"full"} backgroundColor={"#B131FA"} color={"white"} _hover={{ opacity: "50%" }}>CONTACT</Button>
            </HStack>
        </HStack>
    )
}