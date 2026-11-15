import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAdventureContext } from '../../context/provider';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const whyIconMap = {
  verified: <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  guides: <HikingOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  flexible: <EventRepeatOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  eco: <ForestOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
};

const safetyIconMap = {
  award: <EmojiEventsOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  shield: <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  medical: <LocalHospitalOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  weather: <EventAvailableOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
};

export const About: React.FC = () => {
  const {
    companyInfo,
    whyChooseItems,
    safetyStandards,
    rishikeshRegions,
    heroStats,
    activities,
    openBookingModal,
  } = useAdventureContext();

  const campImg = activities[2]?.image || activities[0]?.image;
  const trekImg = activities[5]?.image || activities[0]?.image;

  return (
    <Box>
      {/* Hero Banner */}
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
              About Us
            </Typography>
          </Breadcrumbs>

          <Typography
            className="font-mono-tech"
            sx={{ color: '#FFD54F', fontSize: '0.78rem', fontWeight: 600, mb: 1 }}
          >
            ESTABLISHED {companyInfo.establishedYear} · TAPOVAN & SHIVPURI, RISHIKESH
          </Typography>
          <Typography
            variant="h1"
            className="font-display"
            sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, fontWeight: 700, mb: 2, maxWidth: 780 }}
          >
            Born on the Ganga. Built for Safe Himalayan Adventure.
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 680, lineHeight: 1.7 }}
          >
            Founded by Garhwali mountaineers and certified swift-water rescue captains,{' '}
            {companyInfo.name} exists to share the untamed majesty of Rishikesh with
            world-class safety and environmental stewardship.
          </Typography>
        </Container>
      </Box>

      {/* Our Story & Mission */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid container spacing={5} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Typography
              className="font-mono-tech"
              sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20', mb: 1 }}
            >
              OUR STORY & MISSION
            </Typography>
            <Typography
              variant="h2"
              className="font-display"
              sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 700, color: '#123524', mb: 2.5 }}
            >
              Elevating River & Mountain Outfitting in Uttarakhand
            </Typography>
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.75, mb: 2 }}>
              What began in {companyInfo.establishedYear} with two Hypalon rafts and a single
              campsite on the silver sands of Shivpuri has grown into Rishikesh’s most
              trusted adventure collective. Every season, our local Sherpas and IRF-certified
              river masters guide solo backpackers, families, and corporate expeditions
              across roaring Class IV rapids and high Himalayan ridges.
            </Typography>
            <Typography variant="body1" sx={{ color: '#374151', lineHeight: 1.75, mb: 3 }}>
              <strong>Our Mission:</strong> Make authentic Himalayan adrenaline accessible
              without ever compromising human safety or the ecological purity of the Ganga
              basin. We run plastic-free riverside camps, enforce strict gear retirement
              cycles, and invest in local youth wilderness rescue training.
            </Typography>

            <Grid container spacing={2}>
              {heroStats.map((stat) => (
                <Grid key={stat.id} size={{ xs: 6 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      bgcolor: '#FFFFFF',
                      border: '1px solid rgba(18,53,36,0.1)',
                    }}
                  >
                    <Typography
                      className="font-display tabular-nums"
                      sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#1B5E20' }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4B5563', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Box
                  component="img"
                  src={campImg}
                  alt="Shivpuri riverside camp"
                  referrerPolicy="no-referrer"
                  sx={{
                    width: '100%',
                    height: { xs: 240, md: 360 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: '0 12px 24px -6px rgba(18,53,36,0.15)',
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }} sx={{ mt: { sm: 4 } }}>
                <Box
                  component="img"
                  src={trekImg}
                  alt="Himalayan waterfall trek"
                  referrerPolicy="no-referrer"
                  sx={{
                    width: '100%',
                    height: { xs: 240, md: 360 },
                    objectFit: 'cover',
                    borderRadius: 3,
                    boxShadow: '0 12px 24px -6px rgba(18,53,36,0.15)',
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us */}
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 6, md: 8 }, borderTop: '1px solid rgba(18,53,36,0.06)' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle
            eyebrow="Our Edge"
            title="Why Adventurers Choose Rishikesh Adventure X"
            subtitle="Local Himalayan instinct paired with internationally audited equipment and transparent hospitality."
          />

          <Grid container spacing={3}>
            {whyChooseItems.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card sx={{ height: '100%', bgcolor: '#F8FAF5', boxShadow: 'none', border: '1px solid rgba(27,94,32,0.12)' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 2,
                        bgcolor: '#E8F5E9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {whyIconMap[item.iconName]}
                    </Box>
                    <Typography variant="h6" className="font-display" sx={{ fontWeight: 700, color: '#123524', mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.65 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Safety Standards */}
      <Box sx={{ bgcolor: '#123524', color: '#FFFFFF', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle
            light
            eyebrow="Certified Protocols"
            title="Adventure Experience & Safety Standards"
            subtitle="We operate strictly under Uttarakhand Tourism Development Board, IRF, and IMF wilderness safety standards."
          />

          <Grid container spacing={3}>
            {safetyStandards.map((std) => (
              <Grid key={std.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    boxShadow: 'none',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: 'rgba(255,193,7,0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {safetyIconMap[std.iconName]}
                    </Box>
                    <Typography variant="h6" className="font-display" sx={{ fontWeight: 700, color: '#FFFFFF', mb: 1 }}>
                      {std.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>
                      {std.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Rishikesh Tourism Information */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 9 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle
          eyebrow="Explore The Region"
          title="Rishikesh Adventure & Tourism Guide"
          subtitle="Situated where the sacred Ganga descends from the Garhwal Himalayas onto the Shivalik plains, Rishikesh offers four distinct expedition zones."
        />

        <Grid container spacing={3} sx={{ mb: 5 }}>
          {rishikeshRegions.map((reg) => (
            <Grid key={reg.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                    <TerrainOutlinedIcon sx={{ color: '#1B5E20' }} />
                    <Typography className="font-mono-tech" sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#1B5E20' }}>
                      {reg.elevation}
                    </Typography>
                  </Box>
                  <Typography variant="h6" className="font-display" sx={{ fontWeight: 700, color: '#123524', mb: 0.5 }}>
                    {reg.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#D97706', mb: 1.25 }}>
                    {reg.knownFor}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.65 }}>
                    {reg.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            to="/adventures"
            variant="contained"
            color="secondary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ mr: 2, mb: { xs: 1.5, sm: 0 } }}
          >
            Explore All Expeditions
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => openBookingModal()}
          >
            Plan Your Trip With Us
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
