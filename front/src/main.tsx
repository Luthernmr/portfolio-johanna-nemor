import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import './index.css'
// Supports weights 200-700
import '@fontsource/yanone-kaffeesatz';

const theme = extendTheme({
  colors: {
    
    
    mypurple: {
      100: '#353244',
      200:'#FFFFF',
      800 : "#FFFFF"
    },
    whity: {
      500: "#FFFFF", // Remplacez 'yourTagColor' par la couleur que vous souhaitez pour le tag
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Yanone Kaffeesatz', sans-serif`,
  },
  components: {
    Tag: {
      baseStyle: {
        outlineColor: 'white',
      },
    },
  },
  
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
