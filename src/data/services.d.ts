import { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    name: string;
    description: string;
    icon?: LucideIcon;
    link?: string;
}

export declare const services: Service[];
