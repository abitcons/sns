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
    logo?: string;
    features?: string[];
    link: string;
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
    content: string;
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
    image?: string;
    title: string;
    introduction: string;
    detailsPage: string;
}
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
    url?: string;
}
