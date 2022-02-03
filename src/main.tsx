import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import * as serviceWorkerRegister from './serviceWorkerRegister'

import App from './App'

import theme from './theme'
import 'animate.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegister.register()
