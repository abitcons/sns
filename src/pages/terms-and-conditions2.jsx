import { CheckCircle, ShieldCheck, Edit, Circle } from "lucide-react";
const TermsAndConditions = () => {
    const sections = [
        {
            title: "Introduction",
            icon: <CheckCircle size={20} className="text-[#36a0d0] mr-2"/>,
            content: `Welcome to Smart National Solutions! These Terms and Conditions govern your use of our website www.nationalsol.com and our services. By accessing our website and using our services, you consent to comply with these terms and conditions. If you disagree with any part of the terms, please do not use our website.`,
        },
        {
            title: "Intellectual Property Rights",
            icon: <ShieldCheck size={20} className="text-[#36a0d0] mr-2"/>,
            content: `Smart National Solutions and/or its licensors own the intellectual property rights for all material on www.nationalsol.com. All such rights are reserved. You may access this material from www.nationalsol.com for your own personal use subject to restrictions set in these terms and conditions.`,
        },
        {
            title: "Use of the Website",
            icon: <Circle size={20} className="text-[#36a0d0] mr-2"/>,
            content: `You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else’s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.`,
        },
        {
            title: "User Content",
            icon: <Edit size={20} className="text-[#36a0d0] mr-2"/>,
            content: `You grant Smart National Solutions a non-exclusive, royalty-free license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.`,
        },
    ];
    return (<div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#36a0d0] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Please review our terms and conditions carefully before using our
            website and services.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (<div key={index} className="bg-white shadow-lg rounded-lg p-6 transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
            </div>))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-16 bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have Questions About Our Terms?
          </h2>
          <p className="text-lg mb-6">
            Feel free to reach out to us for any clarifications or further
            details regarding our terms and conditions.
          </p>
          <a href="/contact" className="inline-block bg-white text-[#36a0d0] px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-[#5bb6bb] hover:text-white transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>);
};
export default TermsAndConditions;
