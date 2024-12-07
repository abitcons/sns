import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../../styles/animations';
import FooterColumn from './FooterColumn';
import FooterSocial from './FooterSocial';

export default function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {/* Column 1: About */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col items-start space-y-6"
          >
            <motion.img
              src="/Logo/SNS-logo-white.svg"
              alt="SNS Logo"
              className="h-16 w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <motion.p
              className="text-lg font-semibold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Leading AI and SAP Solution Provider in KSA
            </motion.p>
            <motion.p
              className="text-base text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Empowering businesses through digital transformation and
              innovative solutions.
            </motion.p>
            <FooterSocial />
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeIn} className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <FooterColumn
              links={[
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Solutions', href: '/solutions' },
                { label: 'Careers', href: '/careers' },
              ]}
            />
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={fadeIn} className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-white">Contact</h3>
            <FooterColumn
              links={[
                {
                  label: 'King Fahd Road, Al Nakheel Tower, Riyadh',
                  href: 'https://goo.gl/maps/your-location',
                  icon: 'MapPin',
                },
                {
                  label: '+966-11-225-5437',
                  href: 'tel:+966112255437',
                  icon: 'Phone',
                },
                {
                  label: 'info@nationalsol.com',
                  href: 'mailto:info@nationalsol.com',
                  icon: 'Mail',
                },
              ]}
            />
            <motion.div
              className="flex items-center space-x-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <img
                src="/Logo/SAP Gold partner .svg"
                alt="SAP Gold Partner Logo"
                className="h-12 w-auto"
              />
              <img
                src="/Logo/SAP Certified-white .png"
                alt="SAP Certified Logo"
                className="h-12 w-auto"
                style={{
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeIn}
          className="mt-12 border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/90">
              © {new Date().getFullYear()} Smart National Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy-policy"
                className="text-sm text-white/90 hover:text-white transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-sm text-white/90 hover:text-white transition-all duration-200"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
