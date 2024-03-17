import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import './index.css'
// Supports weights 200-700
import '@fontsource/yanone-kaffeesatz';

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Yanone Kaffeesatz', sans-serif`,
  },
  styles: {
    global: {
      // Définissez les styles globaux ici
      // Par exemple, pour les liens
      a: {
        color: "blue.500",
        _hover: {
          textDecoration: "underline",
          textDecorationColor: "red", // Personnalisez la couleur du soulignement selon vos besoins
          textDecorationThickness: "2px", // Personnalisez l'épaisseur du soulignement selon vos besoins
          textUnderlineOffset: "2px",
          
        },
      },
    },
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
