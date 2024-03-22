import { Button, HStack, Image, Link } from '@chakra-ui/react'
import { useState } from 'react'
export default function Header() {

    const header = ["ACCUEIL", "PRESENTATION", "PORTFOLIO", "LIVRE BLANC"]
    const [activeLink, setActiveLink] = useState("#accueil"); // Définissez le lien actif par défaut sur la page d'accueil
    // Fonction pour mettre à jour le lien actif lorsque vous cliquez sur un lien
    const handleLinkClick = (hash: any) => {
        setActiveLink(hash);
    };
    return (
        <HStack h={"10vh"} justifyContent={"space-between"} width={"100%"} mb={"2vh"} >
            <Image boxSize={'70px'} src='/Logo_jn.png' />
            <HStack fontSize={'2xl'} spacing={10}>
                { header.map((elem)=>(
                    <Link
                        href={ "#" + elem.toLowerCase()}
                        sx={{
                            textDecoration: activeLink === `${ "#" + elem.toLowerCase()}` ? "underline" : "none",
                            textDecorationColor: activeLink === `${ "#" + elem.toLowerCase()}` ? "#B131FA" : "transparent",
                            textUnderlineOffset: "10px",
                            transition: "text-decoration-color 0.1s, text-decoration 0.1s",
                        }}
                        onClick={() => handleLinkClick(`"${ "#" + elem.toLowerCase()}"`)}
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
        </HStack >
    )
}