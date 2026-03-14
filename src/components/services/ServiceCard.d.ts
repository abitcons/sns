import { LucideIcon } from 'lucide-react';
interface Service {
    id: string;
    name: string;
    description: string;
    icon?: LucideIcon; // Make it optional
    link?: string;
}


interface ServiceCardProps extends Service {
    index: number;
    isHovered?: boolean; // ✅ Add this to fix the issue
  }
  
export default function ServiceCard({ name, description, icon: Icon, index, link }: ServiceCardProps): import("react").JSX.Element | null;
export {};
