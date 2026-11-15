import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Dialog,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useAdventureContext } from '../../context/provider';

const galleryCategories = [
  'All',
  'River Rafting',
  'Camping',
  'Bungee & Aerial',
  'Mountain Views',
  'Group Adventures',
] as const;

type GalleryFilter = (typeof galleryCategories)[number];

export const Gallery: React.FC = () => {
  const { galleryImages, openBookingModal } = useAdventureContext();
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('All');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((item) => item.category === activeCategory);
  }, [galleryImages, activeCategory]);

  const activePhoto = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  });

  return (
    <Box>
      {/* Header Banner */}
      <Box sx={{ bgcolor: '#123524', color: '#FFFFFF', py: { xs: 5, md: 7 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mb: 2, '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.5)' } }}
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Home
            </Link>
            <Typography sx={{ color: '#FFC107', fontSize: '0.85rem', fontWeight: 600 }}>
              Gallery
            </Typography>
          </Breadcrumbs>

          <Typography
            className="font-mono-tech"
            sx={{ color: '#FFD54F', fontSize: '0.78rem', fontWeight: 600, mb: 1 }}
          >
            EXPEDITION ARCHIVE · RISHIKESH, UTTARAKHAND
          </Typography>
          <Typography
            variant="h1"
            className="font-display"
            sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, fontWeight: 700, mb: 1.5 }}
          >
            Adventure Gallery & River Logs
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 640, lineHeight: 1.65 }}
          >
            Explore authentic moments from white water rafting descents, 83m canyon bungee
            jumps, twilight riverside camps, and misty mountain trails. Click any frame to
            open fullscreen view.
          </Typography>
        </Container>
      </Box>

      {/* Filter & Grid */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {galleryCategories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <Button
                key={cat}
                size="small"
                variant={active ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedIndex(null);
                }}
                sx={{
                  px: 2.25,
                  py: 0.75,
                  borderRadius: 2,
                  bgcolor: active ? '#123524' : '#FFFFFF',
                  color: active ? '#FFFFFF' : '#1F2937',
                  borderColor: active ? '#123524' : 'rgba(18, 53, 36, 0.2)',
                  '&:hover': {
                    bgcolor: active ? '#1B5E20' : '#E8F5E9',
                  },
                }}
              >
                {cat}
              </Button>
            );
          })}
        </Box>

        <Grid container spacing={3}>
          {filteredImages.map((photo, index) => (
            <Grid key={photo.id} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Box
                component="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`Open ${photo.title}`}
                sx={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: 0,
                  p: 0,
                  cursor: 'pointer',
                  display: 'block',
                  textAlign: 'left',
                  boxShadow: '0 6px 20px -4px rgba(18, 53, 36, 0.14)',
                  '&:hover img': { transform: 'scale(1.05)' },
                  '&:hover .zoom-hint': { opacity: 1 },
                }}
              >
                <Box
                  component="img"
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 320ms ease',
                    display: 'block',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, rgba(18,53,36,0.05) 35%, rgba(18,53,36,0.88) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2.5,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Box
                      className="zoom-hint"
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: 'rgba(18,53,36,0.75)',
                        color: '#FFC107',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.75,
                        transition: 'opacity 180ms ease',
                      }}
                    >
                      <ZoomInIcon fontSize="small" />
                    </Box>
                  </Box>

                  <Box>
                    <Typography
                      className="font-mono-tech"
                      sx={{ fontSize: '0.7rem', color: '#FFD54F', mb: 0.4 }}
                    >
                      {photo.category} · {photo.location}
                    </Typography>
                    <Typography
                      className="font-display"
                      sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem', mb: 0.4 }}
                    >
                      {photo.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem' }}>
                      {photo.caption}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Callout */}
        <Box
          sx={{
            mt: 7,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            bgcolor: '#E8F5E9',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              className="font-display"
              sx={{ fontWeight: 700, color: '#123524', mb: 0.5 }}
            >
              Ready to create your own Rishikesh expedition gallery?
            </Typography>
            <Typography variant="body2" sx={{ color: '#374151' }}>
              Reserve your rafting, camping, or bungee jump slot today with free helmet-cam options at basecamp.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => openBookingModal()}
            sx={{ whiteSpace: 'nowrap' }}
          >
            Book Your Expedition
          </Button>
        </Box>
      </Container>

      {/* Lightbox Modal */}
      <Dialog
        open={Boolean(activePhoto)}
        onClose={() => setSelectedIndex(null)}
        maxWidth="lg"
        fullWidth
        slotProps={{
          paper: {
            sx: { bgcolor: '#0D261A', color: '#FFFFFF', borderRadius: 3, overflow: 'hidden' },
          },
        }}
      >
        {activePhoto && (
          <Box sx={{ position: 'relative' }}>
            <IconButton
              aria-label="Close lightbox"
              onClick={() => setSelectedIndex(null)}
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                zIndex: 4,
                bgcolor: 'rgba(18,53,36,0.85)',
                color: '#FFFFFF',
                '&:hover': { bgcolor: '#1B5E20' },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#081810' }}>
              <IconButton
                aria-label="Previous photo"
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 12,
                  bgcolor: 'rgba(18,53,36,0.8)',
                  color: '#FFC107',
                  '&:hover': { bgcolor: '#1B5E20' },
                }}
              >
                <ChevronLeftIcon fontSize="large" />
              </IconButton>

              <Box
                component="img"
                src={activePhoto.image}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                sx={{ width: '100%', maxHeight: '72vh', objectFit: 'contain', display: 'block' }}
              />

              <IconButton
                aria-label="Next photo"
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 12,
                  bgcolor: 'rgba(18,53,36,0.8)',
                  color: '#FFC107',
                  '&:hover': { bgcolor: '#1B5E20' },
                }}
              >
                <ChevronRightIcon fontSize="large" />
              </IconButton>
            </Box>

            <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
              <Box>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.75rem', color: '#FFD54F', mb: 0.4 }}>
                  {activePhoto.category} · {activePhoto.location}
                </Typography>
                <Typography variant="h6" className="font-display" sx={{ fontWeight: 700 }}>
                  {activePhoto.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.78)' }}>
                  {activePhoto.caption}
                </Typography>
              </Box>
              <Typography className="font-mono-tech tabular-nums" sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
                {(selectedIndex ?? 0) + 1} / {filteredImages.length}
              </Typography>
            </Box>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Gallery;
