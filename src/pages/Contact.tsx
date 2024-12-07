import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { fadeIn, staggerContainer } from '../styles/animations';
import ContactForm from '../components/contact/ContactForm';
import MapComponent from '../components/contact/MapComponent';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'King Fahd Road, Al Nakheel Tower, Riyadh, Saudi Arabia',
    href: 'https://goo.gl/maps/your-location'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+966-11-225-5437',
    href: 'tel:+966112255437'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@nationalsol.com',
    href: 'mailto:info@nationalsol.com'
  }
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Contact Us - Smart National Solutions</title>
        <meta
          name="description"
          content="Get in touch with Smart National Solutions. We're here to help you with your digital transformation journey."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600"
            >
              Let's discuss how we can help transform your business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <item.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <MapComponent />
          </div>
        </div>
      </section>
    </>
  );
}