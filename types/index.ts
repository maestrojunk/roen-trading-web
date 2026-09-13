export type Language = 'ko' | 'en';

export interface LocalizedString {
  ko: string;
  en: string;
}

export interface NavItem {
  id: string;
  label: LocalizedString;
  href: string;
}

export interface HeroContent {
  brandName: string;
  tagline: LocalizedString;
  subTagline: LocalizedString;
  scrollPrompt: LocalizedString;
  ctaText: LocalizedString;
}

export interface AboutContent {
  sectionTitle: LocalizedString;
  mainHeading: LocalizedString;
  descriptionPrimary: LocalizedString;
  descriptionSecondary: LocalizedString;
  coreValues: {
    title: LocalizedString;
    description: LocalizedString;
  }[];
}

export interface BusinessItemType {
  id: string;
  index: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  details: LocalizedString[];
  imagePlaceholder: {
    category: string;
    aspectRatio: string;
    alt: LocalizedString;
  };
}

export interface NumberItemType {
  id: string;
  value: number | null; // null if pending real data
  fallbackDisplay: string; // '--+' or 'DATA TO BE UPDATED'
  suffix?: string;
  label: LocalizedString;
  description: LocalizedString;
  isPending: boolean;
}

export interface CategoryItemType {
  id: string;
  title: string;
  subtitle: LocalizedString;
  description: LocalizedString;
  tags: LocalizedString[];
  imagePlaceholder: {
    label: string;
    tone: string;
  };
}

export interface ProcessStepType {
  id: string;
  step: string;
  title: LocalizedString;
  description: LocalizedString;
  highlights: LocalizedString[];
}

export interface FounderContent {
  sectionTitle: LocalizedString;
  role: LocalizedString;
  name: LocalizedString;
  quote: LocalizedString;
  description: LocalizedString[];
  photoPlaceholder: {
    name: string;
    title: string;
  };
}

export interface ContactContent {
  sectionTitle: LocalizedString;
  mainHeadline: LocalizedString;
  subHeadline: LocalizedString;
  companyName: string;
  founderRole: LocalizedString;
  founderName: LocalizedString;
  email: string;
  phone: string;
  bizRegNumber: string;
  address?: LocalizedString;
  inquiryCategories: {
    id: string;
    label: LocalizedString;
  }[];
  ctaButton: LocalizedString;
}

export interface FooterContent {
  brandName: string;
  copyright: string;
  notice: LocalizedString;
  links: {
    label: LocalizedString;
    href: string;
  }[];
}
