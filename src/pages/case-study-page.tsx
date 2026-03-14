import { useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { customerSuccessData } from "../data/customer-success";
import { Award, CheckCircle, Target, ArrowRight } from "lucide-react";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = customerSuccessData.find((study) => study.id === id);
  const { scrollYProgress } = useScroll();
  
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  if (!caseStudy) {
    return <p className="text-center py-20">Case study not found.</p>;
  }

  const formatAsCards = (text: string) => {
    return text
      .trim()
      .split("\n")
      .map((item, index) => (
        <motion.div
          key={index}
          className="group p-6 rounded-xl bg-white hover:bg-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.4,
            delay: index * 0.1,
            y: { type: "spring", stiffness: 300 }
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <motion.div 
                className="w-8 h-8 rounded-full flex items-center justify-center bg-[#36a0d0]/10"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-4 h-4 text-[#36a0d0]" />
              </motion.div>
            </div>
            <p className="text-base leading-relaxed text-gray-600">
              {item.trim()}
            </p>
          </div>
        </motion.div>
      ));
  };

  return (
    <section className="relative">
      {/* Header Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white min-h-[60vh]"
        style={{ opacity: headerOpacity }}
      >
        <img
          src="/images/case-study-header.jpg"
          alt={caseStudy.clientName}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div style={{ y: headerY }}>
            <motion.h1
              className="text-6xl font-extrabold text-white drop-shadow-md mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {caseStudy.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {caseStudy.clientName}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {caseStudy.clientName}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {caseStudy.introduction}
                  </p>
                </motion.div>
              </div>
              <motion.div 
                className="relative h-full w-full flex items-center justify-center bg-gray-50/50 p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={caseStudy.image}
                  alt={caseStudy.clientName}
                  className="max-w-[80%] max-h-[80%] object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Challenges Section */}
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Target className="w-8 h-8 text-[#36a0d0]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">Challenges</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {formatAsCards(caseStudy.challenges)}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <CheckCircle className="w-8 h-8 text-[#5bb6bb]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">How SNS Helped</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.solutions.trim().split("\n").map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    y: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    <p className="text-base leading-relaxed text-white/90">
                      {item.trim()}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Delivered Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -12 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Award className="w-8 h-8 text-[#6ec6ab]" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900">Value Delivered</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {formatAsCards(caseStudy.valueDelivered)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}