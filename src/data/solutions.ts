import { Plane, Users, CheckCircle } from 'lucide-react';
import type { Solution } from '../types';

export const solutions: Solution[] = [
  {
    title: 'SNAM Travel',
    description: 'Streamline corporate travel management with seamless SAP integration.',
    icon: Plane,
    features: [
      'Automated travel request and approval workflow',
      'Integration with SAP systems',
      'Real-time expense tracking',
      'Comprehensive reporting dashboard'
    ],
    href: '/solutions/snam-travel'
  },
  {
    title: 'SNAM Muqeem',
    description: 'Efficient residency permit management system for your workforce.',
    icon: Users,
    features: [
      'Automated permit renewal notifications',
      'Document management system',
      'Compliance monitoring',
      'Integration with government systems'
    ],
    href: '/solutions/snam-muqeem'
  },
  {
    title: 'SNAM Yaqeen',
    description: 'Real-time employee verification and data management solution.',
    icon: CheckCircle,
    features: [
      'Instant employee verification',
      'Secure data management',
      'Integration with HR systems',
      'Automated compliance checks'
    ],
    href: '/solutions/snam-yaqeen'
  }
];