import './App.css'
import { Text, Box,Center } from "@chakra-ui/react";
import Header from './components/header/Header'

function App() {

  return (
      <Center minW={"100%"}   border={"2px solid red"}>
        <Box  width={"90vw"} border={"2px solid red"} >
          <Header />
        </Box>
      </Center>
  )
}

export default App
