import { Box } from "@chakra-ui/react";
import LandingPage from '../content/LandingPage'
import Expertises from '../content/Expertises'
import Experiences from '../content/Experiences'
import Projects from '../content/Projects'
import Contact from "../content/Contact";

export default function Home() {
    return (
        <>
            <Box width="85%" height={"85vh"}>
                <LandingPage />
            </Box>
            <Expertises />
            <Experiences />
            <Projects />
            <Contact />
        </>
    )
}