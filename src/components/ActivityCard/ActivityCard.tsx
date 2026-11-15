import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import { useAdventureContext } from '../../context/provider';
import type { AdventureActivity } from '../../types';

interface ActivityCardProps {
  activity: AdventureActivity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { openBookingModal } = useAdventureContext();
  const [imageError, setImageError] = useState<boolean>(false);

  const handleBookNow = () => {
    openBookingModal({
      activityTitle: activity.title,
      participants: 2,
    });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 14px 28px -6px rgba(18, 53, 36, 0.14), 0 4px 10px -2px rgba(18, 53, 36, 0.05)',
        },
      }}
    >
      {/* Media Container with Bottom Contrast Scrim */}
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '4 / 3',
          width: '100%',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #123524 0%, #2E7D32 100%)',
        }}
      >
        {!imageError ? (
          <Box
            component="img"
            src={activity.image}
            alt={activity.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 350ms ease',
              '.MuiCard-root:hover &': {
                transform: 'scale(1.04)',
              },
            }}
          />
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#E8F5E9',
              p: 2,
              textAlign: 'center',
            }}
          >
            <TerrainOutlinedIcon sx={{ fontSize: 40, color: '#FFC107', mb: 1 }} />
            <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
              {activity.title}
            </Typography>
          </Box>
        )}

        {/* Scrim Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(18,53,36,0.05) 35%, rgba(18,53,36,0.82) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Overlaid Price & Technical Metric Footer */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 1,
          }}
        >
          <Typography
            className="font-mono-tech"
            sx={{
              color: '#E8F5E9',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.03em',
            }}
          >
            {activity.distanceOrHeight}
          </Typography>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '0.7rem',
                lineHeight: 1.1,
              }}
            >
              Starting from
            </Typography>
            <Typography
              className="font-display tabular-nums"
              sx={{
                color: '#FFD54F',
                fontWeight: 700,
                fontSize: '1.35rem',
                lineHeight: 1.15,
              }}
            >
              ₹{activity.price.toLocaleString('en-IN')}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Card Body */}
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          p: 2.5,
          '&:last-child': { pb: 2.5 },
        }}
      >
        {/* Clean Unboxed Metadata Line */}
        <Typography
          className="font-mono-tech"
          sx={{
            fontSize: '0.72rem',
            fontWeight: 500,
            color: '#1B5E20',
            mb: 0.75,
          }}
        >
          {activity.category} · {activity.gradeBadge}
        </Typography>

        <Typography
          variant="h6"
          className="font-display"
          sx={{
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '#123524',
            lineHeight: 1.3,
            mb: 1,
          }}
        >
          {activity.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#4B5563',
            lineHeight: 1.6,
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flexGrow: 1,
          }}
        >
          {activity.shortDescription}
        </Typography>

        {/* Duration & Location Row */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1.5,
            py: 1.25,
            mb: 2,
            borderTop: '1px solid rgba(18, 53, 36, 0.08)',
            borderBottom: '1px solid rgba(18, 53, 36, 0.08)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6, minWidth: 0 }}>
            <AccessTimeOutlinedIcon sx={{ fontSize: 16, color: '#2E7D32', flexShrink: 0 }} />
            <Typography
              className="tabular-nums"
              sx={{ fontSize: '0.8rem', color: '#374151', fontWeight: 500, whiteSpace: 'nowrap' }}
            >
              {activity.duration}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 0 }}>
            <LocationOnOutlinedIcon sx={{ fontSize: 16, color: '#2E7D32', flexShrink: 0 }} />
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: '#374151',
                fontWeight: 500,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {activity.location}
            </Typography>
          </Box>
        </Box>

        {/* Dual Action Row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.25 }}>
          <Button
            component={Link}
            to={`/adventures/${activity.slug}`}
            variant="outlined"
            color="primary"
            size="medium"
            sx={{
              borderColor: 'rgba(27, 94, 32, 0.3)',
              color: '#123524',
              fontSize: '0.84rem',
              whiteSpace: 'nowrap',
              '&:hover': {
                borderColor: '#1B5E20',
                bgcolor: '#E8F5E9',
              },
            }}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={handleBookNow}
            sx={{
              fontSize: '0.84rem',
              whiteSpace: 'nowrap',
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
