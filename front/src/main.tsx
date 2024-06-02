import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import './index.css'
// Supports weights 200-700
import '@fontsource/krona-one';
// Supports weights 100-900
import '@fontsource-variable/raleway';
import '@fontsource/roboto';
const theme = extendTheme({

  fonts: {
    heading: `'century-gothic', sans-serif`,
    body: `'century-gothic', Roboto, sans-serif`,
  },
  
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
