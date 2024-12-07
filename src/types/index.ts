import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  href: string;
}

export interface Statistic {
  value: string;
  label: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
}
export interface CustomerSuccessStory {
  id: string;
  clientName: string;
  image: string; // Path to the client logo or case study image
  title: string;
  introduction: string; // Short summary of the case study
  detailsPage: string; // Path to the detailed case study page
}
