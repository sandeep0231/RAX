import { createContext } from 'react';
import type {
  AdventureActivity,
  BookingModalInitialState,
  ComboPackage,
  CompanyInfo,
  FAQItem,
  GalleryImage,
  HeroStat,
  NavItem,
  RishikeshRegion,
  SafetyStandard,
  Testimonial,
  WhyChooseItem,
} from '../types';

export interface AdventureContextType {
  activities: AdventureActivity[];
  comboPackages: ComboPackage[];
  galleryImages: GalleryImage[];
  testimonials: Testimonial[];
  faqData: FAQItem[];
  navigationItems: NavItem[];
  companyInfo: CompanyInfo;
  whyChooseItems: WhyChooseItem[];
  safetyStandards: SafetyStandard[];
  heroStats: HeroStat[];
  rishikeshRegions: RishikeshRegion[];
  heroMedia: {
    bannerImage: string;
    bannerAlt: string;
  };
  getActivityByIdOrSlug: (idOrSlug: string) => AdventureActivity | undefined;
  isBookingModalOpen: boolean;
  bookingModalInitial: BookingModalInitialState;
  openBookingModal: (initial?: BookingModalInitialState) => void;
  closeBookingModal: () => void;
}

export const defaultAdventureContextValue: AdventureContextType = {
  activities: [],
  comboPackages: [],
  galleryImages: [],
  testimonials: [],
  faqData: [],
  navigationItems: [],
  companyInfo: {
    name: 'Rishikesh Adventure X',
    tagline: '',
    description: '',
    address: '',
    phonePrimary: '',
    phoneSecondary: '',
    whatsappNumber: '',
    rescueHotline: '',
    email: '',
    operatingHours: '',
    firstLaunchTime: '',
    establishedYear: 2026,
    riverDischarge: '',
    gangesLevel: '',
    weatherSummary: '',
    socialLinks: {
      instagram: '',
      facebook: '',
      youtube: '',
    },
  },
  whyChooseItems: [],
  safetyStandards: [],
  heroStats: [],
  rishikeshRegions: [],
  heroMedia: {
    bannerImage: '',
    bannerAlt: '',
  },
  getActivityByIdOrSlug: () => undefined,
  isBookingModalOpen: false,
  bookingModalInitial: {},
  openBookingModal: () => undefined,
  closeBookingModal: () => undefined,
};

export const AdventureContext = createContext<AdventureContextType>(
  defaultAdventureContextValue
);
