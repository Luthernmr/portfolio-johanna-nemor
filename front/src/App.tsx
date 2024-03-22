import './App.css'
import { Box, Center } from "@chakra-ui/react";
import Header from './components/header/Header'
import LandingPage from './components/content/LandingPage'
import Expertises from './components/content/Expertises'
import Experiences from './components/content/Experiences'

function App() {

  return (
    <Center minW={"100%"} maxW={"100vw"} backgroundColor={"#f2f2f2"} flexDirection={"column"}>
      <Box width="85%" height={"97vh"} mt={"3vh"}>
        <Header />
        <LandingPage />
      </Box>
      <Expertises />
      <Experiences />
    </Center>
  )
}

export default App
