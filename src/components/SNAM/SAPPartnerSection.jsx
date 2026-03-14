import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
const SAPPartnerSection = () => {
    const sapPartnerURL = "https://www.sap.com/mena/partners/find/qualified-packaged-solutions/finder/smart-national-solutions-for-information-successfactors-snam-solutions-integration.html";
    return (<section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/5 via-[#5bb6bb]/5 to-[#6ec6ab]/5"/>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Content Side */}
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="inline-block">
                  <span className="bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] text-white px-4 py-1 rounded-full text-sm font-medium">
                    SAP® Qualified Partner
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  SAP-Qualified Partner-Packaged Solutions
                </h2>
                
                <p className="text-lg text-gray-600">
                  Our solutions are officially qualified by SAP®, ensuring the highest standards of integration, 
                  security, and performance for your enterprise needs.
                </p>

                <motion.a href={sapPartnerURL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white rounded-lg font-medium group hover:shadow-lg transition-shadow" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Verify Our Partnership
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1"/>
                </motion.a>
              </motion.div>
            </div>

            {/* Image/Logo Side */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-[#36a0d0]/10 via-[#5bb6bb]/10 to-[#6ec6ab]/10 rounded-full animate-pulse"/>
                <img src="/Logo/SAP_Qualified_PartnerPackageSolution_logo.svg" alt="SAP Qualified Partner Badge" className="relative w-full h-full object-contain p-6"/>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
};
export default SAPPartnerSection;
