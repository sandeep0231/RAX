import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import BrandLogo from '../../assets/logo/BrandLogo';
import { useAdventureContext } from '../../context/provider';
import './Footer.css';

export const Footer: React.FC = () => {
  const { companyInfo, activities, navigationItems } = useAdventureContext();
  const [dispatchEmail, setDispatchEmail] = useState<string>('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dispatchEmail.trim());
    if (!validEmail) {
      setDispatchStatus('error');
      return;
    }
    setDispatchStatus('success');
    setDispatchEmail('');
  };

  return (
    <footer className="site-footer">
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <BrandLogo size={36} />
              <Typography
                className="font-display"
                sx={{ fontWeight: 700, fontSize: '1.125rem', color: '#123524' }}
              >
                {companyInfo.name}
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: '#4B5563', lineHeight: 1.7, mb: 2.5, maxWidth: 360 }}
            >
              {companyInfo.description}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                <LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#1B5E20', mt: 0.25 }} />
                <Typography variant="body2" sx={{ color: '#374151', fontSize: '0.84rem' }}>
                  {companyInfo.address}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <PhoneOutlinedIcon sx={{ fontSize: 18, color: '#1B5E20' }} />
                <Typography
                  variant="body2"
                  className="tabular-nums"
                  sx={{ color: '#374151', fontSize: '0.84rem' }}
                >
                  {companyInfo.phoneSecondary} / {companyInfo.phonePrimary}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                <EmailOutlinedIcon sx={{ fontSize: 18, color: '#1B5E20' }} />
                <Typography variant="body2" sx={{ color: '#374151', fontSize: '0.84rem' }}>
                  {companyInfo.email}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2.5 }}>
              <IconButton
                component="a"
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                size="small"
                sx={{
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(18, 53, 36, 0.12)',
                  color: '#123524',
                  '&:hover': { bgcolor: '#E8F5E9', color: '#1B5E20' },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                size="small"
                sx={{
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(18, 53, 36, 0.12)',
                  color: '#123524',
                  '&:hover': { bgcolor: '#E8F5E9', color: '#1B5E20' },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href={companyInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                size="small"
                sx={{
                  bgcolor: '#FFFFFF',
                  border: '1px solid rgba(18, 53, 36, 0.12)',
                  color: '#123524',
                  '&:hover': { bgcolor: '#E8F5E9', color: '#1B5E20' },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>

          {/* Expeditions Column */}
          <Grid size={{ xs: 6, sm: 4, md: 2.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: '#123524', mb: 2, fontSize: '0.95rem' }}
            >
              Expeditions
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {activities.slice(0, 6).map((act) => (
                <Link key={act.id} to={`/adventures/${act.slug}`} className="footer-link">
                  {act.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Quick Links Column */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: '#123524', mb: 2, fontSize: '0.95rem' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
              {navigationItems.map((nav) => (
                <Link key={nav.path} to={nav.path} className="footer-link">
                  {nav.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Safety & Newsletter Column */}
          <Grid size={{ xs: 12, sm: 12, md: 3.5 }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: '#123524', mb: 2, fontSize: '0.95rem' }}
            >
              Safety & Standards
            </Typography>

            <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: '#FFFFFF',
                    border: '1px solid rgba(27, 94, 32, 0.14)',
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}>
                    <VerifiedUserOutlinedIcon sx={{ fontSize: 16, color: '#1B5E20' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.78rem', color: '#123524' }}>
                      IRF Certified
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.74rem', color: '#4B5563', lineHeight: 1.45 }}>
                    International River Guides with rescue level 3 training.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6 }}>
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: '#FFFFFF',
                    border: '1px solid rgba(27, 94, 32, 0.14)',
                    height: '100%',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}>
                    <TerrainOutlinedIcon sx={{ fontSize: 16, color: '#1B5E20' }} />
                    <Typography sx={{ fontWeight: 700, fontSize: '0.78rem', color: '#123524' }}>
                      IMF Protocols
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.74rem', color: '#4B5563', lineHeight: 1.45 }}>
                    Indian Mountaineering Foundation gear compliance.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: '#123524', mb: 1, fontSize: '0.84rem' }}
            >
              Seasonal Weather & Permit Updates
            </Typography>
            <Box
              component="form"
              onSubmit={handleDispatchSubmit}
              sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}
            >
              <TextField
                size="small"
                fullWidth
                placeholder="Your email for river alerts"
                value={dispatchEmail}
                onChange={(e) => {
                  setDispatchEmail(e.target.value);
                  if (dispatchStatus !== 'idle') setDispatchStatus('idle');
                }}
                slotProps={{ htmlInput: { 'aria-label': 'Email for seasonal river alerts' } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    bgcolor: '#FFFFFF',
                    fontSize: '0.84rem',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ px: 2.2, py: 0.95, whiteSpace: 'nowrap', flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Box>
            {dispatchStatus === 'success' && (
              <Typography sx={{ fontSize: '0.78rem', color: '#1B5E20', mt: 0.75, fontWeight: 600 }}>
                Subscribed to seasonal Rishikesh river and permit advisories.
              </Typography>
            )}
            {dispatchStatus === 'error' && (
              <Typography sx={{ fontSize: '0.78rem', color: '#BA1A1A', mt: 0.75 }}>
                Please enter a valid email address.
              </Typography>
            )}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} {companyInfo.name} Pvt. Ltd. All rights reserved.
            {/* Uttarakhand Tourism Registered. */}
          </Typography>
          {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.5 }}>
            <Link to="/about" className="footer-link">
              Safety Charter
            </Link>
            <Link to="/adventures" className="footer-link">
              Permits & Terms
            </Link>
            <Link to="/contact" className="footer-link">
              Shivpuri Basecamp Directions
            </Link>
          </Box> */}
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
