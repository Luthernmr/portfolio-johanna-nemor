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
import Footer from './components/content/Footer';
import LivreBlanc from './components/pages/LivreBlanc';


function App() {

  return (

    <Center minW={"100%"} maxW={"100vw"} backgroundColor={"#f2f2f2"} flexDirection={"column"} backgroundImage={"radial-gradient(circle at 1px 1px, gray.400 1px, transparent 0);"} backgroundSize={"40px 40px"}>
      <BrowserRouter>
      <Box width="85%" mt={"3vh"} >
        <Header />
      </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/livre-blanc" element={<LivreBlanc />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Center>
  )
}

export default App
