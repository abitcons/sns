import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

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

const icons = {
  MapPin,
  Phone,
  Mail
};

export default function FooterColumn({ title, links, showSAPLogos }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-6">{title}</h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <motion.li
            key={index}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.href.startsWith('/') ? (
              <Link
                to={link.href}
                className="text-lg text-white/90 hover:text-white transition-colors inline-flex items-center"
              >
                {link.icon && React.createElement(icons[link.icon], { className: "h-5 w-5 mr-2" })}
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                className="text-lg text-white/90 hover:text-white transition-colors inline-flex items-center"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.icon && React.createElement(icons[link.icon], { className: "h-5 w-5 mr-2" })}
                {link.label}
              </a>
            )}
          </motion.li>
        ))}
      </ul>

      {showSAPLogos && (
        <motion.div 
          className="mt-8 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="/Logo/SAP Gold partner .svg"
            alt="SAP Gold Partner"
            className="h-[4.5rem] w-auto" // Match header logo size
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img
            src="/Logo/SAP Certified .svg"
            alt="SAP Certified"
            className="h-[4.5rem] w-auto" // Match header logo size
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      )}
    </div>
  );
}