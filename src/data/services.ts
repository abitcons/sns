import { 
  BarChart3, 
  Cloud, 
  Code2, 
  Database, 
  LineChart,
  Settings 
} from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance to help organizations embrace digital technologies and transform their operations for enhanced efficiency and growth.',
    icon: LineChart
  },
  {
    title: 'SAP Implementation & Integration',
    description: 'End-to-end SAP solutions including implementation, integration, and optimization services to streamline your business processes.',
    icon: Settings
  },
  {
    title: 'AI & Data Analytics',
    description: 'Advanced analytics solutions powered by AI to help you make data-driven decisions and gain competitive advantages.',
    icon: BarChart3
  },
  {
    title: 'Cloud Computing Services',
    description: 'Secure and scalable cloud solutions to modernize your infrastructure and enable digital innovation.',
    icon: Cloud
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your unique business challenges and requirements.',
    icon: Code2
  },
  {
    title: 'Enterprise Data Management',
    description: 'Comprehensive data management solutions to help you organize, protect, and leverage your business data effectively.',
    icon: Database
  }
];