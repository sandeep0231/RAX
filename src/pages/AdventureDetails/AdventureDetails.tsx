import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  Divider,
  FormControlLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAdventureContext } from '../../context/provider';

const departureWaves = [
  { id: '08:00 AM', label: '08:00 AM – Sunrise Batch', status: 'Recommended' },
  { id: '11:30 AM', label: '11:30 AM – Midday Run', status: '4 Spots Left' },
  { id: '02:30 PM', label: '02:30 PM – Afternoon Rush', status: 'Available' },
];

export const AdventureDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getActivityByIdOrSlug, faqData, companyInfo, openBookingModal } =
    useAdventureContext();

  const activity = id ? getActivityByIdOrSlug(id) : undefined;

  const [selectedDate, setSelectedDate] = useState<string>('2026-11-20');
  const [departureWave, setDepartureWave] = useState<string>('08:00 AM');
  const [adventurers, setAdventurers] = useState<number>(2);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!activity) {
    return (
      <Container maxWidth="md" sx={{ py: 12, textAlign: 'center' }}>
        <Typography
          variant="h3"
          className="font-display"
          sx={{ fontWeight: 700, color: '#123524', mb: 1.5 }}
        >
          Expedition Not Found
        </Typography>
        <Typography variant="body1" sx={{ color: '#4B5563', mb: 4 }}>
          The adventure activity you are looking for may have moved or is outside the
          current season.
        </Typography>
        <Button
          component={Link}
          to="/adventures"
          variant="contained"
          color="secondary"
          startIcon={<ArrowBackIcon />}
        >
          Browse All Adventures
        </Button>
      </Container>
    );
  }

  const baseSubtotal = activity.price * adventurers;
  const gstAmount = Math.round(baseSubtotal * 0.05);
  const totalAmount = baseSubtotal + gstAmount;

  const whatsappHref = `https://wa.me/${companyInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hello ${companyInfo.name}, I have a question about "${activity.title}" for ${adventurers} guest(s) on ${selectedDate} (${departureWave}).`
  )}`;

  const detailFaqs = faqData.slice(0, 3);

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#123524',
          color: '#FFFFFF',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={activity.image}
          alt={activity.title}
          referrerPolicy="no-referrer"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(18,53,36,0.78) 0%, rgba(18,53,36,0.95) 100%)',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{ position: 'relative', zIndex: 2, py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3, md: 4 } }}
        >
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ mb: 2.5, '& .MuiBreadcrumbs-separator': { color: 'rgba(255,255,255,0.5)' } }}
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Home
            </Link>
            <Link to="/adventures" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.85rem' }}>
              Adventures
            </Link>
            <Typography sx={{ color: '#FFC107', fontSize: '0.85rem', fontWeight: 600 }}>
              {activity.title}
            </Typography>
          </Breadcrumbs>

          <Typography
            className="font-mono-tech"
            sx={{ color: '#FFD54F', fontSize: '0.78rem', fontWeight: 600, mb: 1.25 }}
          >
            {activity.category} · {activity.gradeBadge} · Ages {activity.ageLimit}
          </Typography>

          <Typography
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2rem', sm: '2.65rem', md: '3.2rem' },
              fontWeight: 700,
              maxWidth: 820,
              mb: 2,
            }}
          >
            {activity.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.88)',
              maxWidth: 740,
              lineHeight: 1.65,
              mb: 4,
            }}
          >
            {activity.shortDescription}
          </Typography>

          {/* 4-Column Quick Specs */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 18, color: '#FFC107' }} />
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
                    DURATION
                  </Typography>
                </Box>
                <Typography className="font-display" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {activity.duration}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <TerrainOutlinedIcon sx={{ fontSize: 18, color: '#FFC107' }} />
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
                    SCALE / ROUTE
                  </Typography>
                </Box>
                <Typography className="font-display" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {activity.distanceOrHeight}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <LocationOnOutlinedIcon sx={{ fontSize: 18, color: '#FFC107' }} />
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
                    LOCATION
                  </Typography>
                </Box>
                <Typography className="font-display" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                  {activity.location}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <SpeedOutlinedIcon sx={{ fontSize: 18, color: '#FFC107' }} />
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>
                    DIFFICULTY
                  </Typography>
                </Box>
                <Typography className="font-display" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {activity.difficulty}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main 2-Column Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          {/* Left Column: Detailed Information */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Overview */}
            <Box sx={{ mb: 5 }}>
              <Typography
                className="font-mono-tech"
                sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20', mb: 0.75 }}
              >
                EXPEDITION BRIEFING
              </Typography>
              <Typography
                variant="h3"
                className="font-display"
                sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, color: '#123524', mb: 2 }}
              >
                Experience Overview
              </Typography>
              <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.8 }}>
                {activity.description}
              </Typography>
            </Box>

            {/* Optional Rapid / Elevation Segments */}
            {activity.routeSegments && activity.routeSegments.length > 0 && (
              <Card sx={{ p: 3, mb: 5, bgcolor: '#FFFFFF' }}>
                <Typography
                  variant="h6"
                  className="font-display"
                  sx={{ fontWeight: 700, color: '#123524', mb: 2 }}
                >
                  26 KM Descent Rapids & Elevation Profile
                </Typography>
                <Box
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    mb: 2.5,
                    background:
                      'linear-gradient(90deg, #2E7D32 0%, #FFC107 40%, #1B5E20 75%, #2E7D32 100%)',
                  }}
                />
                <Grid container spacing={1.5}>
                  {activity.routeSegments.map((seg) => (
                    <Grid key={seg.label} size={{ xs: 6, sm: 4, md: 2.4 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: '#F8FAF5',
                          border: '1px solid rgba(18, 53, 36, 0.08)',
                          height: '100%',
                        }}
                      >
                        <Typography
                          className="font-mono-tech"
                          sx={{ fontSize: '0.68rem', color: '#1B5E20', fontWeight: 600 }}
                        >
                          {seg.range}
                        </Typography>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.86rem', color: '#123524', my: 0.4 }}>
                          {seg.label}
                        </Typography>
                        <Typography sx={{ fontSize: '0.74rem', color: '#4B5563' }}>
                          {seg.grade}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Card>
            )}

            {/* Highlights */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                className="font-display"
                sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#123524', mb: 2.5 }}
              >
                Adventure Highlights
              </Typography>
              <Grid container spacing={2}>
                {activity.highlights.map((highlight) => (
                  <Grid key={highlight} size={{ xs: 12, sm: 6 }}>
                    <Card sx={{ height: '100%', boxShadow: 'none', border: '1px solid rgba(27,94,32,0.12)' }}>
                      <CardContent sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, p: 2.25 }}>
                        <CheckCircleOutlineIcon sx={{ color: '#FFC107', mt: 0.25 }} />
                        <Typography variant="body2" sx={{ color: '#1F2937', fontWeight: 500, lineHeight: 1.6 }}>
                          {highlight}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Inclusions & Exclusions */}
            <Grid container spacing={3} sx={{ mb: 5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%', bgcolor: '#F2F9F3', boxShadow: 'none', border: '1px solid rgba(27,94,32,0.16)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      className="font-display"
                      sx={{ fontWeight: 700, color: '#1B5E20', mb: 2 }}
                    >
                      What’s Included
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                      {activity.inclusions.map((inc) => (
                        <Box key={inc} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: '#2E7D32', mt: 0.25 }} />
                          <Typography variant="body2" sx={{ color: '#1F2937', lineHeight: 1.55 }}>
                            {inc}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%', bgcolor: '#FFFFFF', boxShadow: 'none', border: '1px solid rgba(18,53,36,0.1)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      className="font-display"
                      sx={{ fontWeight: 700, color: '#374151', mb: 2 }}
                    >
                      What’s Not Included
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                      {activity.exclusions.map((exc) => (
                        <Box key={exc} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <CancelOutlinedIcon sx={{ fontSize: 18, color: '#9CA3AF', mt: 0.25 }} />
                          <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.55 }}>
                            {exc}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Safety Information & Important Instructions */}
            <Card sx={{ p: { xs: 2.5, md: 3.5 }, mb: 5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.5 }}>
                <VerifiedUserOutlinedIcon sx={{ color: '#1B5E20', fontSize: 26 }} />
                <Typography
                  variant="h5"
                  className="font-display"
                  sx={{ fontWeight: 700, color: '#123524' }}
                >
                  Safety Standards & Advisories
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#374151', lineHeight: 1.75, mb: 3 }}>
                {activity.safetyInformation}
              </Typography>

              <Divider sx={{ mb: 2.5 }} />

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <WarningAmberOutlinedIcon sx={{ color: '#D97706', fontSize: 22 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#123524' }}>
                  Important Instructions Before Arrival
                </Typography>
              </Box>
              <Box component="ul" sx={{ pl: 2.5, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                {activity.importantInstructions.map((inst) => (
                  <Typography
                    key={inst}
                    component="li"
                    variant="body2"
                    sx={{ color: '#4B5563', lineHeight: 1.6 }}
                  >
                    {inst}
                  </Typography>
                ))}
              </Box>
            </Card>

            {/* Activity Gallery Strip */}
            <Box sx={{ mb: 5 }}>
              <Typography
                variant="h4"
                className="font-display"
                sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#123524', mb: 2 }}
              >
                Expedition Gallery
              </Typography>
              <Grid container spacing={2}>
                {activity.gallery.map((imgUrl, idx) => (
                  <Grid key={`${imgUrl}-${idx}`} size={{ xs: 6, sm: 3 }}>
                    <Box
                      component="button"
                      onClick={() => setLightboxImage(imgUrl)}
                      aria-label={`View gallery photo ${idx + 1}`}
                      sx={{
                        p: 0,
                        border: 0,
                        width: '100%',
                        aspectRatio: '4 / 3',
                        borderRadius: 2.5,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        display: 'block',
                        '&:hover img': { transform: 'scale(1.06)' },
                      }}
                    >
                      <Box
                        component="img"
                        src={imgUrl}
                        alt={`${activity.title} photo ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 260ms ease',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Expedition FAQs */}
            <Box>
              <Typography
                variant="h4"
                className="font-display"
                sx={{ fontSize: '1.5rem', fontWeight: 700, color: '#123524', mb: 2 }}
              >
                Frequently Asked Questions
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {detailFaqs.map((faq) => (
                  <Accordion key={faq.id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1B5E20' }} />}>
                      <Typography sx={{ fontWeight: 600, color: '#123524' }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.65 }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Sticky Booking Widget */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              sx={{
                position: { lg: 'sticky' },
                top: { lg: 92 },
                p: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.72rem', color: '#4B5563' }}>
                  PER ADVENTURER
                </Typography>
                {activity.originalPrice && (
                  <Typography
                    className="font-mono-tech"
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      bgcolor: '#FFC107',
                      color: '#123524',
                      px: 1,
                      py: 0.3,
                      borderRadius: 1,
                    }}
                  >
                    SAVE ₹{(activity.originalPrice - activity.price).toLocaleString('en-IN')}
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 0.5 }}>
                <Typography
                  className="font-display tabular-nums"
                  sx={{ fontWeight: 700, fontSize: '2.1rem', color: '#123524' }}
                >
                  ₹{activity.price.toLocaleString('en-IN')}
                </Typography>
                {activity.originalPrice && (
                  <Typography
                    className="tabular-nums"
                    sx={{ color: '#9CA3AF', textDecoration: 'line-through', fontSize: '1rem' }}
                  >
                    ₹{activity.originalPrice.toLocaleString('en-IN')}
                  </Typography>
                )}
              </Box>
              <Typography variant="body2" sx={{ color: '#1B5E20', fontWeight: 600, mb: 2.5 }}>
                All permits, certified gear & safety escort included
              </Typography>

              <Divider sx={{ mb: 2.5 }} />

              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#123524', mb: 1 }}>
                Select Expedition Date
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                sx={{ mb: 2.5 }}
              />

              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#123524', mb: 1 }}>
                Select Departure Wave
              </Typography>
              <RadioGroup
                value={departureWave}
                onChange={(e) => setDepartureWave(e.target.value)}
                sx={{ mb: 2.5, gap: 1 }}
              >
                {departureWaves.map((wave) => (
                  <Box
                    key={wave.id}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      border:
                        departureWave === wave.id
                          ? '1.5px solid #1B5E20'
                          : '1px solid rgba(18, 53, 36, 0.14)',
                      bgcolor: departureWave === wave.id ? '#E8F5E9' : '#FFFFFF',
                    }}
                  >
                    <FormControlLabel
                      value={wave.id}
                      control={<Radio size="small" color="primary" />}
                      label={
                        <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#123524' }}>
                          {wave.label}
                        </Typography>
                      }
                      sx={{ m: 0 }}
                    />
                    <Typography sx={{ fontSize: '0.72rem', color: '#1B5E20', fontWeight: 600 }}>
                      {wave.status}
                    </Typography>
                  </Box>
                ))}
              </RadioGroup>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#123524', mb: 1 }}>
                Number of Adventurers
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 1,
                  borderRadius: 2,
                  border: '1px solid rgba(18, 53, 36, 0.18)',
                  bgcolor: '#F8FAF5',
                  mb: 2.5,
                }}
              >
                <IconButton
                  size="small"
                  aria-label="Decrease adventurers"
                  onClick={() => setAdventurers((prev) => Math.max(1, prev - 1))}
                  sx={{ bgcolor: '#FFFFFF', border: '1px solid rgba(18,53,36,0.12)' }}
                >
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                  {adventurers} {adventurers === 1 ? 'Adventurer' : 'Adventurers'}
                </Typography>
                <IconButton
                  size="small"
                  aria-label="Increase adventurers"
                  onClick={() => setAdventurers((prev) => Math.min(50, prev + 1))}
                  sx={{ bgcolor: '#FFFFFF', border: '1px solid rgba(18,53,36,0.12)' }}
                >
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Price Breakdown */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: '#4B5563' }}>
                    Expedition ({adventurers} × ₹{activity.price.toLocaleString('en-IN')})
                  </Typography>
                  <Typography variant="body2" className="tabular-nums" sx={{ fontWeight: 600 }}>
                    ₹{baseSubtotal.toLocaleString('en-IN')}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: '#4B5563' }}>
                    River & Forest Permit Fee
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#1B5E20', fontWeight: 600 }}>
                    Included
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" sx={{ color: '#4B5563' }}>
                    GST (5%)
                  </Typography>
                  <Typography variant="body2" className="tabular-nums" sx={{ fontWeight: 600 }}>
                    ₹{gstAmount.toLocaleString('en-IN')}
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontWeight: 700, color: '#123524' }}>Total Amount</Typography>
                  <Typography
                    className="font-display tabular-nums"
                    sx={{ fontWeight: 700, fontSize: '1.35rem', color: '#1B5E20' }}
                  >
                    ₹{totalAmount.toLocaleString('en-IN')}
                  </Typography>
                </Box>
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                onClick={() =>
                  openBookingModal({
                    activityTitle: activity.title,
                    date: selectedDate,
                    participants: adventurers,
                  })
                }
                sx={{ py: 1.4, mb: 1.5 }}
              >
                Book Expedition Now
              </Button>

              <Button
                component="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ py: 1.25, bgcolor: '#E8F5E9', borderColor: 'rgba(27,94,32,0.25)' }}
              >
                Chat with Guide on WhatsApp
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Lightbox Dialog */}
      <Dialog
        open={Boolean(lightboxImage)}
        onClose={() => setLightboxImage(null)}
        maxWidth="md"
        fullWidth
      >
        <Box sx={{ position: 'relative', bgcolor: '#123524' }}>
          <IconButton
            aria-label="Close photo preview"
            onClick={() => setLightboxImage(null)}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              bgcolor: 'rgba(18,53,36,0.8)',
              color: '#FFFFFF',
              '&:hover': { bgcolor: '#123524' },
            }}
          >
            <CloseIcon />
          </IconButton>
          {lightboxImage && (
            <Box
              component="img"
              src={lightboxImage}
              alt={activity.title}
              referrerPolicy="no-referrer"
              sx={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default AdventureDetails;
