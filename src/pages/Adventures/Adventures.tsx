import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import { useAdventureContext } from '../../context/provider';
import ActivityCard from '../../components/ActivityCard/ActivityCard';
import type { ActivityCategory } from '../../types';

const categories: ActivityCategory[] = [
  'All',
  'River Rafting',
  'Bungee & Extreme',
  'Camping',
  'Trekking & Trails',
  'Kayaking & Group',
];

const safetyIcons = {
  award: <EmojiEventsOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  shield: <VerifiedUserOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  medical: <LocalHospitalOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
  weather: <EventAvailableOutlinedIcon sx={{ fontSize: 26, color: '#FFC107' }} />,
};

export const Adventures: React.FC = () => {
  const { activities, safetyStandards, companyInfo, openBookingModal } =
    useAdventureContext();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  const filteredActivities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const list = activities.filter((act) => {
      const matchesCategory =
        selectedCategory === 'All' || act.category === selectedCategory;
      const matchesDifficulty =
        difficultyFilter === 'All' || act.difficulty === difficultyFilter;
      const matchesSearch =
        !query ||
        act.title.toLowerCase().includes(query) ||
        act.shortDescription.toLowerCase().includes(query) ||
        act.location.toLowerCase().includes(query) ||
        act.category.toLowerCase().includes(query);

      return matchesCategory && matchesDifficulty && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [activities, searchQuery, selectedCategory, difficultyFilter, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setDifficultyFilter('All');
    setSortBy('featured');
  };

  const whatsappGroupHref = `https://wa.me/${companyInfo.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent('Hi Rishikesh Adventure X, we are planning a group adventure retreat in Rishikesh and would like a custom quote.')}`;

  return (
    <Box>
      {/* Top Dark Green Banner */}
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
              Adventures
            </Typography>
          </Breadcrumbs>

          <Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography
                variant="h1"
                className="font-display"
                sx={{
                  fontSize: { xs: '2.1rem', md: '3rem' },
                  fontWeight: 700,
                  mb: 1.5,
                }}
              >
                All Adventure Activities & Expeditions
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 660, lineHeight: 1.65 }}
              >
                Choose from world-class white water rafting, 83m bungee jumps, giant
                canyon swings, luxury riverside camping, waterfall treks, and kayaking
                clinics—all guided by licensed rescue professionals.
              </Typography>
            </Grid>

            {/* <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2.5,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                }}
              >
                 <Box>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)' }}>
                    RIVER DISCHARGE
                  </Typography>
                  <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFC107' }}>
                    {companyInfo.riverDischarge}
                  </Typography>
                </Box>  
                 <Box>
                  <Typography className="font-mono-tech" sx={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)' }}>
                    SAFETY RATED
                  </Typography>
                  <Typography className="font-display tabular-nums" sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#FFC107' }}>
                    100% IRF
                  </Typography>
                </Box>  
                
              </Box>
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 }, px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Filter Bar */}
        <Card sx={{ p: { xs: 2, md: 2.5 }, mb: 4 }}>
          <Grid container spacing={2} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search rapids, expeditions (e.g. 'Marine Drive', 'Bungee', 'Camping')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#4B5563' }} />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <TextField
                select
                fullWidth
                size="small"
                label="Difficulty"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
              >
                <MenuItem value="All">All Difficulties</MenuItem>
                <MenuItem value="Beginner">Beginner Friendly</MenuItem>
                <MenuItem value="Moderate">Moderate Thrill</MenuItem>
                <MenuItem value="Extreme">Extreme Adrenaline</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 6, md: 3 }}>
              <TextField
                select
                fullWidth
                size="small"
                label="Sort By"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
              >
                <MenuItem value="featured">Featured First</MenuItem>
                <MenuItem value="price-asc">Price: Low to High</MenuItem>
                <MenuItem value="price-desc">Price: High to Low</MenuItem>
              </TextField>
            </Grid>
          </Grid>

          {/* Category Buttons */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <Button
                  key={cat}
                  size="small"
                  variant={active ? 'contained' : 'outlined'}
                  color="primary"
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 0.65,
                    fontSize: '0.82rem',
                    borderColor: active ? '#1B5E20' : 'rgba(18, 53, 36, 0.2)',
                    bgcolor: active ? '#123524' : '#F8FAF5',
                    color: active ? '#FFFFFF' : '#1F2937',
                    '&:hover': {
                      bgcolor: active ? '#1B5E20' : '#E8F5E9',
                      borderColor: '#1B5E20',
                    },
                  }}
                >
                  {cat === 'All' ? `All Activities (${activities.length})` : cat}
                </Button>
              );
            })}
          </Box>
        </Card>

        {/* Results Meta */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1,
            mb: 3,
          }}
        >
          <Typography variant="body2" sx={{ color: '#374151', fontWeight: 600 }}>
            Showing {filteredActivities.length} verified expedition
            {filteredActivities.length === 1 ? '' : 's'}
          </Typography>
          <Typography variant="body2" sx={{ color: '#1B5E20', fontWeight: 500 }}>
            100% Certified Safety Gear Included
          </Typography>
        </Box>

        {/* Cards Grid */}
        {filteredActivities.length > 0 ? (
          <Grid container spacing={3}>
            {filteredActivities.map((activity) => (
              <Grid key={activity.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <ActivityCard activity={activity} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Card sx={{ p: 6, textAlign: 'center', bgcolor: '#FFFFFF' }}>
            <Typography
              className="font-display"
              sx={{ fontWeight: 700, fontSize: '1.35rem', color: '#123524', mb: 1 }}
            >
              No matching expeditions found
            </Typography>
            <Typography variant="body2" sx={{ color: '#4B5563', mb: 3 }}>
              Try clearing your search query or switching to another adventure category.
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleResetFilters}>
              Reset All Filters
            </Button>
          </Card>
        )}

        {/* Group Retreat Banner */}
        <Card
          sx={{
            mt: 6,
            p: { xs: 3, md: 4 },
            bgcolor: '#E8F5E9',
            border: '1px solid rgba(27, 94, 32, 0.16)',
            boxShadow: 'none',
          }}
        >
          <Grid container spacing={3} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2.5,
                    bgcolor: '#FFC107',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <GroupsOutlinedIcon sx={{ color: '#123524', fontSize: 28 }} />
                </Box>
                <Box>
                  <Typography
                    className="font-mono-tech"
                    sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#1B5E20', mb: 0.5 }}
                  >
                    CUSTOM HIMALAYAN OUTFITTING
                  </Typography>
                  <Typography
                    variant="h5"
                    className="font-display"
                    sx={{ fontWeight: 700, color: '#123524', mb: 0.75 }}
                  >
                    Planning a Corporate or Large Group Retreat?
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#374151', lineHeight: 1.6 }}>
                    We customize multi-day river itineraries, team-building rapids, and
                    private riverside campsites in Shivpuri for 10 to 120 adventurers.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: { md: 'flex-end' } }}>
                <Button
                  component="a"
                  href={whatsappGroupHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  color="primary"
                  startIcon={<WhatsAppIcon />}
                  sx={{ bgcolor: '#FFFFFF' }}
                >
                  Chat on WhatsApp
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    openBookingModal({
                      activityTitle: 'Ultimate Group Adventure & Cliff Jump Package',
                      participants: 15,
                    })
                  }
                >
                  Request Group Quote
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Safety Charter Section */}
      <Box sx={{ bgcolor: '#123524', color: '#FFFFFF', py: { xs: 7, md: 9 }, mt: 4 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box sx={{ mb: 5 }}>
            <Typography
              className="font-mono-tech"
              sx={{ fontSize: '0.75rem', color: '#FFC107', fontWeight: 600, mb: 1 }}
            >
              ZERO-COMPROMISE SAFETY CHARTER
            </Typography>
            <Typography
              variant="h2"
              className="font-display"
              sx={{ fontSize: { xs: '1.85rem', md: '2.4rem' }, fontWeight: 700, mb: 1.25 }}
            >
              The Rishikesh Adventure X Safety Guarantee
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.82)', maxWidth: 640 }}>
              Every rapid run, free-fall harness, and waterfall rappel adheres strictly to
              Indian Mountaineering Foundation (IMF) and International Rafting Federation
              (IRF) mandates.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {safetyStandards.map((std) => (
              <Grid key={std.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: 'none',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 193, 7, 0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                      }}
                    >
                      {safetyIcons[std.iconName]}
                    </Box>
                    <Typography
                      variant="h6"
                      className="font-display"
                      sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}
                    >
                      {std.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}
                    >
                      {std.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Adventures;
