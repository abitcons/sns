import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  expertise: string;
  imageUrl: string;
};

const managementTeam: TeamMember[] = [
  {
    name: 'Abdulmajeed Almousa',
    title: 'CEO & Founder',
    bio: 'With over 20 years of expertise, Abdulmajeed leads SNS in delivering innovative SAP solutions. His visionary leadership aligns with Saudi Vision 2030, fostering innovation and operational excellence.',
    expertise: 'Digital Transformation, SAP Solutions, Vision 2030',
    imageUrl: '/images/team/abdulmajeed.jpg'
  },
  {
    name: 'Kamal Zeidan',
    title: 'Chief Operating Officer',
    bio: 'Kamal brings extensive expertise in healthcare, business, and IT. With a background as head of ICE and national therapy manager, Kamal has worked with leading companies like Olayan Group, Al Jomaih, and AlphaIota, driving operational excellence.',
    expertise: 'Healthcare Management, Business Strategy, Operational Excellence',
    imageUrl: '/images/team//Kamal.png'
  },
  {
    name: 'Abdulwahab Alshaer',
    title: 'VP Business Development',
    bio: 'Abdulwahab drives strategic partnerships and market expansion for SNS. His expertise ensures sustainable growth and strengthens SNS role as a trusted digital solutions provider.',
    expertise: 'Strategic Partnerships, Market Expansion, Business Strategy',
    imageUrl: '/images/team/abdulwahab.jpg'
  },
  {
    name: 'Waqas Ahmad',
    title: 'VP Delivery',
    bio: 'Waqas excels in managing complex SAP projects with a customer-focused approach. His expertise ensures seamless delivery, driving productivity and compliance for clients.',
    expertise: 'Project Management, SAP Implementation, Customer Success',
    imageUrl: '/images/team/waqas.jpg'
  },
  {
    name: 'Muhammad Abbas',
    title: 'Operations Director',
    bio: 'Muhammad ensures operational efficiency and service excellence at SNS. His strategic approach enhances long-term success for clients across diverse industries.',
    expertise: 'Operations Management, IT Strategy, Service Excellence',
    imageUrl: '/images/team/ghazanfar.png'
  },
  {
    name: 'Carlos Torres',
    title: 'VP Product & Innovation',
    bio: 'Carlos spearheads product innovation at SNS, delivering tailored SAP solutions. His forward-thinking strategies ensure SNS meets evolving business needs.',
    expertise: 'Product Innovation, Business Development, SAP Solutions',
    imageUrl: '/images/team/carlos.png'
  }
];

const ManagementTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-24 bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab]">
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">Leadership Team</h2>
          <p className="text-xl mb-16 max-w-3xl mx-auto text-white/90">
            Pioneering digital transformation through strategic vision and innovation excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {managementTeam.map((member) => (
            <div
              key={member.name}
              className="h-full"
            >
              <div
                onClick={() => setSelectedMember(member)}
                className="bg-white rounded-2xl shadow-lg 
                          transform transition-all duration-300 hover:scale-105
                          cursor-pointer h-full"
              >
                {/* Image Container - Fixed Height */}
                <div className="h-32 p-6">
                  <div className="relative inline-block">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-24 h-24 rounded-xl object-cover shadow-md"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#36a0d0] p-2 rounded-lg shadow-sm">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content Container - Fixed Padding */}
                <div className="px-6 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#36a0d0] font-medium text-sm mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm line-clamp-4 min-h-[5rem] mb-2">{member.bio}</p>
                  
                  {/* Tags Container - Fixed Height */}
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <div className="flex flex-row gap-2 whitespace-nowrap overflow-hidden">
                      {member.expertise.split(', ').slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="bg-[#36a0d0]/10 text-[#36a0d0] px-3 py-1 rounded-full text-sm font-medium shrink-0"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full text-gray-900 relative shadow-2xl"
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="w-32 h-32 rounded-xl shadow-lg object-cover border-4 border-[#36a0d0]"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
                <p className="text-[#36a0d0] font-semibold text-lg mb-6">{selectedMember.title}</p>
                
                <div className="prose prose-lg text-gray-600 mb-8">
                  <p>{selectedMember.bio}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.split(', ').map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#36a0d0]/10 text-[#36a0d0] px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ManagementTeam;