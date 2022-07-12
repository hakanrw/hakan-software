import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SiteDrawer from '../components/SiteDrawer';
import { useCallback, useState } from 'react';

// import '../styles/globals.css'

const theme = createTheme({
  palette: {
    mode: "dark"
  },
}); 

function MyApp({ Component, pageProps }) {
  const [drawerOpen, setDrawerOpen] = useState(false); 

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteDrawer open={drawerOpen} onClose={closeDrawer} />
      <Navbar onOpen={openDrawer} />
      <Component {...pageProps} />
      
    </ThemeProvider>
  );
}

export default MyApp
