import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { adventureTheme } from './theme/theme';
import { AdventureProvider } from './context/provider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BookingModal from './components/BookingModal/BookingModal';
import AppRoutes from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={adventureTheme}>
      <CssBaseline />
      <AdventureProvider>
        <BrowserRouter>
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              bgcolor: 'background.default',
            }}
          >
            <Header />
            <Box component="main" sx={{ flexGrow: 1 }}>
              <AppRoutes />
            </Box>
            <Footer />
            <BookingModal />
          </Box>
        </BrowserRouter>
      </AdventureProvider>
    </ThemeProvider>
  );
};

export default App;
