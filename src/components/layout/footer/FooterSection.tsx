import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../../../styles/animations';
import FooterColumn from './FooterColumn';
import FooterSocial from './FooterSocial';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function FooterSection() {
  const { t, i18n } = useTranslation('common');
  const isRtl = i18n.dir() === 'rtl';

  // Update document direction when language changes
  useEffect(() => {
    document.dir = isRtl ? 'rtl' : 'ltr';
  }, [isRtl]);

  return (
    <footer className="relative bg-gradient-to-r from-primary via-secondary to-accent">
      <div className="max-wfull mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* First section remains the same */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {/* Column 1: About */}
          <motion.div variants={fadeIn} className="flex flex-col items-start space-y-6">
            <Link to="/" className="block">
              <motion.img
                src="/Logo/SNS-logo-white.svg"
                alt={t('footer.logo.alt')}
                className="h-16 w-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
            <motion.p className="text-lg font-semibold text-white text-justify">
              {t('footer.tagline')}
            </motion.p>
            <motion.p className="text-base text-white/90 leading-relaxed">
              {t('footer.description')}
            </motion.p>
            <div className="flex items-center space-x-8 mt-4">
              <img
                src="/Logo/SAP Gold partner .svg"
                alt={t('footer.sap_gold_partner.alt')}
                className="h-12 w-auto"
              />
              <img
                src="/Logo/SAP Certified-white .png"
                alt={t('footer.sap_certified.alt')}
                className="h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeIn} className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-white">
              {t('footer.quick_links.title')}
            </h3>
            <FooterColumn
              links={[
                { label: t('footer.quick_links.about'), href: '/about' },
                { label: t('footer.quick_links.services'), href: '/services' },
                { label: t('footer.quick_links.customer_success'), href: '/customer-success' },
                { label: t('footer.quick_links.solutions'), href: '/solutions' },
                { label: t('footer.quick_links.careers'), href: '/careers' },
              ]}
              title=""
            />
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={fadeIn} className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-white">
              {t('footer.contact.title')}
            </h3>
            <FooterColumn
              links={[
                {
                  label: t('footer.contact.address'),
                  href: 'https://maps.app.goo.gl/sHdn7DRLLf3jf7Cy7',
                  icon: 'MapPin',
                },
                {
                  label: t('footer.contact.phone'),
                  href: 'tel:+966112255437',
                  icon: 'Phone',
                },
                {
                  label: t('footer.contact.email'),
                  href: 'mailto:info@nationalsol.com',
                  icon: 'Mail',
                },
              ]}
              title=""
            />
            <FooterSocial />
          </motion.div>
        </motion.div>

      {/* News and Blogs Section */}
<div className="mt-8 border-t border-white/20 pt-8">
  <h3 className="text-lg font-bold text-white text-center mb-4">
    {t('footer.updates.title')}
  </h3>
  <div className={`flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 ${isRtl ? 'md:space-x-reverse' : ''} md:space-x-8`}>
    <Link
      to="/news"
      className="w-full md:w-auto px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-all duration-200 text-center"
    >
      {t('footer.updates.news_button')}
    </Link>
    <Link
      to="/blog"
      className="w-full md:w-auto px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-all duration-200 text-center"
    >
      {t('footer.updates.blog_button')}
    </Link>
  </div>
</div>

        {/* Copyright and Legal */}
        <motion.div variants={fadeIn} className="mt-12 border-t border-white/20 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isRtl ? 'md:space-x-reverse' : ''} md:space-x-6`}>
            <p className="text-sm text-white/90">
              © {new Date().getFullYear()} {t('footer.legal.rights')}
            </p>
            <div className={`flex ${isRtl ? 'space-x-reverse' : ''} space-x-6`}>
              <Link
                to="/privacy-policy-2"
                className="text-sm text-white/90 hover:text-white transition-all duration-200"
              >
                {t('footer.legal.privacy')}
              </Link>
              <Link
                to="/terms-and-conditions2"
                className="text-sm text-white/90 hover:text-white transition-all duration-200"
              >
                {t('footer.legal.terms')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}