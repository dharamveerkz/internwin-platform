export type DurationValue = "15-days" | "1-month" | "6-months" | "all";

export interface DurationOption {
  value: DurationValue;
  label: string;
}

export interface Course {
  id: string;
  name: string;
  domain: string;
  duration: Exclude<DurationValue, "all">;
  price: number;
  originalPrice?: number;
  isFree?: boolean;
  tags: string[];
  thumbnail: "blue" | "orange-blue" | "dark";
  icon: string;
  rating: number;
  reviews: number;
  students: number;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
  variant?: "blue" | "orange";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  company?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export type Theme = "light" | "dark" | "system";