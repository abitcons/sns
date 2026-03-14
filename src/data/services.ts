import { BarChart3, Cloud, Code2, Database, LineChart, LucideIcon, Settings } from 'lucide-react';

// Import the Service interface
import type { Service } from './services.d';

export const services: Service[] = [
  {
    id: '1',
    name: 'Digital Transformation Consulting',
    description: 'Strategic guidance to help organizations embrace digital technologies and transform their operations for enhanced efficiency and growth.',
    icon: LineChart as LucideIcon,
    link: '/services/digital-transformation-consulting'
  },
  {
    id: '2',
    name: 'SAP Implementation & Integration',
    description: 'End-to-end SAP solutions including implementation, integration, and optimization services to streamline your business processes.',
    icon: Settings as LucideIcon,
    link: '/services/sap-implementation'
  },
  {
    id: '3',
    name: 'AI & Data Analytics',
    description: 'Advanced analytics solutions powered by AI to help you make data-driven decisions and gain competitive advantages.',
    icon: BarChart3 as LucideIcon,
    link: '/services/ai-data-analytics'
  },
  {
    id: '4',
    name: 'Cloud Computing Services',
    description: 'Secure and scalable cloud solutions to modernize your infrastructure and enable digital innovation.',
    icon: Cloud as LucideIcon,
    link: '/services/cloud-computing-services'
  },
  {
    id: '5',
    name: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and requirements.',
    icon: Code2 as LucideIcon,
    link: '/services/custom-software-development'
  },
  {
    id: '6',
    name: 'Enterprise Data Management',
    description: 'Comprehensive data management solutions to help you organize, protect, and leverage your business data effectively.',
    icon: Database as LucideIcon,
    link: '/services/enterprise-data-management'
  }
];
