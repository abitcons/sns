import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { customerSuccessData } from "../data/customer-success";
import { Award, CheckCircle, Target } from "lucide-react";

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = customerSuccessData.find((study) => study.id === id);

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
          className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <p className="text-gray-700 leading-relaxed">{item.trim()}</p>
        </motion.div>
      ));
  };

  return (
    <section>
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white">
        <img
          src="/images/case-study-header.jpg"
          alt={caseStudy.clientName}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1
            className="text-5xl font-extrabold text-white drop-shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p
            className="text-lg mt-4 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {caseStudy.clientName}
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <motion.img
              src={caseStudy.image}
              alt={caseStudy.clientName}
              className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                {caseStudy.clientName}
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                {caseStudy.introduction}
              </p>
            </motion.div>
          </div>

          {/* Challenges Section */}
          <motion.div
            className="my-12 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <Target className="text-primary w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Challenges</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {formatAsCards(caseStudy.challenges)}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            className="my-12 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="text-primary w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">How SNS Helped</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {formatAsCards(caseStudy.solutions)}
            </div>
          </motion.div>

          {/* Value Delivered Section */}
          <motion.div
            className="my-12 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <Award className="text-primary w-6 h-6 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Value Delivered</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {formatAsCards(caseStudy.valueDelivered)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
