import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import light from './styles/theme/light'
import GlobalStyle from '../src/styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <GlobalStyle/>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
