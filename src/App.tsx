import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import './index.css';
import './i18n/i18n';

// Components and Pages imports
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CustomerSuccess from "./pages/customer-success";
import CaseStudyPage from "./pages/case-study-page";
import Solutions from "./pages/Solutions";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BusinessCardCreator from "./pages/BusinessCardGenerator";
import Travel from "./components/solutions/Travel";
import Muqeem from "./components/solutions/Muqeem";
import Yaqeen from "./components/solutions/Yaqeen";
import S4HANA from "./components/solutions/S4HANA";
import SuccessFactors from "./components/solutions/SuccessFactors";
import SAPHybris from "./components/solutions/SAPHybris";
import SAPAriba from "./components/solutions/SAPAriba";
import SAPAnalytics from "./components/solutions/SAPAnalytics";
import AIPoweredRecruitment from "./components/solutions/AI-poweredRecruitment";
import AIDrivenAnalytics from "./components/solutions/AI-drivenAnalytics";
import SAPImplementation from "./pages/Services/SAPImplementation";
import AIDataAnalytics from "./pages/Services/AIDataAnalytics";
import CloudServices from "./pages/Services/CloudServices";
import DataManagement from "./pages/Services/DataManagement";
import DigitalConsulting from "./pages/Services/DigitalConsulting";
import SoftwareDevelopment from "./pages/Services/SoftwareDevelopment";
import SNAM from "./pages/SNAM";
import NewsView from "./components/NewsView";
import TermsAndConditions from "./pages/terms-and-conditions2";
import PrivacyPolicy from "./pages/privacy-policy-2";
import BlogView from "./components/BlogView";
import Alphaiota from './pages/Alphaiota';
import ThinkAi from './pages/ThinkAi';
import SmartCities from './pages/smart-cities';


// Create RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// Create LTR cache
const cacheLtr = createCache({
  key: 'mui',
});

type ScrollToTopProps = {
  children: React.ReactNode;
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

// Language Switcher Component
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    localStorage.setItem('i18nextLng', lang); // Persist language preference
  };

  return (
    <div className="hidden lg:flex lg:items-center lg:gap-x-4 lg:mr-4" role="group" aria-label="Language Switcher">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          i18n.language === 'en'
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-pressed={i18n.language === 'en'}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange('ar')}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          i18n.language === 'ar'
            ? 'bg-primary text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        aria-pressed={i18n.language === 'ar'}
      >
        العربية
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [isTranslationLoaded, setIsTranslationLoaded] = useState(false);

  // Set language and direction dynamically on load
  useEffect(() => {
    const defaultLang = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(defaultLang).then(() => {
      setIsTranslationLoaded(true);
    });
  }, [i18n]);

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Add RTL class to body for global styling
    if (isRtl) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    // Set RTL-specific CSS variables
    document.documentElement.style.setProperty('--start', isRtl ? 'right' : 'left');
    document.documentElement.style.setProperty('--end', isRtl ? 'left' : 'right');
  }, [i18n.language, isRtl]);

  if (!isTranslationLoaded) {
    return <div>Loading...</div>; // Show loading until translations are fully loaded
  }

  return (
    <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
      <HelmetProvider>
        <Router>
          <div className={`flex flex-col min-h-screen ${isRtl ? 'rtl' : 'ltr'}`}>
            <Header />
            <LanguageSwitcher />
            <main className="flex-grow pt-16">
              <ScrollToTop>
                <Routes>
                  {/* Define Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/customer-success" element={<CustomerSuccess />} />
                  <Route path="/customer-success/:id" element={<CaseStudyPage />} />
                  <Route path="/solutions" element={<Solutions />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/ThinkAi" element={<ThinkAi />} />
                  <Route path="/Alphaiota" element={<Alphaiota />} />
                  <Route path="/smart-cities" element={<SmartCities />} />
                  {/* Privacy and Policy Pages */}
                  <Route path="/terms-and-conditions2" element={<TermsAndConditions />} />
                  <Route path="/privacy-policy-2" element={<PrivacyPolicy />} />
                  
                  {/* Solution Sub-Pages */}
                  <Route path="/solutions/snam-travel" element={<Travel />} />
                  <Route path="/solutions/snam-muqeem" element={<Muqeem />} />
                  <Route path="/solutions/snam-yaqeen" element={<Yaqeen />} />
                  <Route path="/solutions/erp" element={<S4HANA />} />
                  <Route path="/solutions/hr" element={<SuccessFactors />} />
                  <Route path="/solutions/customer-experience" element={<SAPHybris />} />
                  <Route path="/solutions/procurement" element={<SAPAriba />} />
                  <Route path="/solutions/sap-analytics-cloud" element={<SAPAnalytics />} />
                  <Route path="/solutions/ai-powered-recruitment" element={<AIPoweredRecruitment />} />
                  <Route path="/solutions/ai-driven-analytics" element={<AIDrivenAnalytics />} />
                  
                  {/* SNAM-QPPS Landing Page */}
                  <Route path="/solutions/hr/snam" element={<SNAM />} />
                  
                  {/* Services Sub-Pages */}
                  <Route path="/services/sap-implementation" element={<SAPImplementation />} />
                  <Route path="/services/ai-data-analytics" element={<AIDataAnalytics />} />
                  <Route path="/services/cloud-computing-services" element={<CloudServices />} />
                  <Route path="/services/enterprise-data-management" element={<DataManagement />} />
                  <Route path="/services/digital-transformation-consulting" element={<DigitalConsulting />} />
                  <Route path="/services/custom-software-development" element={<SoftwareDevelopment />} />
                  
                  {/* NewsView and BlogView Pages */}
                  <Route path="/news/:slug" element={<NewsView />} />
                  <Route path="/blog/:slug" element={<BlogView />} />
                  
                  {/* SNS Business Card Generator Page */}
                  <Route path="/BusinessCardGenerator" element={<BusinessCardCreator />} />
                </Routes>
              </ScrollToTop>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </CacheProvider>
  );
};

export default App;
