import './App.css'
import { Box,Center } from "@chakra-ui/react";
import Header from './components/header/Header'
import LandingPage from './components/content/LandingPage'

function App() {

  return (
      <Center minW={"100%"} backgroundColor={"#f2f2f2"} >
        <Box  width={"90vw"} height={"97vh"} mt={"3vh"}>
          <Header />
          <LandingPage />
        </Box>
      </Center>
  )
}

export default App
