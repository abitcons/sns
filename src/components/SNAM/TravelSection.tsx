import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Building2, 
  Receipt, 
  BarChart3, 
  Clock, 
  Briefcase,
  LucideIcon
} from 'lucide-react';
import { useState } from 'react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

const TravelSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const features: Feature[] = [
    {
      icon: Receipt,
      title: "Smart Approvals & Reimbursements",
      description: "Automated workflow processing reduces manual effort by 75%",
      stat: "75%",
      statLabel: "Faster Processing"
    },
    {
      icon: Building2,
      title: "Policy Compliance Monitoring",
      description: "Real-time policy enforcement and expense control",
      stat: "99.9%",
      statLabel: "Compliance Rate"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Data-driven insights for optimized travel decisions",
      stat: "30%",
      statLabel: "Cost Reduction"
    }
  ];

  const backgroundPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g fill="%23000000" fill-opacity="0.4">
          <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" />
        </g>
      </g>
    </svg>
  `)}`;

  const handleClick = () => {
    window.open('https://store.sap.com/dcp/en/product/display-2001016814_live_v1/snam-travel', '_blank');
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("${backgroundPattern}")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">
        {/* Enhanced Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          
          <img
            src="/images/SNAM-Travel-QPP.png"
            alt="SNAM Travel"
            className="rounded-xl shadow-2xl transition-transform duration-500"
          />

          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <div className="flex items-center space-x-2">
              <Clock className="text-primary w-5 h-5" />
              <div>
                <div className="text-primary font-bold text-lg">85%</div>
                <div className="text-gray-600 text-xs">Time Saved</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="flex items-center space-x-2">
              <Briefcase className="text-primary w-5 h-5" />
              <div>
                <div className="text-primary font-bold text-lg">10k+</div>
                <div className="text-gray-600 text-xs">Trips Managed</div>
              </div>
            </div>
          </motion.div>

          {/* Animated travel path */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <svg className="w-full h-full" viewBox="0 0 400 300">
              <motion.path
                d="M 50,150 C 100,100 300,200 350,150"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="text-primary/30"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle
                cx="50"
                cy="150"
                r="4"
                className="fill-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.circle
                cx="350"
                cy="150"
                r="4"
                className="fill-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="relative">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#6ec6ab]">
                SNAM Travel
              </span>
            </h2>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-gray-600">
                Revolutionizing Business Travel
              </h3>
              <div className="bg-[#1266B4]/10 px-3 py-1 rounded-full flex items-center gap-2">
                <svg className="w-5 h-5 text-[#1266B4]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span className="text-sm font-semibold text-[#1266B4]">SAP Certified</span>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, backgroundColor: '#f8fafc' }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-50 rounded-lg p-4 cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-bold text-lg">{feature.stat}</div>
                        <div className="text-gray-500 text-xs">{feature.statLabel}</div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Enhanced CTA Button */}
            <motion.button
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-flex items-center bg-primary text-white font-semibold text-xl px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 cursor-pointer"
            >
              Explore SAP-Certified SNAM Travel
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;