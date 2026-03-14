import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, MessagesSquare } from 'lucide-react';
import ContactForm from '../components/contact/ContactForm';
import MapComponent from '../components/contact/MapComponent';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'King Fahd Road, Al Nakheel Tower, Riyadh, Saudi Arabia',
    href: 'https://maps.app.goo.gl/sHdn7DRLLf3jf7Cy7',
    gradient: 'from-[#36a0d0] to-[#5bb6bb]'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+966-11-225-5437',
    href: 'tel:+966112255437',
    gradient: 'from-[#5bb6bb] to-[#6ec6ab]'
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@nationalsol.com',
    href: 'mailto:info@nationalsol.com',
    gradient: 'from-[#6ec6ab] to-[#36a0d0]'
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
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-[#36a0d0]/5 via-white to-[#6ec6ab]/5">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#36a0d0]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#6ec6ab]/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-block mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-[#36a0d0]/20 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <MessagesSquare className="w-5 h-5 text-[#36a0d0]" />
                  <span className="text-sm font-medium text-gray-800">Let's Connect</span>
                </div>
              </motion.div>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#36a0d0] to-[#6ec6ab]"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8"
            >
              Partner with us to redefine success through seamless, smart solutions tailored for your growth.
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
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                }}
                className="group relative p-8 rounded-2xl overflow-hidden h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <MapComponent />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
