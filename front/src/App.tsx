import './App.css'
import { Box, Center } from "@chakra-ui/react";
import Header from './components/header/Header'

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'


function App() {

  return (

    <Center minW={"100%"} maxW={"100vw"} backgroundColor={"#f2f2f2"} flexDirection={"column"}>
      <BrowserRouter>
      <Box width="85%" mt={"3vh"}>
        <Header />
      </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </Center>
  )
}

export default App
