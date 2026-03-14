import React, { 
  useEffect, 
  useCallback, 
  useRef, 
  memo, 
  useReducer} from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  Building2, 
  Activity, 
  Network, 
  Brain,
  LucideIcon
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

// Types
interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  link: string;
  backgroundVideo: string;
}

interface SliderState {
  activeSection: number;
  isAnimating: boolean;
  direction: 'next' | 'prev';
  isMobile: boolean;
  isPaused: boolean;
  isLoaded: boolean;
}


// Memoized default translations
const DEFAULT_TRANSLATIONS: Record<string, string> = {
  'smartCities.title': "Building Tomorrow's Smart Cities Today",
  'smartCities.subtitle': 'Future of Urban Living',
  'smartCities.description': "Lead the digital transformation of cities with our cutting-edge smart city solutions.",
  'smartCities.features.0': 'Smart Infrastructure',
  'smartCities.features.1': 'IoT Integration',
  'smartCities.features.2': 'Urban Analytics',
  'sap.title': 'SAP Solutions',
  'sap.subtitle': 'Enterprise Excellence',
  'sap.description': 'Comprehensive SAP implementation and consulting',
  'sap.features.0': 'Digital Transformation',
  'sap.features.1': 'Process Optimization',
  'sap.features.2': 'Enterprise Integration',
  'snam.title': 'SNAM',
  'snam.subtitle': 'HR Management',
  'snam.description': 'Next-generation HR management solution',
  'snam.features.0': 'Talent Management',
  'snam.features.1': 'Performance Tracking',
  'snam.features.2': 'Employee Engagement',
  'snam.features.3': 'Analytics Dashboard',

  'alphaiota.title': 'Alphaiota',
  'alphaiota.subtitle': 'Innovation Platform',
  'alphaiota.description': 'Advancing technology through innovation',
  'alphaiota.features.0': 'AI Integration',
  'alphaiota.features.1': 'Data Analytics',
  'alphaiota.features.2': 'Cloud Solutions',

  'thinkAi.title': 'Think AI',
  'thinkAi.subtitle': 'AI Solutions',
  'thinkAi.description': 'Intelligent solutions for modern businesses',
  'thinkAi.features.0': 'Machine Learning',
  'thinkAi.features.1': 'Neural Networks',
  'thinkAi.features.2': 'Predictive Analytics',
  'common.learnMore': 'Learn More'
};

// Memoized sections data
const SECTIONS: SectionData[] = [
  {
    id: 1,
    title: "smartCities.title",
    subtitle: "smartCities.subtitle",
    description: "smartCities.description",
    icon: Network,
    features: ["smartCities.features.0", "smartCities.features.1", "smartCities.features.2"],
    link: "/#SmartCitiesSection",
    backgroundVideo: "/hero video/Smartcity - Riyadh.mp4"
  },
  {
    id: 2,
    title: "sap.title",
    subtitle: "sap.subtitle",
    description: "sap.description",
    icon: Building2,
    features: ["sap.features.0", "sap.features.1", "sap.features.2"],
    link: "/services",
    backgroundVideo: "/hero video/SAP-2030.mp4"
  },
  {
    id: 3,
    title: "snam.title",
    subtitle: "snam.subtitle",
    description: "snam.description",
    icon: Activity,
    features: ["snam.features.0", "snam.features.1", "snam.features.2", "snam.features.3"],
    link: "/solutions/hr/snam",
    backgroundVideo: "/hero video/SNAM.mp4"
  },
  {
    id: 4,
    title: "alphaiota.title",
    subtitle: "alphaiota.subtitle",
    description: "alphaiota.description",
    icon: Activity,
    features: ["alphaiota.features.0", "alphaiota.features.1", "alphaiota.features.2"],
    link: "/#AlphaiotaSection",
    backgroundVideo: "/hero video/Alphaiota.mp4"
  },
  {
    id: 5,
    title: "thinkAi.title",
    subtitle: "thinkAi.subtitle",
    description: "thinkAi.description",
    icon: Brain,
    features: ["thinkAi.features.0", "thinkAi.features.1", "thinkAi.features.2"],
    link: "/#ThinkAISection",
    backgroundVideo: "/hero video/ThinkAI.mp4"
  }
];

// Enhanced translation hook
const useTranslationWithFallback = () => {
  const { t, i18n, ready } = useTranslation('Hero', { useSuspense: false });
  
  const safeTranslate = useCallback((key: string, fallback?: string) => {
    if (!ready) return fallback || DEFAULT_TRANSLATIONS[key] || key;
    
    try {
      const translation = t(key);
      return translation === key 
        ? (fallback || DEFAULT_TRANSLATIONS[key] || key) 
        : translation;
    } catch (error) {
      console.warn(`Translation error for key: ${key}`, error);
      return fallback || DEFAULT_TRANSLATIONS[key] || key;
    }
  }, [ready, t]);

  return { t: safeTranslate, i18n, ready };
};

// Loading Indicator Component
const LoadingIndicator: React.FC = () => (
  <div className="relative h-screen w-full bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  </div>
);

// Memoized Section Component
const SectionComponent = memo(({ 
  section, 
  isActive, 
  direction, 
  isMobile, 
  t, 
  videoRef 
}: {
  section: SectionData;
  isActive: boolean;
  direction: 'next' | 'prev';
  isMobile: boolean;
  t: (key: string) => string;
  videoRef: React.RefObject<HTMLVideoElement>;
}) => {
  const title = t(section.title);
  const subtitle = t(section.subtitle);
  const description = t(section.description);
  const Icon = section.icon;

  return (
    <div 
      role="tabpanel" 
      aria-hidden={!isActive}
      className={`absolute inset-0 flex transition-all ${
        isActive 
          ? 'opacity-100 translate-x-0 scale-100' 
          : direction === 'next' 
            ? 'opacity-0 translate-x-[10%] scale-[0.98]' 
            : 'opacity-0 -translate-x-[10%] scale-[0.98]'
      }`}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source src={section.backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="w-full lg:w-1/2 px-6 lg:px-12 py-8 lg:py-0 flex flex-col justify-center min-h-screen relative z-20">
        <div className="max-w-3xl space-y-6 lg:space-y-8 mt-20 lg:mt-0">
          <div className="flex items-center space-x-4">
            <div className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <Icon size={24} className="text-white lg:w-10 lg:h-10" />
            </div>
            <h3 className="text-white text-sm lg:text-xl font-light tracking-wide">
              {subtitle}
            </h3>
          </div>

          <h2 className={`text-5xl lg:text-6xl font-bold tracking-tight text-white ${isMobile ? 'text-2xl' : ''}`}>
            {title}
          </h2>

          <p className="text-white text-lg lg:text-xl leading-relaxed backdrop-blur-sm bg-white/5 p-4 lg:p-6 rounded-xl border border-white/10">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 lg:gap-4 pt-4 lg:pt-6">
            {section.features.map((feature, i) => (
              <span
                key={i}
                className="px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-white/20 to-white/10 
                  backdrop-blur-sm rounded-full text-sm lg:text-base text-white border border-white/20"
              >
                {t(feature)}
              </span>
            ))}
          </div>

          <button
            onClick={() => window.location.href = section.link}
            className="mt-6 lg:mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-white 
              to-white/90 text-[#36a0d0] px-6 lg:px-8 py-2 lg:py-3 rounded-full text-base lg:text-lg 
              font-medium hover:scale-105 group"
          >
            {t('common.learnMore')}
            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
});

// Navigation Controls Component
const NavigationControls = memo(({ 
  activeSection, 
  sections, 
  handlePrev, 
  handleNext, 
  handleDotClick 
}: {
  activeSection: number;
  sections: SectionData[];
  handlePrev: () => void;
  handleNext: () => void;
  handleDotClick: (index: number) => void;
}) => (
  <div className="absolute inset-x-0 bottom-6 lg:bottom-12 flex justify-center items-center space-x-4">
    <button
      onClick={handlePrev}
      aria-label="Previous Section"
      className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm"
    >
      <ChevronLeft size={20} className="text-white group-hover:text-[#36a0d0] mx-auto" />
    </button>

    <div className="flex space-x-2">
      {sections.map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          aria-label={`Go to section ${index + 1}`}
          className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
            index === activeSection 
              ? 'w-6 lg:w-8 bg-gradient-to-r from-white to-white/80' 
              : 'w-2 bg-white/30 hover:bg-white/50'
          }`}
        />
      ))}
    </div>

    <button
      onClick={handleNext}
      aria-label="Next Section"
      className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm"
    >
      <ChevronRight size={20} className="text-white group-hover:text-[#36a0d0] mx-auto" />
    </button>
  </div>
));

// Main Slider Component
const Slider: React.FC = () => {
  const { t, ready } = useTranslationWithFallback();
  
  // Reducer for state management
  const [state, dispatch] = useReducer((prev: SliderState, next: Partial<SliderState>): SliderState => ({
    ...prev,
    ...next
  }), {
    activeSection: 0,
    isAnimating: false,
    direction: 'next',
    isMobile: false,
    isPaused: false,
    isLoaded: false
  });

  const videoRefs = useRef<Record<number, React.RefObject<HTMLVideoElement>>>({});

  // Mobile detection
  const detectMobile = useCallback(() => 
    window.matchMedia('(max-width: 768px)').matches, 
  []);

  // Navigation handler
  const handleNavigation = useCallback((newIndex: number, navDirection: 'next' | 'prev') => {
    if (state.isAnimating) return;

    dispatch({
      activeSection: newIndex,
      direction: navDirection,
      isAnimating: true,
      isPaused: true
    });

    const timer = setTimeout(() => {
      dispatch({ isAnimating: false, isPaused: false });
    }, 800);

    return () => clearTimeout(timer);
  }, [state.isAnimating]);

  // Effects for resize and initialization
  useEffect(() => {
    // Initialize video refs
    SECTIONS.forEach((section) => {
      videoRefs.current[section.id] = React.createRef();
    });

    // Mobile detection
    dispatch({ isMobile: detectMobile() });
    const handleResize = _.debounce(() => {
      dispatch({ isMobile: detectMobile() });
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (state.isPaused) return;

    const timer = setInterval(() => {
      const nextIndex = (state.activeSection + 1) % SECTIONS.length;
      handleNavigation(nextIndex, 'next');
    }, 12000);

    return () => clearInterval(timer);
  }, [state.activeSection, state.isPaused, handleNavigation]);

  // Video management
  useEffect(() => {
    const currentVideo = videoRefs.current[SECTIONS[state.activeSection].id]?.current;
    
    if (currentVideo) {
      currentVideo.play().catch(error => {
        console.warn('Video autoplay prevented:', error);
      });
    }
  }, [state.activeSection]);

  // Loading state
  if (!ready) return <LoadingIndicator />;

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-[#36a0d0] via-[#5bb6bb] to-[#6ec6ab] overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        {SECTIONS.map((section, index) => (
          <SectionComponent
            key={section.id}
            section={section}
            isActive={index === state.activeSection}
            direction={state.direction}
            isMobile={state.isMobile}
            t={t}
            videoRef={videoRefs.current[section.id]}
          />
        ))}
      </div>

      <NavigationControls
        activeSection={state.activeSection}
        sections={SECTIONS}
        handlePrev={() => handleNavigation(
          (state.activeSection - 1 + SECTIONS.length) % SECTIONS.length, 
          'prev'
        )}
        handleNext={() => handleNavigation(
          (state.activeSection + 1) % SECTIONS.length, 
          'next'
        )}
        handleDotClick={(index) => handleNavigation(
          index, 
          index > state.activeSection ? 'next' : 'prev'
        )}
      />

      <div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        aria-label="Scroll down"
      >
        <ChevronDown 
          size={36}
          className="text-white/80 hover:text-white transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default memo(Slider);