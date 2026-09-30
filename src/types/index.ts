import { LucideIcon } from 'lucide-react';

// Navigation Item Interface
export interface NavItem {
  title: string;
  href: string; // Path to the navigation link
}

// Service Interface
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon; // Icon for the service
}

// Solution Interface (Updated to use `logo` and `link`)
export interface Solution {
  title: string;
  description: string;
  logo?: string; // Optional logo property
  features?: string[]; // Optional features property
  link: string; // Path to the solution page or external link
}

// Statistic Interface
export interface Statistic {
  value: string; // Numeric or percentage value
  label: string; // Description of the statistic
}

// Blog Post Interface
export interface BlogPost {
  title: string; // Blog post title
  seoTitle: string; // Search result and browser title
  excerpt: string; // Short summary of the post
  metaDescription: string; // Search result description
  category: string; // Post category
  date: string; // Human-readable publication date
  datePublished: string; // ISO publication date
  dateModified: string; // ISO last-modified date
  author: string; // Article author or editorial team
  readTime: string; // Estimated reading time
  imageUrl: string; // Path to the blog image
  imageAlt: string; // Descriptive alternative text
  slug: string; // Unique identifier for the blog post URL
  keywords: string[]; // Primary topical phrases
  keyTakeaways: string[]; // Answer-first summary points
  faqs: BlogFaq[]; // Visible questions and answers
  sources: BlogSource[]; // Authoritative references
  content: string; // Full content of the blog post
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSource {
  label: string;
  url: string;
}

// Job Interface
export interface Job {
  id: string; // Unique job ID
  title: string; // Job title
  location: string; // Job location
  type: string; // Full-time, part-time, etc.
  department: string; // Department name
}

// Customer Success Story Interface
export interface CustomerSuccessStory {
  id: string; // Unique ID for the success story
  clientName: string; // Name of the client
  image?: string; // Optional path to the client logo or image
  title: string; // Title of the success story
  introduction: string; // Short summary of the case study
  detailsPage: string; // Path to the detailed case study page
}

// NewsPost Interface
export interface NewsPost {
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
  category?: string;
  author: string;
  content?: string;
  readTime: string;
  relatedLogos?: RelatedLogo[];
}

export interface RelatedLogo {
  src: string;
  alt: string;
  url?: string; // Optional property
}
