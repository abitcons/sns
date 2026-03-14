import { motion } from 'framer-motion';
import { Award, Users, Building, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import StatisticsSection from './StatisticsSection';

const Aboutus = () => {
  const { t, i18n } = useTranslation('Home');
  const isRtl = i18n.dir() === 'rtl';

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const slideInRight = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const iconBoxes = [
    { icon: Award, key: 'excellence', translationKey: 'about.values.excellence' },
    { icon: Users, key: 'partnership', translationKey: 'about.values.partnership' },
    { icon: Building, key: 'innovation', translationKey: 'about.values.innovation' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideInRight} className="flex flex-col">
            <h2 className="text-4xl font-bold bg-[#36a0d0] bg-clip-text text-transparent mb-6 py-1 leading-normal">
              {t('about.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('about.description')}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {iconBoxes.map((item) => (
                <motion.div
                  key={item.key}
                  whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                  className="p-4 bg-white rounded-xl shadow-lg transition-all duration-300"
                >
                  <div className="h-12 w-12 mx-auto mb-4 p-2 rounded-lg bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb]">
                    <item.icon className="h-full w-full text-white" />
                  </div>
                  <h3 className="text-md font-semibold mb-2 text-center">
                    {t(`${item.translationKey}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {t(`${item.translationKey}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="/about"
              className={`group inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] text-white hover:opacity-90 transition-all duration-300 cursor-pointer z-10 relative ${isRtl ? 'flex-row-reverse self-start' : 'self-start'}`}
            >
              <span className={`${isRtl ? 'ml-2' : 'mr-2'}`}>
                {t('about.learnMore')}
              </span>
              <ArrowRight 
                className={`h-5 w-5 transition-transform
                  ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
              />
            </a>
          </motion.div>

          <motion.div variants={slideInRight} className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] opacity-20 rounded-lg" />
              <img
                src="/images/about-sns.jpg"
                alt={t('about.imageAlt')}
                className="rounded-lg shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </motion.div>

        <StatisticsSection />
      </div>
    </section>
  );
};

export default Aboutus;