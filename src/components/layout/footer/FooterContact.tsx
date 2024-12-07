import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: MapPin,
    content: 'King Fahd Road, Al Nakheel Tower, Riyadh',
    href: 'https://goo.gl/maps/your-location',
  },
  {
    icon: Phone,
    content: '+966-11-225-5437',
    href: 'tel:+966112255437',
  },
  {
    icon: Mail,
    content: 'info@nationalsol.com',
    href: 'mailto:info@nationalsol.com',
  },
];

export default function FooterContact() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-4">
        {contactInfo.map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-start space-x-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <item.icon className="h-5 w-5 flex-shrink-0 mt-1" />
            <a
              href={item.href}
              className="text-gray-100 hover:text-white transition-colors"
            >
              {item.content}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}