import { Button, Link } from "@chakra-ui/react";

export default function ContactButton() {
    return (
        <>
            <Button as={Link} href="mailto:jrevert06@gmail.com" fontSize={'lg'} pl={10} pr={10} rounded={"full"} backgroundColor={"#B131FA"} color={"white"} _hover={{ opacity: "50%" }}>Contact</Button>
        </>
    )
}