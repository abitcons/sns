import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function CTAToServices() {
    const { t } = useTranslation('Home');
    return (<section id="cta-services" className="relative py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="mb-12">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            {t('cta_services.title')}
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            {t('cta_services.description')}
          </p>
        </motion.div>

        {/* Button Section */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex justify-center">
          <Link to="/services" className="relative inline-flex items-center px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg text-lg transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-xl">
            <span className="z-10">{t('cta_services.button')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] opacity-0 rounded-lg group-hover:opacity-100 transition-opacity duration-300" style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
        }}></div>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.5 }} className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at top right, rgba(255, 255, 255, 0.15), transparent 50%)`,
            pointerEvents: "none",
        }}></motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 0.4, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }} className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></motion.div>
    </section>);
}
