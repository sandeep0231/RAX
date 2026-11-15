import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from '@mui/material';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { useContact } from './contactController';

export const Contact: React.FC = () => {
  const {
    activities,
    activityTags,
    agreedSafety,
    basecampFaqs,
    companyInfo,
    errors,
    groupSize,
    groupSizes,
    handleActivitySelect,
    handleEmailChange,
    handleFullNameChange,
    handleGroupSizeSelect,
    handleMessageChange,
    handlePhoneChange,
    handlePreferredDateChange,
    handleSafetyChange,
    handleSubmit,
    handleSubmitAnotherInquiry,
    message,
    phone,
    preferredDate,
    selectedActivity,
    submitted,
    fullName,
    email,
    whatsappDirectHref,
    result
  } = useContact();

  return (
    <Box>
      {/* Hero Header */}
      <Box
        sx={{
          bgcolor: '#EFF5EC',
          borderBottom: '1px solid rgba(18, 53, 36, 0.08)',
          py: { xs: 5, md: 6.5 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 1.5 }}>
            <Link to="/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>
              Home
            </Link>
            <Typography sx={{ color: '#1B5E20', fontSize: '0.85rem', fontWeight: 700 }}>
              Contact Us
            </Typography>
          </Breadcrumbs>

          <Typography
            className="font-mono-tech"
            sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20', mb: 1 }}
          >
            SHIVPURI · TAPOVAN HQ · RISHIKESH, UTTARAKHAND
          </Typography>
          <Typography
            variant="h1"
            className="font-display"
            sx={{
              fontSize: { xs: '2.1rem', md: '3rem' },
              fontWeight: 700,
              color: '#123524',
              mb: 1.5,
            }}
          >
            Contact Our Rishikesh Basecamp
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: '#4B5563', maxWidth: 680, lineHeight: 1.65, mb: 4 }}
          >
            Have questions about river water levels, seasonal weather conditions, or
            custom group packages? Reach out to our Tapovan expedition guides anytime.
          </Typography>

          {/* 4 River Conditions Cards */}
          {/* <Grid container spacing={2}>
            <Grid size={{ xs: 6, md: 3 }}>
              <Card sx={{ boxShadow: 'none', border: '1px solid rgba(18,53,36,0.1)' }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                    CURRENT RAPIDS
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#123524', fontSize: '0.95rem' }}>
                    Class III+ to IV
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Card sx={{ boxShadow: 'none', border: '1px solid rgba(18,53,36,0.1)' }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                    GANGES LEVEL
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#123524', fontSize: '0.95rem' }}>
                    {companyInfo.gangesLevel}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Card sx={{ boxShadow: 'none', border: '1px solid rgba(18,53,36,0.1)' }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                    WEATHER
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#123524', fontSize: '0.95rem' }}>
                    {companyInfo.weatherSummary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <Card sx={{ boxShadow: 'none', border: '1px solid rgba(18,53,36,0.1)' }}>
                <CardContent sx={{ p: 2 }}>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                    SAFETY CODE
                  </Typography>
                  <Typography sx={{ fontWeight: 700, color: '#1B5E20', fontSize: '0.95rem' }}>
                    IRF Certified Active
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* 4 Contact Info Cards */}
        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.5,
                  }}
                >
                  <PhoneOutlinedIcon sx={{ color: '#1B5E20' }} />
                </Box>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: '#4B5563', mb: 0.5 }}>
                  PHONE HELPLINE
                </Typography>
                <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#123524', mb: 0.75 }}>
                  {companyInfo.phonePrimary}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.8rem' }}>
                  7 AM – 9 PM IST Daily
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card
              component="a"
              href={whatsappDirectHref}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ height: '100%', display: 'block', textDecoration: 'none' }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: '#FFF8E1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.5,
                  }}
                >
                  <WhatsAppIcon sx={{ color: '#D97706' }} />
                </Box>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: '#4B5563', mb: 0.5 }}>
                  WHATSAPP DIRECT
                </Typography>
                <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#123524', mb: 0.75 }}>
                  {companyInfo.whatsappNumber}
                </Typography>
                <Typography variant="body2" sx={{ color: '#1B5E20', fontSize: '0.8rem', fontWeight: 600 }}>
                  Instant Group Bookings →
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.5,
                  }}
                >
                  <EmailOutlinedIcon sx={{ color: '#1B5E20' }} />
                </Box>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: '#4B5563', mb: 0.5 }}>
                  EMAIL INQUIRIES
                </Typography>
                <Typography
                  className="font-display"
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    color: '#123524',
                    mb: 0.75,
                    wordBreak: 'break-word',
                  }}
                >
                  {companyInfo.email}
                </Typography>
                <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.8rem' }}>
                  Custom Itineraries & Retreats
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 2.5 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: '#E8F5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 1.5,
                  }}
                >
                  <LocationOnOutlinedIcon sx={{ color: '#1B5E20' }} />
                </Box>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.7rem', color: '#4B5563', mb: 0.5 }}>
                  BASECAMP TAPOVAN
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', color: '#123524', mb: 0.5, lineHeight: 1.4 }}>
                  Main Badrinath Rd, Near Laxman Jhula, Rishikesh 249192
                </Typography>
                <Typography variant="body2" sx={{ color: '#D97706', fontSize: '0.78rem', fontWeight: 600 }}>
                  Free Camper Parking Available
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 2-Column Main Split: Form + Basecamp Info */}
        <Grid container spacing={4} sx={{ alignItems: 'flex-start' }}>
          {/* Left: Validated Contact & Booking Form */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Card sx={{ p: { xs: 2.5, md: 4 } }}>
              <Typography
                className="font-mono-tech"
                sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#1B5E20', mb: 0.5 }}
              >
                EXPEDITION DESK
              </Typography>
              <Typography
                variant="h3"
                className="font-display"
                sx={{ fontSize: { xs: '1.5rem', md: '1.9rem' }, fontWeight: 700, color: '#123524', mb: 1 }}
              >
                Book Your Himalayan Adventure
              </Typography>
              <Typography variant="body2" sx={{ color: '#4B5563', mb: 3 }}>
                Fill out the details below to lock your river permits, bungee slots, or
                Shivpuri camp reservations. Rapid response within 15 minutes.
              </Typography>

              {submitted ? (
                <Box sx={{ py: 3 }}>
                  <Alert
                    icon={<CheckCircleOutlineIcon />}
                    severity="success"
                    sx={{ mb: 3, borderRadius: 2 }}
                  >
                    <strong>Inquiry Received!</strong> Thank you, {fullName}. Our Tapovan
                    basecamp coordinator has logged your request for{' '}
                    <strong>{selectedActivity}</strong> ({groupSize}) on{' '}
                    <strong>{preferredDate}</strong>.
                  </Alert>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleSubmitAnotherInquiry}
                  >
                    Submit Another Inquiry
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.25}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        placeholder="e.g. Aarav Sharma"
                        value={fullName}
                        onChange={handleFullNameChange}
                        error={Boolean(errors.fullName)}
                        helperText={errors.fullName}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        type="email"
                        label="Email Address"
                        placeholder="aarav@domain.com"
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(errors.email)}
                        helperText={errors.email}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Phone / WhatsApp"
                        placeholder="+91 98765 00000"
                        value={phone}
                        onChange={handlePhoneChange}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        type="date"
                        label="Preferred Adventure Date"
                        slotProps={{ inputLabel: { shrink: true } }}
                        value={preferredDate}
                        onChange={handlePreferredDateChange}
                        error={Boolean(errors.preferredDate)}
                        helperText={errors.preferredDate}
                      />
                    </Grid>
                  </Grid>

                  {/* Activity Tag Selector */}
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#123524', mb: 1.25 }}>
                      Select Desired Activity
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {activityTags.map((tag) => {
                        const active = selectedActivity === tag;
                        return (
                          <Button
                            key={tag}
                            size="small"
                            variant={active ? 'contained' : 'outlined'}
                            color="primary"
                            onClick={handleActivitySelect(tag)}
                            sx={{
                              borderRadius: 2,
                              px: 1.75,
                              py: 0.75,
                              bgcolor: active ? '#123524' : '#F8FAF5',
                              color: active ? '#FFFFFF' : '#1F2937',
                              borderColor: active ? '#123524' : 'rgba(18,53,36,0.16)',
                            }}
                          >
                            {tag}
                          </Button>
                        );
                      })}
                    </Box>
                  </Box>

                  {/* Group Size Selector */}
                  <Box sx={{ mt: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#123524', mb: 1.25 }}>
                      Group Size
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {groupSizes.map((size) => {
                        const active = groupSize === size;
                        return (
                          <Button
                            key={size}
                            size="small"
                            variant={active ? 'contained' : 'outlined'}
                            color={active ? 'secondary' : 'primary'}
                            onClick={handleGroupSizeSelect(size)}
                            sx={{
                              borderRadius: 2,
                              px: 1.75,
                              py: 0.75,
                              bgcolor: active ? '#FFC107' : '#F8FAF5',
                              color: '#123524',
                              borderColor: active ? '#FFC107' : 'rgba(18,53,36,0.16)',
                            }}
                          >
                            {size}
                          </Button>
                        );
                      })}
                    </Box>
                  </Box>

                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Message / Dietary & Transport Requirements"
                    placeholder="Tell us if you need airport pickup from Dehradun, riverside camp cottages, or vegetarian meals..."
                    value={message}
                    onChange={handleMessageChange}
                    sx={{ mt: 3 }}
                  />

                  <Box sx={{ mt: 2 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={agreedSafety}
                          onChange={handleSafetyChange}
                          color="primary"
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.82rem' }}>
                          I agree to Uttarakhand Tourism river safety guidelines and confirm that all group members meet basic health standards.
                        </Typography>
                      }
                    />
                    {result && <FormHelperText error={result === 'Error'}>{result}</FormHelperText>}
                    {errors.agreedSafety && (
                      <FormHelperText error>{errors.agreedSafety}</FormHelperText>
                    )}
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2.5, py: 1.5 }}
                  >
                    Submit Inquiry / Book Now
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>

          {/* Right Column: Map, Seasonality, Rescue Dispatch, FAQs */}
          <Grid size={{ xs: 12, lg: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* How to Reach Us + Google Maps Embed Placeholder */}
              <Card sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                  <Typography
                    className="font-mono-tech"
                    sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20' }}
                  >
                    HOW TO REACH US
                  </Typography>
                  <Typography
                    className="font-mono-tech"
                    sx={{
                      fontSize: '0.7rem',
                      bgcolor: '#FFF8E1',
                      color: '#785900',
                      px: 1,
                      py: 0.3,
                      borderRadius: 1,
                      fontWeight: 600,
                    }}
                  >
                    Basecamp Tapovan
                  </Typography>
                </Box>

                {/* Styled Google Map Embed */}
                <Box
                  sx={{
                    position: 'relative',
                    borderRadius: 2.5,
                    overflow: 'hidden',
                    border: '1px solid rgba(18, 53, 36, 0.14)',
                    height: 220,
                    mb: 2,
                    bgcolor: '#E8F5E9',
                  }}
                >
                  <Box
                    component="iframe"
                    title="Rishikesh Adventure X Tapovan Basecamp Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=78.3080%2C30.1180%2C78.3480%2C30.1420&layer=mapnik&marker=30.1305%2C78.3275"
                    sx={{ width: '100%', height: '100%', border: 0 }}
                  />
                  <Button
                    component="a"
                    href="https://maps.google.com/?q=Tapovan+Rishikesh+Uttarakhand+249192"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="contained"
                    color="primary"
                    startIcon={<MapOutlinedIcon />}
                    sx={{
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                      fontSize: '0.75rem',
                    }}
                  >
                    Open in Google Maps
                  </Button>
                </Box>

                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#F8FAF5' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}>
                        <FlightTakeoffOutlinedIcon sx={{ fontSize: 16, color: '#1B5E20' }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '0.82rem', color: '#123524' }}>
                          Jolly Grant Airport
                        </Typography>
                      </Box>
                      <Typography className="tabular-nums" sx={{ fontSize: '0.76rem', color: '#4B5563' }}>
                        21 km · 35 Mins drive
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#F8FAF5' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5 }}>
                        <TrainOutlinedIcon sx={{ fontSize: 16, color: '#1B5E20' }} />
                        <Typography sx={{ fontWeight: 700, fontSize: '0.82rem', color: '#123524' }}>
                          Haridwar Junction
                        </Typography>
                      </Box>
                      <Typography className="tabular-nums" sx={{ fontSize: '0.76rem', color: '#4B5563' }}>
                        29 km · 45 Mins express
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>

              {/* Expedition Timings & Seasonality */}
              {/* <Card sx={{ p: 3 }}>
                <Typography
                  className="font-mono-tech"
                  sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20', mb: 2 }}
                >
                  EXPEDITION TIMINGS & SEASONALITY
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.84rem', color: '#123524' }}>
                      Sept – Dec (Autumn Clear Waters)
                    </Typography>
                    <Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: '#1B5E20' }}>
                      Prime Season
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={95} color="primary" sx={{ height: 6, borderRadius: 3 }} />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.84rem', color: '#123524' }}>
                      Feb – June (Summer Alpine Rapids)
                    </Typography>
                    <Typography sx={{ fontSize: '0.74rem', fontWeight: 700, color: '#D97706' }}>
                      High Flow
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={85} color="secondary" sx={{ height: 6, borderRadius: 3 }} />
                </Box>

                <Box sx={{ mb: 2.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.84rem', color: '#4B5563' }}>
                      July – Aug (Monsoon River Closure)
                    </Typography>
                    <Typography sx={{ fontSize: '0.74rem', fontWeight: 600, color: '#4B5563' }}>
                      Treks & Camps Only
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={35} sx={{ height: 6, borderRadius: 3, bgcolor: '#E5E7EB' }} />
                </Box>

                <Grid container spacing={1.5} sx={{ pt: 1.5, borderTop: '1px solid rgba(18,53,36,0.08)' }}>
                  <Grid size={{ xs: 6 }}>
                    <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                      BASECAMP COUNTER
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.82rem', color: '#123524' }}>
                      {companyInfo.operatingHours}
                    </Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#4B5563' }}>
                      FIRST RIVER LAUNCH
                    </Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.82rem', color: '#123524' }}>
                      {companyInfo.firstLaunchTime}
                    </Typography>
                  </Grid>
                </Grid>
              </Card> */}

              {/* River Rescue Dispatch */}
              <Card sx={{ p: 3, bgcolor: '#123524', color: '#FFFFFF' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <LocalHospitalOutlinedIcon sx={{ color: '#FFC107', fontSize: 20 }} />
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.75rem', color: '#FFC107', fontWeight: 600 }}>
                    RIVER RESCUE DISPATCH
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)', mb: 2, lineHeight: 1.6 }}>
                  Direct coordination link with Uttarakhand SDRF, rapid response safety
                  kayaks, and AIIMS Rishikesh medical evacuation protocols.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)' }}>
                    24-HR RESCUE HOTLINE
                  </Typography>
                  <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, color: '#FFC107', fontSize: '1.05rem' }}>
                    {companyInfo.rescueHotline}
                  </Typography>
                </Box>
              </Card>

              {/* Basecamp FAQs */}
              <Card sx={{ p: 2.5 }}>
                <Typography className="font-mono-tech" sx={{ fontSize: '0.72rem', color: '#1B5E20', fontWeight: 600, mb: 1.5 }}>
                  BASECAMP FAQ
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {basecampFaqs.map((faq) => (
                    <Accordion key={faq.id} sx={{ bgcolor: '#F8FAF5' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1B5E20' }} />}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.88rem', color: '#123524' }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" sx={{ color: '#4B5563', fontSize: '0.82rem', lineHeight: 1.6 }}>
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Highlight Photo Strip */}
        <Grid container spacing={2.5} sx={{ mt: 5 }}>
          {activities.slice(0, 3).map((act) => (
            <Grid key={act.id} size={{ xs: 12, md: 4 }}>
              <Link to={`/adventures/${act.slug}`} style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '16 / 10',
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={act.image}
                    alt={act.title}
                    referrerPolicy="no-referrer"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(18,53,36,0) 35%, rgba(18,53,36,0.88) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 2.25,
                    }}
                  >
                    <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: '#FFC107' }}>
                      {act.location}
                    </Typography>
                    <Typography className="font-display" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.1rem' }}>
                      {act.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
