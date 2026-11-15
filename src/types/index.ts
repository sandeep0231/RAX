export type ActivityCategory =
  | 'All'
  | 'River Rafting'
  | 'Bungee & Extreme'
  | 'Camping'
  | 'Trekking & Trails'
  | 'Kayaking & Group';

export type DifficultyLevel = 'Beginner' | 'Moderate' | 'Extreme';

export interface ElevationSegment {
  label: string;
  range: string;
  grade: string;
}

export interface AdventureActivity {
  id: string;
  title: string;
  slug: string;
  category: Exclude<ActivityCategory, 'All'>;
  shortDescription: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  originalPrice?: number;
  priceUnit: string;
  duration: string;
  location: string;
  difficulty: DifficultyLevel;
  gradeBadge: string;
  featured: boolean;
  distanceOrHeight: string;
  ageLimit: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  safetyInformation: string;
  importantInstructions: string[];
  routeSegments?: ElevationSegment[];
}

export interface ComboPackage {
  id: string;
  title: string;
  duration: string;
  location: string;
  badgeLabel: string;
  description: string;
  highlights: string[];
  originalPrice: number;
  price: number;
  savingsText: string;
  activitySlug: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'River Rafting' | 'Camping' | 'Bungee & Aerial' | 'Mountain Views' | 'Group Adventures';
  location: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  locationAndTrip: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'rafting' | 'basecamp';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  iconName: 'verified' | 'guides' | 'flexible' | 'eco';
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
}

export interface SafetyStandard {
  id: string;
  title: string;
  description: string;
  iconName: 'award' | 'shield' | 'medical' | 'weather';
}

export interface RishikeshRegion {
  id: string;
  name: string;
  elevation: string;
  knownFor: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  rescueHotline: string;
  email: string;
  operatingHours: string;
  firstLaunchTime: string;
  establishedYear: number;
  riverDischarge: string;
  gangesLevel: string;
  weatherSummary: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
}

export interface BookingModalInitialState {
  activityTitle?: string;
  date?: string;
  participants?: number;
}
