import { ShieldCheck, Circle, Edit, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Introduction",
      icon: <ShieldCheck size={20} className="text-[#36a0d0] mr-2" />,
      content: `At Smart National Solutions, accessible from www.nationalsol.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Smart National Solutions and how we use it.`,
    },
    {
      title: "Legal Basis for Collecting Information",
      icon: <Circle size={20} className="text-[#36a0d0] mr-2" />,
      content: `Smart National Solutions collects and uses personal information based on the following legal bases:
        - To perform a contract with you
        - With your consent
        - For legitimate business interests
        - To comply with the law`,
    },
    {
      title: "Retention of Information",
      icon: <Edit size={20} className="text-[#36a0d0] mr-2" />,
      content: `Smart National Solutions retains your personal information only for as long as necessary to fulfill the purposes set out in this Privacy Policy. This includes compliance with legal obligations, dispute resolution, and policy enforcement.`,
    },
    {
      title: "Your Data Protection Rights",
      icon: <FileText size={20} className="text-[#36a0d0] mr-2" />,
      content: `If you are a resident of the European Economic Area (EEA), you have the following data protection rights:
        - The right to access, update, or delete information
        - The right of rectification
        - The right to object
        - The right of restriction
        - The right to data portability
        - The right to withdraw consent`,
    },
    {
      title: "Log Files",
      icon: <Circle size={20} className="text-[#36a0d0] mr-2" />,
      content: `Smart National Solutions follows a standard procedure of using log files. These include IP addresses, browser types, ISPs, date and time stamps, referring/exit pages, and more for analytics and demographic insights.`,
    },
    {
      title: "Cookies and Web Beacons",
      icon: <Edit size={20} className="text-[#36a0d0] mr-2" />,
      content: `Smart National Solutions uses cookies to store information about visitors' preferences and accessed pages. This helps us optimize the user experience by tailoring content to browser types and preferences.`,
    },
    {
      title: "Children's Information",
      icon: <ShieldCheck size={20} className="text-[#36a0d0] mr-2" />,
      content: `Protecting children while using the internet is a priority. Smart National Solutions does not knowingly collect identifiable information from children under 13. If you believe your child has provided such information, contact us immediately.`,
    },
    {
      title: "Consent",
      icon: <FileText size={20} className="text-[#36a0d0] mr-2" />,
      content: `By using our website, you consent to our Privacy Policy and agree to its terms.`,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#36a0d0] mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Learn how we handle and protect your information while using Smart
            National Solutions.
          </p>
        </header>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-lg mb-6">
            Feel free to reach out to us for any clarifications regarding your
            data and privacy.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#36a0d0] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-[#5bb6bb] hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
