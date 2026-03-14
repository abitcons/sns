import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";
import { useTranslation } from 'react-i18next'; // Add this import
const services = [
    {
        key: "sap_solutions",
        icon: "/Services Icons/Briefcase.gif",
    },
    {
        key: "custom_development",
        icon: "/Services Icons/Code.gif",
    },
    {
        key: "data_management",
        icon: "/Services Icons/Database.gif",
    },
    {
        key: "it_consulting",
        icon: "/Services Icons/Monitor.gif",
    },
];
export default function CoreServices() {
    const { t } = useTranslation('Home'); // Initialize translation
    return (<section id="core-services" className="py-20 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-white mb-4">
            {t('core_services.title')}
          </motion.h2>
          <motion.p variants={fadeIn} className="text-lg text-white/90">
            {t('core_services.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (<motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} variants={fadeIn} className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group" style={{ minHeight: "300px" }}>
              {/* Icon Section with Hover Interaction */}
              <div className="relative flex items-center justify-center h-24 w-24 mx-auto mb-6 bg-white rounded-full shadow-md p-4 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
                <img src={service.icon} alt={t(`core_services.services.${service.key}.title`)} className="h-16 w-16 object-contain"/>
              </div>

              {/* Content Section */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#36a0d0] transition-colors duration-300">
                {t(`core_services.services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-4">
                {t(`core_services.services.${service.key}.description`)}
              </p>

              {/* Gradient Hover Line */}
              <div className="absolute bottom-6 left-6 right-6 h-1 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
