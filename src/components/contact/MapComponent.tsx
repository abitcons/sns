import { motion } from 'framer-motion';
import { fadeIn } from '../../styles/animations';

export default function MapComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-white p-8 rounded-lg shadow-lg h-full"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3521107939423!2d46.6527758!3d24.7491137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee3ccd0b70dd9%3A0x4cb5c4e8d509c0e9!2sSmart%20National%20Solutions%20(SNS)!5e0!3m2!1sar!2sil!4v1734249038907!5m2!1sar!2sil"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
    </motion.div>
  );
}
