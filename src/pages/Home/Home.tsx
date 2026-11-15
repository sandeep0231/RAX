import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import HikingOutlinedIcon from '@mui/icons-material/HikingOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useAdventureContext } from '../../context/provider';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const whyIconMap = {
  verified: <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  guides: <HikingOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  flexible: <EventRepeatOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
  eco: <ForestOutlinedIcon sx={{ fontSize: 26, color: '#1B5E20' }} />,
};

export const Home: React.FC = () => {
  const {
    activities,
    comboPackages,
    whyChooseItems,
    testimonials,
    galleryImages,
    faqData,
    heroStats,
    heroMedia,
    companyInfo,
    openBookingModal,
  } = useAdventureContext();

  const [expandedFaq, setExpandedFaq] = useState<string | false>('faq-1');

  const featuredActivities = activities.filter((act) => act.featured).slice(0, 4);
  const previewGallery = galleryImages.slice(0, 4);
  const homeFaqs = faqData.slice(0, 4);

  return (
    <Box>
      {/* 1. Full-Width Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 560, md: 640 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#123524',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={heroMedia.bannerImage}
          alt={heroMedia.bannerAlt}
          referrerPolicy="no-referrer"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 42%',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(95deg, rgba(18, 53, 36, 0.92) 0%, rgba(18, 53, 36, 0.74) 48%, rgba(18, 53, 36, 0.36) 100%)',
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: 'relative',
            zIndex: 2,
            pt: { xs: 7, md: 10 },
            pb: { xs: 5, md: 7 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Box sx={{ maxWidth: 680 }}>
            <Typography
              className="font-mono-tech"
              sx={{
                color: '#FFD54F',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                mb: 2,
              }}
            >
              RISHIKESH, UTTARAKHAND · CERTIFIED HIMALAYAN EXPEDITIONS
            </Typography>

            <Typography
              variant="h1"
              className="font-display"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '2.35rem', sm: '3.1rem', md: '3.75rem' },
                fontWeight: 700,
                lineHeight: 1.08,
                textWrap: 'balance',
                mb: 2.5,
              }}
            >
              Experience the Thrill of Adventure in Rishikesh
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.65,
                mb: 4,
                maxWidth: 590,
              }}
            >
              Unleash your adrenaline across Grade IV rapids on the sacred Ganges, India’s
              highest 83m cantilever bungee jump, Himalayan waterfall treks, and starlit
              riverside camping in Shivpuri.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Button
                component={Link}
                to="/adventures"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3.5, py: 1.5, fontSize: '0.975rem' }}
              >
                Explore Adventures
              </Button>
              <Button
                variant="contained"
                size="large"
                startIcon={<CalendarMonthOutlinedIcon />}
                onClick={() => openBookingModal()}
                sx={{
                  px: 3.5,
                  py: 1.5,
                  fontSize: '0.975rem',
                  bgcolor: '#E8F5E9',
                  color: '#123524',
                  '&:hover': {
                    bgcolor: '#FFFFFF',
                  },
                }}
              >
                Book Your Adventure
              </Button>
            </Box>
          </Box>
        </Container>

        {/* Hero Proof Strip */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            bgcolor: 'rgba(18, 53, 36, 0.88)',
            backdropFilter: 'blur(8px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.14)',
          }}
        >
          <Container maxWidth="xl" sx={{ py: 2.5, px: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={2}>
              {heroStats.map((stat) => (
                <Grid key={stat.id} size={{ xs: 6, md: 3 }}>
                  <Box>
                    <Typography
                      className="font-display tabular-nums"
                      sx={{
                        color: '#FFC107',
                        fontWeight: 700,
                        fontSize: { xs: '1.35rem', md: '1.65rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.84)',
                        fontSize: '0.82rem',
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* 2. Featured Himalayan Thrills */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            gap: 2,
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box sx={{ maxWidth: 640 }}>
            <Typography
              className="font-mono-tech"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#1B5E20',
                mb: 0.75,
              }}
            >
              HANDCRAFTED EXPEDITIONS
            </Typography>
            <Typography
              variant="h2"
              className="font-display"
              sx={{
                fontSize: { xs: '1.85rem', md: '2.4rem' },
                fontWeight: 700,
                color: '#123524',
                mb: 1,
              }}
            >
              Top Himalayan Thrills
            </Typography>
            <Typography variant="body1" sx={{ color: '#4B5563', lineHeight: 1.6 }}>
              Regulated by Uttarakhand Tourism Development Board. Every expedition includes
              rescue-rated equipment and IRF licensed river captains.
            </Typography>
          </Box>

          <Button
            component={Link}
            to="/adventures"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{ whiteSpace: 'nowrap', flexShrink: 0 }}
          >
            View All Adventures
          </Button>
        </Box>

        <Grid container spacing={3}>
          {featuredActivities.map((activity) => (
            <Grid key={activity.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ActivityCard activity={activity} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. Why Choose Us */}
      <Box sx={{ bgcolor: '#FFFFFF', borderTop: '1px solid rgba(18,53,36,0.06)', borderBottom: '1px solid rgba(18,53,36,0.06)' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle
            eyebrow="The Safe Frontier"
            title="Why Explorers Trust Us"
            subtitle="Adrenaline is exhilarating only when absolute safety is guaranteed. We combine international technical protocols with native Himalayan stewardship."
          />

          <Grid container spacing={3}>
            {whyChooseItems.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: '#F8FAF5',
                    boxShadow: 'none',
                    border: '1px solid rgba(27, 94, 32, 0.12)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2.5,
                        bgcolor: '#E8F5E9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {whyIconMap[item.iconName]}
                    </Box>
                    <Typography
                      variant="h6"
                      className="font-display"
                      sx={{ fontWeight: 700, fontSize: '1.08rem', color: '#123524', mb: 1 }}
                    >
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

      {/* 4. Popular Adventure Packages */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <SectionTitle
          eyebrow="Value Expeditions"
          title="Curated Multi-Adventure Combos"
          subtitle="Bundle high-octane river descents, canyon flights, and riverside stays into seamless weekend itineraries."
          align="left"
        />

        <Grid container spacing={3}>
          {comboPackages.map((combo, idx) => (
            <Grid key={combo.id} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: { xs: 2.5, md: 3.5 },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 1,
                      mb: 1.5,
                    }}
                  >
                    <Typography
                      className="font-mono-tech"
                      sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20' }}
                    >
                      {combo.duration} · {combo.location}
                    </Typography>
                    <Typography
                      className="font-mono-tech"
                      sx={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        px: 1.25,
                        py: 0.4,
                        borderRadius: 1.5,
                        bgcolor: idx === 0 ? '#FFC107' : '#E8F5E9',
                        color: '#123524',
                      }}
                    >
                      {combo.badgeLabel}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    className="font-display"
                    sx={{ fontWeight: 700, fontSize: '1.5rem', color: '#123524', mb: 1.25 }}
                  >
                    {combo.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: '#4B5563', lineHeight: 1.65, mb: 2.5 }}
                  >
                    {combo.description}
                  </Typography>

                  <Grid container spacing={1.25} sx={{ mb: 3 }}>
                    {combo.highlights.map((item) => (
                      <Grid key={item} size={{ xs: 12, sm: 6 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CheckCircleOutlineIcon sx={{ fontSize: 18, color: '#2E7D32' }} />
                          <Typography sx={{ fontSize: '0.86rem', color: '#1F2937', fontWeight: 500 }}>
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box
                  sx={{
                    pt: 2.5,
                    borderTop: '1px solid rgba(18, 53, 36, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography
                        className="tabular-nums"
                        sx={{
                          fontSize: '0.85rem',
                          color: '#6B7280',
                          textDecoration: 'line-through',
                        }}
                      >
                        ₹{combo.originalPrice.toLocaleString('en-IN')}
                      </Typography>
                      <Typography
                        className="font-mono-tech"
                        sx={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#1B5E20',
                          bgcolor: '#E8F5E9',
                          px: 0.9,
                          py: 0.25,
                          borderRadius: 1,
                        }}
                      >
                        {combo.savingsText}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
                      <Typography
                        className="font-display tabular-nums"
                        sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#123524' }}
                      >
                        ₹{combo.price.toLocaleString('en-IN')}
                      </Typography>
                      <Typography sx={{ fontSize: '0.82rem', color: '#4B5563' }}>
                        / person all-inclusive
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color={idx === 0 ? 'secondary' : 'primary'}
                    size="large"
                    onClick={() => openBookingModal({ activityTitle: combo.title })}
                    sx={{ px: 3 }}
                  >
                    {idx === 0 ? 'Claim Combo Deal' : 'Book Getaway'}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 5. Customer Testimonials */}
      <Box sx={{ bgcolor: '#EFF5EC', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <SectionTitle
            eyebrow="Verified Reviews"
            title="Voices From The Rapids"
            subtitle="Over 50,000 thrill-seekers have trusted Rishikesh Adventure X with their safety and Himalayan memories."
          />

          <Grid container spacing={3}>
            {testimonials.map((t) => (
              <Grid key={t.id} size={{ xs: 12, md: 4 }}>
                <TestimonialCard testimonial={t} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. Gallery Preview Section */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 }, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'flex-end' },
            justifyContent: 'space-between',
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              className="font-mono-tech"
              sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#1B5E20', mb: 0.75 }}
            >
              IN THE FIELD
            </Typography>
            <Typography
              variant="h2"
              className="font-display"
              sx={{ fontSize: { xs: '1.85rem', md: '2.35rem' }, fontWeight: 700, color: '#123524' }}
            >
              Moments Along the Ganga
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/gallery"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            Explore Full Gallery
          </Button>
        </Box>

        <Grid container spacing={2.5}>
          {previewGallery.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <Box
                  sx={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 16px -2px rgba(18, 53, 36, 0.1)',
                    '&:hover img': { transform: 'scale(1.05)' },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 300ms ease',
                      display: 'block',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(18,53,36,0) 40%, rgba(18,53,36,0.86) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      p: 2,
                    }}
                  >
                    <Typography
                      className="font-mono-tech"
                      sx={{ fontSize: '0.68rem', color: '#FFD54F', mb: 0.4 }}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.3 }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 7. FAQ Section */}
      <Box sx={{ bgcolor: '#FFFFFF', py: { xs: 7, md: 9 }, borderTop: '1px solid rgba(18,53,36,0.06)' }}>
        <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
          <SectionTitle
            eyebrow="Expedition FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before heading into the Himalayan outdoors."
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {homeFaqs.map((faq) => (
              <Accordion
                key={faq.id}
                expanded={expandedFaq === faq.id}
                onChange={(_, isExpanded) => setExpandedFaq(isExpanded ? faq.id : false)}
                sx={{ bgcolor: '#F8FAF5' }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#1B5E20' }} />}>
                  <Typography sx={{ fontWeight: 600, color: '#123524', fontSize: '1rem' }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>

      {/* 8. Bottom Conversion Banner */}
      <Box sx={{ bgcolor: '#123524', py: { xs: 7, md: 9 } }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid container spacing={4} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography
                className="font-mono-tech"
                sx={{ color: '#FFC107', fontSize: '0.78rem', fontWeight: 600, mb: 1.25 }}
              >
                INSTANT ADVANCE CONFIRMATION
              </Typography>
              <Typography
                variant="h2"
                className="font-display"
                sx={{
                  color: '#FFFFFF',
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                Ready to Conquer Rishikesh?
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.7, maxWidth: 600 }}
              >
                Book your expedition permits online in seconds or speak directly with our
                native Tapovan basecamp commanders. Guaranteed gear sanitization, escort
                safety kayakers, and Himalayan memories of a lifetime.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  maxWidth: 360,
                  ml: { md: 'auto' },
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<RocketLaunchOutlinedIcon />}
                  onClick={() => openBookingModal()}
                  sx={{ py: 1.5 }}
                >
                  Reserve Your Dates Online
                </Button>
                <Button
                  component="a"
                  href={`tel:${companyInfo.phonePrimary.replace(/\s/g, '')}`}
                  variant="contained"
                  size="large"
                  startIcon={<PhoneOutlinedIcon />}
                  sx={{
                    py: 1.5,
                    bgcolor: '#E8F5E9',
                    color: '#123524',
                    '&:hover': { bgcolor: '#FFFFFF' },
                  }}
                >
                  Hotline: {companyInfo.phonePrimary}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
