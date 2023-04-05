import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { darkTheme } from '../themes'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { EntriesProvider } from '../context/entries'

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <EntriesProvider>
    <ThemeProvider theme={darkTheme} > 
  <CssBaseline />
  <Component {...pageProps} />
  </ThemeProvider>
   </EntriesProvider>
  )
}

export default MyApp
