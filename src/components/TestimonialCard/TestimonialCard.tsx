import React from 'react';
import { Avatar, Box, Card, CardContent, Rating, Typography } from '@mui/material';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 0.5,
      }}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
        <Box sx={{ mb: 1.5 }}>
          <Rating
            value={testimonial.rating}
            readOnly
            size="small"
            sx={{ color: '#FFC107' }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            color: '#1F2937',
            fontStyle: 'italic',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            mb: 3,
            flexGrow: 1,
          }}
        >
          “{testimonial.quote}”
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            pt: 2,
            borderTop: '1px solid rgba(18, 53, 36, 0.08)',
          }}
        >
          <Avatar
            sx={{
              bgcolor: '#1B5E20',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '0.875rem',
              width: 40,
              height: 40,
            }}
          >
            {testimonial.initials}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{ fontWeight: 700, color: '#123524', fontSize: '0.925rem', lineHeight: 1.3 }}
            >
              {testimonial.name}
            </Typography>
            <Typography sx={{ color: '#4B5563', fontSize: '0.78rem' }}>
              {testimonial.locationAndTrip}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
