/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  items: ServiceItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Website Development' | 'Branding Projects' | 'Social Media Campaigns' | 'Marketing Campaigns' | 'UI/UX Projects';
  client: string;
  description: string;
  image: string; // visual asset path or placeholder
  tags: string[];
  metrics?: string; // success metrics e.g., "+150% Leads"
  year: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  role: 'CEO & Founder' | 'Marketing Manager' | 'Web Development Team' | 'Graphic Design Team' | 'Content Creation Team' | 'SEO Specialists';
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type PageId = 'home' | 'about' | 'services' | 'portfolio' | 'team' | 'testimonials' | 'contact';
