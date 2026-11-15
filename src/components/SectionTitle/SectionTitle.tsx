import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === 'center' ? 720 : '100%',
        mx: align === 'center' ? 'auto' : 0,
        mb: { xs: 4, md: 5 },
      }}
    >
      {eyebrow && (
        <Typography
          className="font-mono-tech"
          sx={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: light ? '#FFD54F' : '#1B5E20',
            mb: 1,
          }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography
        variant="h2"
        className="font-display"
        sx={{
          fontSize: { xs: '1.75rem', sm: '2.15rem', md: '2.5rem' },
          fontWeight: 700,
          color: light ? '#FFFFFF' : '#123524',
          textWrap: 'balance',
          mb: subtitle ? 1.5 : 0,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? 'rgba(255, 255, 255, 0.85)' : '#4B5563',
            fontSize: { xs: '0.975rem', md: '1.05rem' },
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
