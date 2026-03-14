
import { motion } from 'framer-motion';

export default function FooterCopyright() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-gray-100">
          © {new Date().getFullYear()} Smart National Solutions. All rights reserved.
        </p>
      </div>
    </motion.div>
  );
}