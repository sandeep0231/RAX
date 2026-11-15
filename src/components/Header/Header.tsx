import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BrandLogo from '../../assets/logo/BrandLogo';
import { useAdventureContext } from '../../context/provider';
import './Header.css';

export const Header: React.FC = () => {
  const { navigationItems, companyInfo, openBookingModal } = useAdventureContext();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleDrawer = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleBookClick = () => {
    setMobileOpen(false);
    openBookingModal();
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 2, md: 4 },
            height: { xs: 64, md: 72 },
          }}
        >
          {/* Zone 1: Clean single-line Brand Wordmark */}
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <BrandLogo size={36} />
            <Typography
              component="span"
              className="font-display"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '1.05rem', sm: '1.15rem' },
                color: '#123524',
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              {companyInfo.name}
            </Typography>
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
          <Box
            component="nav"
            aria-label="Primary Navigation"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { md: 3, lg: 4 },
            }}
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `header-nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Box>

          {/* Zone 3: Primary CTA + Mobile Hamburger */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleBookClick}
              sx={{
                display: { xs: 'none', sm: 'inline-flex' },
                px: 2.5,
                py: 1,
                fontSize: '0.875rem',
                whiteSpace: 'nowrap',
              }}
            >
              Book Now
            </Button>

            <IconButton
              aria-label="Open navigation menu"
              onClick={handleToggleDrawer}
              sx={{
                display: { xs: 'inline-flex', md: 'none' },
                color: '#123524',
                border: '1px solid rgba(18, 53, 36, 0.14)',
                borderRadius: 2,
                width: 42,
                height: 42,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleToggleDrawer}
        slotProps={{
          paper: {
            sx: {
              width: 290,
              backgroundColor: '#F8FAF5',
              p: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pb: 1.5,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <BrandLogo size={32} />
            <Typography
              className="font-display"
              sx={{ fontWeight: 700, fontSize: '1rem', color: '#123524' }}
            >
              {companyInfo.name}
            </Typography>
          </Box>
          <IconButton aria-label="Close navigation menu" onClick={handleToggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 1.5 }} />

        <List disablePadding>
          {navigationItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                end={item.path === '/'}
                onClick={handleToggleDrawer}
                sx={{
                  borderRadius: 2,
                  py: 1.25,
                  '&.active': {
                    backgroundColor: '#E8F5E9',
                    color: '#1B5E20',
                    '& .MuiListItemText-primary': {
                      fontWeight: 700,
                    },
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 2.5 }}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleBookClick}
          >
            Book Now
          </Button>
        </Box>
      </Drawer>
    </header>
  );
};

export default Header;
