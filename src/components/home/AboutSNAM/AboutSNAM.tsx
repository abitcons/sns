import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Define TypeScript interface for solutions
interface Solution {
  title: string;
  description: string;
  features: string[];
  logo: string;
}

export default function AboutSNAM() {
  const { t, i18n } = useTranslation("SNAM.Home");

  // ✅ Ensure `solutions` is always an array
  const solutions: Solution[] = Array.isArray(t("about_snam.solutions", { returnObjects: true }))
    ? (t("about_snam.solutions", { returnObjects: true }) as Solution[])
    : [];

  // ✅ Adjust arrow direction based on language
  const isArabic = i18n.language === "ar";
  const arrowDirection = isArabic ? "ml-2 rotate-180" : "ml-2";

  return (
    <section id="about-snam">
      {/* Section 1: Introducing SNAM */}
      <div className="relative py-20 bg-gray-100 text-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-gray-800">
              <h1 className="text-5xl font-bold mb-6 leading-tight text-[#36a0d0]">
                {t("about_snam.title")}
              </h1>
              <p className="text-xl mb-6 leading-relaxed">
                {t("about_snam.description1")}{" "}
                <span className="relative inline-block group">
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36a0d0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  <strong className="text-gray-900">{t("about_snam.description2")}</strong>
                </span>{" "}
                {t("about_snam.description3")}
              </p>
              <motion.div className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md inline-flex items-center gap-4">
                <img
                  src="/Logo/SAP_Qualified_PartnerPackageSolution_logo.svg"
                  alt="SAP Partner Badge"
                  className="h-16 w-auto"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t("about_snam.badge1")}
                  </p>
                  <p className="text-lg font-bold text-[#36a0d0]">
                    {t("about_snam.badge2")}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/aboutsnam.png"
                  alt="SNAM Solutions Overview"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2: Our Solutions */}
      <section className="relative py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              {t("about_snam.solutionstitle")}
            </h2>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-lg p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1" />
                
                {/* White background with gradient border effect */}
                <div className="absolute inset-[1px] bg-white rounded-lg -z-1" />

                {/* Content */}
                <div className="relative">
                  {/* ✅ Dynamic Logo Fix */}
                  <div className="mb-4 h-12 flex justify-center">
                    <img
                      src={solution.logo}
                      alt={`${solution.title} Logo`}
                      className="h-full object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#36a0d0] transition-colors duration-300 text-center">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300 text-center">
                    {solution.description}
                  </p>

                  {/* Features with animated checkmarks */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                        <div className="transform group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle2 className="w-4 h-4 text-[#36a0d0] mr-2 flex-shrink-0" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <div className="relative py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="relative p-8 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                {t("about_snam.cta.title")}
              </h2>
              <p className="text-xl text-gray-600 text-center">{t("about_snam.cta.description")}</p>

              <div className="flex justify-center mt-6">
                <Link to="/solutions">
                  <button className="group px-8 py-4 bg-[#36a0d0] text-white font-semibold rounded-lg hover:bg-[#2b80a5] transition-all duration-300 flex items-center">
                    {t("about_snam.cta.button")}
                    <ArrowRight className={`w-5 h-5 ${arrowDirection} transition-transform duration-300`} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
