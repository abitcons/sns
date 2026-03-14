
interface FooterLink {
    label: string;
    href: string;
    icon?: 'MapPin' | 'Phone' | 'Mail';
}
interface FooterColumnProps {
    title: string;
    links: FooterLink[];
    showSAPLogos?: boolean;
}
export default function FooterColumn({ title, links, showSAPLogos }: FooterColumnProps): React.JSX.Element;
export {};
