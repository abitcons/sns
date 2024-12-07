import React, { useState } from 'react';
import { motion } from 'framer-motion';

const managementTeam = [
  {
    name: 'Abdulmajeed Almousa',
    title: 'CEO & Founder',
    bio: 'With over 20 years of experience in digital transformation and business consulting, Abdulmajeed is the visionary leader behind SNS’s success, driving innovation and excellence aligned with Saudi Vision 2030.',
    expertise: 'Digital Transformation, SAP Solutions',
    imageUrl: '/images/team/abdulmajeed.jpg',
  },
  {
    name: 'Abdulwahab Alshaer',
    title: 'VP Business Development',
    bio: 'Abdulwahab is responsible for strategic partnerships and spearheading market expansion efforts. His expertise ensures SNS achieves sustainable growth and long-term collaborations.',
    expertise: 'Business Strategy, Market Expansion',
    imageUrl: '/images/team/abdulwahab.jpg',
  },
  {
    name: 'Waqas Ahmad',
    title: 'VP Delivery',
    bio: 'With a proven track record in managing complex projects, Waqas ensures the seamless delivery of SAP and digital transformation initiatives that exceed client expectations.',
    expertise: 'Project Management, SAP Implementation',
    imageUrl: '/images/team/waqas.jpg',
  },
  {
    name: 'Muhammad Abbas',
    title: 'Operations Director',
    bio: 'Ghazanfar oversees the operational framework at SNS, ensuring consistent service quality and operational efficiency across all offerings.',
    expertise: 'Operations Management, IT Strategy',
    imageUrl: '/images/team/ghazanfar.jpg',
  },
  {
    name: 'Carlos Torres',
    title: 'VP Product & Innovation',
    bio: 'Carlos drives product innovation and business development strategies, ensuring SNS stays ahead in providing cutting-edge solutions tailored to client needs.',
    expertise: 'Product Development, Business Development',
    imageUrl: '/images/team/carlos.png',
  },
];

export default function ManagementTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-8">Meet Our Visionary Team</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto text-white/90">
          Our team of experts drives innovation and success through leadership, vision, and strategic execution.
        </p>

        {/* Team Members */}
        <div className="flex justify-center flex-wrap gap-6">
          {managementTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
              className="relative bg-white text-gray-900 rounded-lg shadow-lg p-4 w-[200px] flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 border-4 border-[#36a0d0]"
              />
              <h3 className="text-sm font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-xs">{member.title}</p>

              {/* Popup Bio */}
              {hoveredMember === member && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute top-[-50%] left-[-50%] transform translate-x-1/2 translate-y-1/2 bg-white text-gray-900 rounded-lg shadow-2xl p-6 z-50 flex flex-col items-center"
                  style={{
                    width: '300px',
                    height: '400px',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-3 border-4 border-[#36a0d0]"
                  />
                  <h3 className="text-base font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold text-xs mb-2">{member.title}</p>
                  <p className="text-sm text-gray-700 text-center mb-3">{member.bio}</p>
                  <p className="text-xs text-gray-500 italic">
                    <span className="font-semibold">Expertise:</span> {member.expertise}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
