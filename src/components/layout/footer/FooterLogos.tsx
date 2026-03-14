import { motion } from 'framer-motion';

export default function FooterLogos() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-8 mb-8">
      {/* SNS Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex-shrink-0"
      >
        <img
          src="/logo/SNS-logo.svg"
          alt="SNS Logo"
          className="h-16 w-auto max-w-[200px]"
        />
      </motion.div>

      {/* SAP Gold Partner Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex-shrink-0"
      >
        <img
          src="/logo/SAP-Gold-Partner.svg"
          alt="SAP Gold Partner Logo"
          className="h-16 w-auto max-w-[200px]"
        />
      </motion.div>

      {/* SAP Certified Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex-shrink-0"
      >
        {/* Customizing the SAP Certified logo to white */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 100"
          className="h-16 w-auto max-w-[200px]"
          fill="white"
        >
          <rect x="0" y="0" width="300" height="100" fill="none" />
          {/* Add the path data for the SAP Certified logo */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="20"
            fontWeight="bold"
            fill="white"
          >
            SAP Certified
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
