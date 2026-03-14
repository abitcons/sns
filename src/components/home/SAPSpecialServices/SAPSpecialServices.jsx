import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../styles/animations";
import { useTranslation } from 'react-i18next';
const sapServiceKeys = [
    "sap_services.services.0",
    "sap_services.services.1",
    "sap_services.services.2",
    "sap_services.services.3",
    "sap_services.services.4",
    "sap_services.services.5"
];
export default function SAPSpecialServices() {
    const { t } = useTranslation('Home');
    return (<section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-20 relative">
          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-gray-100 font-bold -z-10">
            SAP®
          </motion.div>

          <motion.h2 variants={fadeIn} className="text-4xl lg:text-5xl font-bold text-[#36a0d0] mb-6">
            {t('sap_services.title')}
          </motion.h2>

          <motion.p variants={fadeIn} className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('sap_services.description')}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sapServiceKeys.map((key, index) => (<motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 },
                },
            }} className="group h-full">
              <div className="h-full flex flex-col bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          border border-gray-100 hover:border-[#36a0d0]/20 relative overflow-hidden">
                {/* Background Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10" style={{ backgroundColor: t(`${key}.hoverColor`) }}/>

                {/* Icon Container */}
                <div className="mb-6 flex justify-center">
                  <div className="relative flex items-center justify-center h-24 w-24 bg-white rounded-full shadow-lg p-5 group-hover:scale-110 transition-transform duration-300">
                    <img src={t(`${key}.icon`)} alt={t(`${key}.title`)} className="h-16 w-16 object-contain"/>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#36a0d0] transition-colors duration-300">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {t(`${key}.description`)}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ backgroundColor: t(`${key}.hoverColor`) }}/>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
}
