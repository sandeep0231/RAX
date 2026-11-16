import React, { useEffect, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useAdventureContext } from '../../context/provider';

export const BookingModal: React.FC = () => {
  const {
    activities,
    companyInfo,
    isBookingModalOpen,
    bookingModalInitial,
    closeBookingModal,
  } = useAdventureContext();

  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [selectedActivity, setSelectedActivity] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [participants, setParticipants] = useState<number>(2);
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (isBookingModalOpen) {
      setSelectedActivity(
        bookingModalInitial.activityTitle || activities[0]?.title || ''
      );
      setPreferredDate(bookingModalInitial.date || '');
      setParticipants(bookingModalInitial.participants || 2);
      setSubmittedRef(null);
      setErrors({});
    }
  }, [isBookingModalOpen, bookingModalInitial, activities]);

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    if (!/^\+?[\d\s-]{8,15}$/.test(phone.trim())) {
      nextErrors.phone = 'Enter a valid 10-digit phone or WhatsApp number.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!preferredDate) {
      nextErrors.preferredDate = 'Please select your preferred adventure date.';
    }
    if (participants < 1 || participants > 120) {
      nextErrors.participants = 'Group size must be between 1 and 120.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const refCode = `RAX-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(refCode);
  };

  const matchedActivity = activities.find((a) => a.title === selectedActivity);
  const estimatedTotal = matchedActivity ? matchedActivity.price * participants : 0;

  const whatsappMessage = encodeURIComponent(
    `Hello ${companyInfo.name}, I would like to reserve "${selectedActivity || 'Rishikesh Adventure'}" for ${participants} adventurer(s)${preferredDate ? ` on ${preferredDate}` : ''}. Name: ${fullName || 'Guest'}.`
  );
  const cleanWaDigits = companyInfo.whatsappNumber.replace(/\D/g, '');
  const whatsappHref = `https://wa.me/${cleanWaDigits}?text=${whatsappMessage}`;

  return (
    <Dialog
      open={isBookingModalOpen}
      onClose={closeBookingModal}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          bgcolor: '#123524',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
          px: 3,
        }}
      >
        <Box>
          <Typography className="font-display" sx={{ fontWeight: 700, fontSize: '1.25rem' }}>
            Reserve Your Rishikesh Adventure
          </Typography>
          <Typography sx={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.78)' }}>
            Zero advance fee · Instant permit & slot confirmation
          </Typography>
        </Box>
        <IconButton
          aria-label="Close booking dialog"
          onClick={closeBookingModal}
          sx={{ color: '#FFFFFF' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: { xs: 2.5, sm: 3.5 }, bgcolor: '#F8FAF5' }}>
        {submittedRef ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <CheckCircleOutlineIcon sx={{ fontSize: 56, color: '#1B5E20', mb: 1.5 }} />
            <Typography
              className="font-display"
              sx={{ fontWeight: 700, fontSize: '1.4rem', color: '#123524', mb: 1 }}
            >
              Reservation Request Confirmed
            </Typography>
            <Typography variant="body2" sx={{ color: '#4B5563', mb: 2.5, lineHeight: 1.65 }}>
              Thank you, <strong>{fullName}</strong>. Your permit request for{' '}
              <strong>{selectedActivity}</strong> ({participants} adventurer
              {participants > 1 ? 's' : ''} on {preferredDate}) has been logged under
              reference <strong className="font-mono-tech">{submittedRef}</strong>. Our
              Tapovan expedition coordinator will reach out within 15 minutes.
            </Typography>

            <Alert severity="success" sx={{ textAlign: 'left', mb: 3 }}>
              Estimated Expedition Total: <strong>₹{estimatedTotal.toLocaleString('en-IN')}</strong>{' '}
              (includes certified gear & river permits).
            </Alert>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5, justifyContent: 'center' }}>
              <Button
                component="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                startIcon={<WhatsAppIcon />}
              >
                Confirm on WhatsApp
              </Button>
              <Button variant="outlined" color="primary" onClick={closeBookingModal}>
                Done
              </Button>
            </Box>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ pt: 1 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12 }}>
                <TextField
                  select
                  fullWidth
                  label="Select Adventure Activity"
                  value={selectedActivity}
                  onChange={(e) => setSelectedActivity(e.target.value)}
                >
                  {activities.map((act) => (
                    <MenuItem key={act.id} value={act.title}>
                      {act.title} (₹{act.price.toLocaleString('en-IN')})
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Full Name"
                  placeholder="e.g. Aarav Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  label="Phone / WhatsApp"
                  placeholder="+91 98765 00000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email Address"
                  placeholder="aarav@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="date"
                  label="Preferred Date"
                  slotProps={{ inputLabel: { shrink: true } }}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  error={Boolean(errors.preferredDate)}
                  helperText={errors.preferredDate}
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="number"
                  label="Number of Adventurers"
                  slotProps={{ htmlInput: { min: 1, max: 120 } }}
                  value={participants}
                  onChange={(e) => setParticipants(Math.max(1, Number(e.target.value)))}
                  error={Boolean(errors.participants)}
                  helperText={errors.participants}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  label="Special Notes (Optional)"
                  placeholder="Pickup request, vegetarian camp meals, or combo add-ons..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />
              </Grid>
            </Grid>

            {matchedActivity && (
              <Box
                sx={{
                  mt: 2.5,
                  p: 2,
                  borderRadius: 2,
                  bgcolor: '#E8F5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant="body2" sx={{ color: '#123524', fontWeight: 600 }}>
                  Estimated Total ({participants} × ₹{matchedActivity.price.toLocaleString('en-IN')})
                </Typography>
                <Typography
                  className="font-display tabular-nums"
                  sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#1B5E20' }}
                >
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </Typography>
              </Box>
            )}

            <Box sx={{ mt: 2.5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                size="large"
                sx={{ py: 1.35 }}
              >
                Confirm Slot Request
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
                sx={{ py: 1.35, bgcolor: '#FFFFFF' }}
              >
                Book via WhatsApp
              </Button>
              
            </Box>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
