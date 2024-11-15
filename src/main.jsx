import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './config/query-client.js'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './config/mui-config.js'

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
        <CssBaseline/>
      </BrowserRouter>
    </ThemeProvider>
  </QueryClientProvider>
)
