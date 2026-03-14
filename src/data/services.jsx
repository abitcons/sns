import { BarChart3, Cloud, Code2, Database, LineChart, Settings } from 'lucide-react';
export const services = [
    {
        title: 'Digital Transformation Consulting',
        description: 'Strategic guidance to help organizations embrace digital technologies and transform their operations for enhanced efficiency and growth.',
        icon: LineChart,
        link: '/services/digital-transformation-consulting' // Link to the DigitalConsulting sub-page
    },
    {
        title: 'SAP Implementation & Integration',
        description: 'End-to-end SAP solutions including implementation, integration, and optimization services to streamline your business processes.',
        icon: Settings,
        link: '/services/sap-implementation' // Link to the SAPImplementation sub-page
    },
    {
        title: 'AI & Data Analytics',
        description: 'Advanced analytics solutions powered by AI to help you make data-driven decisions and gain competitive advantages.',
        icon: BarChart3,
        link: '/services/ai-data-analytics' // Link to the AIDataAnalytics sub-page
    },
    {
        title: 'Cloud Computing Services',
        description: 'Secure and scalable cloud solutions to modernize your infrastructure and enable digital innovation.',
        icon: Cloud,
        link: '/services/cloud-computing-services' // Link to the CloudServices sub-page
    },
    {
        title: 'Custom Software Development',
        description: 'Tailored software solutions designed to address your unique business challenges and requirements.',
        icon: Code2,
        link: '/services/custom-software-development' // Link to the SoftwareDevelopment sub-page
    },
    {
        title: 'Enterprise Data Management',
        description: 'Comprehensive data management solutions to help you organize, protect, and leverage your business data effectively.',
        icon: Database,
        link: '/services/enterprise-data-management' // Link to the DataManagement sub-page
    }
];
