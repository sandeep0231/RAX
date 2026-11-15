import { createTheme } from '@mui/material/styles';

export const adventureTheme = createTheme({
  palette: {
    primary: {
      main: '#1B5E20',
      dark: '#123524',
      light: '#2E7D32',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#1F2937',
    },
    background: {
      default: '#F8FAF5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1F2937',
      secondary: '#4B5563',
    },
    success: {
      main: '#2E7D32',
      light: '#E8F5E9',
    },
    divider: 'rgba(18, 53, 36, 0.1)',
  },
  typography: {
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.12,
    },
    h2: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.18,
    },
    h3: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "'Outfit', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          boxShadow: 'none',
          transition: 'all 180ms cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            boxShadow: '0 8px 18px -4px rgba(18, 53, 36, 0.16)',
            transform: 'translateY(-1px)',
          },
        },
        contained: ({ ownerState }) => ({
          ...(ownerState.color === 'secondary' && {
            backgroundColor: '#FFC107',
            color: '#1F2937',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#FFD54F',
            },
          }),
          ...(ownerState.color === 'primary' && {
            backgroundColor: '#1B5E20',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#2E7D32',
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 16px -2px rgba(18, 53, 36, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(18, 53, 36, 0.07)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1B5E20',
            borderWidth: 2,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          border: '1px solid rgba(18, 53, 36, 0.09)',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
  },
});
