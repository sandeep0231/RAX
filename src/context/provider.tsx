import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  adventureActivities,
  comboPackages,
  companyInfo,
  faqData,
  galleryImages,
  heroMedia,
  heroStats,
  navigationItems,
  rishikeshRegions,
  safetyStandards,
  testimonials,
  whyChooseItems,
} from '../data';
import type { BookingModalInitialState } from '../types';
import { AdventureContext, type AdventureContextType } from './context';

interface AdventureProviderProps {
  children: React.ReactNode;
}

export const AdventureProvider: React.FC<AdventureProviderProps> = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingModalInitial, setBookingModalInitial] = useState<BookingModalInitialState>({});

  const openBookingModal = useCallback((initial?: BookingModalInitialState) => {
    setBookingModalInitial(initial ?? {});
    setIsBookingModalOpen(true);
  }, []);

  const closeBookingModal = useCallback(() => {
    setIsBookingModalOpen(false);
  }, []);

  const getActivityByIdOrSlug = useCallback((idOrSlug: string) => {
    return adventureActivities.find(
      (activity) => activity.id === idOrSlug || activity.slug === idOrSlug
    );
  }, []);

  const value = useMemo<AdventureContextType>(
    () => ({
      activities: adventureActivities,
      comboPackages,
      galleryImages,
      testimonials,
      faqData,
      navigationItems,
      companyInfo,
      whyChooseItems,
      safetyStandards,
      heroStats,
      rishikeshRegions,
      heroMedia,
      getActivityByIdOrSlug,
      isBookingModalOpen,
      bookingModalInitial,
      openBookingModal,
      closeBookingModal,
    }),
    [
      getActivityByIdOrSlug,
      isBookingModalOpen,
      bookingModalInitial,
      openBookingModal,
      closeBookingModal,
    ]
  );

  return (
    <AdventureContext.Provider value={value}>{children}</AdventureContext.Provider>
  );
};

export const useAdventureContext = (): AdventureContextType => {
  const context = useContext(AdventureContext);
  if (!context) {
    throw new Error('useAdventureContext must be used within an AdventureProvider');
  }
  return context;
};
