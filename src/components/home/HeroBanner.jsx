import React, { useEffect, useCallback, useRef, memo, useReducer, useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, Building2, Activity, Network, Brain, Play, Pause } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';
import { motion } from 'framer-motion';

const DEFAULT_TRANSLATIONS = {
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
    
};

const SECTIONS = [
    {
        id: 1,
        title: "smartCities.title",
        subtitle: "smartCities.subtitle",
        description: "smartCities.description",
        icon: Network,
        features: ["smartCities.features.0", "smartCities.features.1", "smartCities.features.2"],
        link: "/#SmartCitiesSection",
        backgroundVideo: "/hero video/Smartcity - Riyadh.mp4",
        backgroundVideoAr: "/hero video/Smartcity - Riyadh-ar.mp4"
    },
    {
        id: 2,
        title: "sap.title",
        subtitle: "sap.subtitle",
        description: "sap.description",
        icon: Building2,
        features: ["sap.features.0", "sap.features.1", "sap.features.2"],
        link: "/services",
        backgroundVideo: "/hero video/SAP-Saudivision2030.mp4",
        backgroundVideoAr: "/hero video/SAP-Saudivision2030-Ar.mp4"
    },
    {
        id: 3,
        title: "snam.title",
        subtitle: "snam.subtitle",
        description: "snam.description",
        icon: Activity,
        features: ["snam.features.0", "snam.features.1", "snam.features.2", "snam.features.3"],
        link: "/solutions/hr/snam",
        backgroundVideo: "/hero video/SNAM.mp4",
        backgroundVideoAr: "/hero video/SNAM-Ar.mp4"
    },
    {
        id: 4,
        title: "alphaiota.title",
        subtitle: "alphaiota.subtitle",
        description: "alphaiota.description",
        icon: Activity,
        features: ["alphaiota.features.0", "alphaiota.features.1", "alphaiota.features.2"],
        link: "/#AlphaiotaSection",
        backgroundVideo: "/hero video/Alphaiota.mp4",
        backgroundVideoAr: "/hero video/Alphaiota-Ar.mp4"
    }
];

const useTranslationWithFallback = () => {
    const { t, i18n, ready } = useTranslation('Hero', { useSuspense: false });

    const safeTranslate = useCallback((key, fallback) => {
        if (!ready) return fallback || DEFAULT_TRANSLATIONS[key] || key;
        try {
            const translation = t(key);
            return translation === key ? (fallback || DEFAULT_TRANSLATIONS[key] || key) : translation;
        } catch (error) {
            console.warn(`Translation error for key: ${key}`, error);
            return fallback || DEFAULT_TRANSLATIONS[key] || key;
        }
    }, [ready, t]);

    return { t: safeTranslate, i18n, ready };
};

const NavigationControls = memo(({ activeSection, sections, handlePrev, handleNext, handleDotClick, isMobile }) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const handleScrollDown = () => {
        const viewportHeight = window.innerHeight;
        window.scrollTo({
            top: viewportHeight,
            behavior: 'smooth'
        });
    };

    const arrowStyle = { transform: isRTL ? 'scaleX(-1)' : 'none' };

    return (
        <>
            {/* Conditional rendering for mobile and desktop */}
            {isMobile ? (
                <>
                    {/* Mobile navigation overlay */}
                    <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 pointer-events-none">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous Section"
                            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center pointer-events-auto"
                            style={arrowStyle}
                        >
                            <ChevronLeft size={20} className="text-white" />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next Section"
                            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center pointer-events-auto"
                            style={arrowStyle}
                        >
                            <ChevronRight size={20} className="text-white" />
                        </button>
                    </div>
                    <div className="absolute inset-x-0 bottom-44 lg:bottom-40 flex justify-center">
                        <button
                            onClick={handleScrollDown}
                            aria-label="Scroll to Next Section"
                            className={`w-8 h-8 rounded-xl bg-gradient-to-r from-[#36a0d0] to-[#5bb6bb] shadow-lg group transition-all duration-300 animate-bounce`}
                        >
                            <ChevronDown
                                size={16}
                                className={`text-white mx-auto`}
                            />
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="absolute inset-x-0 bottom-44 lg:bottom-40 flex justify-center">
                        <button
                            onClick={handleScrollDown}
                            aria-label="Scroll to Next Section"
                            className={`w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 group transition-all duration-300 animate-bounce`}
                        >
                            <ChevronDown
                                size={20}
                                className={`text-white group-hover:text-[#36a0d0] mx-auto`}
                            />
                        </button>
                    </div>
                    <div
                        className="absolute inset-x-0 bottom-20 lg:bottom-12 flex justify-center items-center space-x-4"
                        style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                    >
                        {isRTL ? (
                            <>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next Section"
                                    className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer"
                                    style={arrowStyle}
                                >
                                    <ChevronRight size={16} className="text-white group-hover:text-[#36a0d0] mx-auto" />
                                </button>
                                <div className="flex space-x-2" style={{ direction: 'ltr' }}>
                                    {sections.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleDotClick(index)}
                                            aria-label={`Go to section ${index + 1}`}
                                            className={`h-1.5 lg:h-2 rounded-full cursor-pointer transition-all duration-300 ${index === activeSection ? 'w-4 lg:w-8 bg-gradient-to-r from-white to-white/80' : 'w-1.5 lg:w-2 bg-white/30 hover:bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous Section"
                                    className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer"
                                    style={arrowStyle}
                                >
                                    <ChevronLeft size={16} className="text-white group-hover:text-[#36a0d0] mx-auto" />
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous Section"
                                    className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer"
                                    style={arrowStyle}
                                >
                                    <ChevronLeft size={16} className="text-white group-hover:text-[#36a0d0] mx-auto" />
                                </button>
                                <div className="flex space-x-2">
                                    {sections.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleDotClick(index)}
                                            aria-label={`Go to section ${index + 1}`}
                                            className={`h-1.5 lg:h-2 rounded-full cursor-pointer transition-all duration-300 ${index === activeSection ? 'w-4 lg:w-8 bg-gradient-to-r from-white to-white/80' : 'w-1.5 lg:w-2 bg-white/30 hover:bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next Section"
                                    className="group w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm cursor-pointer"
                                    style={arrowStyle}
                                >
                                    <ChevronRight size={16} className="text-white group-hover:text-[#36a0d0] mx-auto" />
                                </button>
                            </>
                        )}
                    </div>
                </>
            )}
        </>
    );
});

NavigationControls.displayName = 'NavigationControls';

const SectionComponent = memo(({ section, isActive, direction, isMobile, t, videoRef, index, isVideoLoaded }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const playCount = useRef(0);
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const title = t(section.title);
    const subtitle = t(section.subtitle);
    const description = t(section.description);
    const Icon = section.icon;

    const playVideo = useCallback(() => {
        if (videoRef?.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                    playCount.current += 1;
                }).catch(error => {
                    console.warn('Video autoplay failed:', error);
                    setIsPlaying(false);
                });
            }
        }
    }, [videoRef]);

    const getVideoSource = () => {
        let videoSource;
        if (isMobile) {
            // Use the English video from the current section on mobile
            videoSource = section.backgroundVideo;
        } else if (isRTL && index > 0) {
            videoSource = section.backgroundVideoAr;
        } else {
            videoSource = section.backgroundVideo;
        }
        return videoSource;
    };

    const shouldMirrorVideo = isRTL && index === 0;

    const videoKey = getVideoSource();

    useEffect(() => {
        if (videoRef?.current) {
            if (isActive) {
                videoRef.current.currentTime = 0;
                videoRef.current.muted = true;
                playVideo();
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isActive, videoRef, playVideo]);

    const handlePlayPause = useCallback(() => {
        if (videoRef?.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.muted = false;
                playVideo();
            }
        }
    }, [isPlaying, videoRef, playVideo]);

    return (
        <div
            role="tabpanel"
            aria-hidden={!isActive}
            className={`absolute inset-0 flex transition-all ${isActive
                ? 'opacity-100 translate-x-0 scale-100'
                : direction === 'next'
                    ? 'opacity-0 translate-x-[10%] scale-[0.98]'
                    : 'opacity-0 -translate-x-[10%] scale-[0.98]'
                }`}
        >
            {isMobile ? (
                <div className="relative h-full w-full flex flex-col">
                    <div className="relative w-full h-1/2">
                        <video
                            key={videoKey}
                            ref={videoRef}
                            className="w-full h-full object-cover object-[100%_center]"
                            muted
                            loop
                            playsInline
                            preload="auto"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <source src={getVideoSource()} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={handlePlayPause}
                                className="absolute bottom-6 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                                {isPlaying ? (
                                    <Pause className="w-6 h-6 text-white" />
                                ) : (
                                    <Play className="w-6 h-6 text-white" />
                                )}
                            </button>
                        </motion.div>
                    </div>
                    <div className="w-full h-1/2 flex flex-col justify-start p-4 pt-2">
                        <div className="flex items-center space-x-2 mb-1">
                            <div className="p-2 rounded-xl" style={{ backgroundColor: 'rgba(54, 160, 208, 0.1)' }}>
                                <Icon size={20} className="text-[#36a0d0] w-5 h-5" />
                            </div>
                            <h3
                                className="text-sm font-light tracking-wide"
                                style={{
                                    color: '#5bb6bb',
                                    direction: isRTL ? 'rtl' : 'ltr'
                                }}
                            >
                                {subtitle}
                            </h3>
                        </div>
                        <h2
                            className="font-bold tracking-tight text-3xl leading-tight mb-1"
                            style={{
                                color: '#36a0d0',
                                direction: isRTL ? 'rtl' : 'ltr'
                            }}
                        >
                            {title}
                        </h2>
                        <div
                            className="flex flex-wrap gap-2 pt-1"
                            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                        >
                            {section.features.slice(0, 2).map((feature, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 rounded-full text-xs"
                                    style={{ color: '#6ec6ab', backgroundColor: 'rgba(110, 198, 171, 0.1)' }}
                                >
                                    {t(feature)}
                                </span>
                            ))}
                        </div>
                        <button
                            onClick={() => window.location.href = section.link}
                            className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-white to-white/90 text-[#36a0d0] px-3 py-1.5 rounded-full text-sm font-medium hover:scale-105 group"
                            style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                        >
                            {t('common.learnMore')}
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <video
                            key={videoKey}
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            preload="auto"
                            className="absolute h-full w-full object-cover"
                            style={{ transform: shouldMirrorVideo ? 'scaleX(-1)' : 'none' }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <source src={getVideoSource()} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={handlePlayPause}
                            className="absolute top-6 left-6 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                            {isPlaying ? (
                                <Pause className="w-7 h-7 text-white" />
                            ) : (
                                <Play className="w-7 h-7 text-white" />
                            )}
                        </button>
                    </motion.div>
                    <div className="w-full lg:w-1/2 px-4 lg:px-12 flex flex-col justify-center relative z-20 min-h-screen py-0">
                        <div className="max-w-3xl space-y-4 lg:space-y-8 mt-0">
                            <div className="flex items-center space-x-4">
                                <div className="p-2 lg:p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                                    <Icon size={24} className="text-white lg:w-10 lg:h-10" />
                                </div>
                                <h3
                                    className="text-white text-xl font-light tracking-wide"
                                    style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                                >
                                    {subtitle}
                                </h3>
                            </div>
                            <h2
                                className="font-bold tracking-tight text-white text-5xl lg:text-6xl"
                                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                            >
                                {title}
                            </h2>
                            <p
                                className="text-white text-lg lg:text-xl leading-relaxed backdrop-blur-sm bg-white/5 p-4 lg:p-6 rounded-xl border border-white/10"
                                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                            >
                                {description}
                            </p>
                            <div
                                className="flex flex-wrap gap-4 pt-6"
                                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                            >
                                {section.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full text-base text-white border border-white/20"
                                    >
                                        {t(feature)}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() => window.location.href = section.link}
                                className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-white to-white/90 text-[#36a0d0] px-8 py-3 rounded-full text-lg font-medium hover:scale-105 group"
                                style={{ direction: isRTL ? 'rtl' : 'ltr' }}
                            >
                                {t('common.learnMore')}
                                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
});

SectionComponent.displayName = 'SectionComponent';

// Main Slider Component
const Slider = () => {
    const { t } = useTranslationWithFallback();
    const autoPlayIntervalRef = useRef(null);
    const videoRefs = useRef({});
    const [firstLoad, setFirstLoad] = useState(true);
    const [videosLoaded, setVideosLoaded] = useState(false);


    const [state, dispatch] = useReducer((prev, next) => ({
        ...prev,
        ...next
    }), {
        activeSection: 0,
        isAnimating: false,
        direction: 'next',
        isMobile: false,
        isPaused: false,
        transitionDelay: 7000,
    });

    const detectMobile = useCallback(() => window.matchMedia('(max-width: 768px)').matches, []);

    const handleNavigation = useCallback((newIndex, navDirection) => {
        if (state.isAnimating) return;

        // Pause the current video
        const currentVideoRef = videoRefs.current[SECTIONS[state.activeSection].id];
        if (currentVideoRef && currentVideoRef.current) {
            currentVideoRef.current.pause();
        }

        dispatch({
            activeSection: newIndex,
            isAnimating: true,
            direction: navDirection,
        });

        // After the animation, reset the isAnimating flag
        setTimeout(() => {
            dispatch({ isAnimating: false });
        }, 500);
    }, [state.isAnimating, state.activeSection]);

    useEffect(() => {
        // Initialize video refs
        SECTIONS.forEach(section => {
            videoRefs.current[section.id] = React.createRef();
        });

        // Detect mobile on mount
        dispatch({ isMobile: detectMobile() });

        // Load all videos and set state when all are loaded
        const loadAllVideos = async () => {
            await Promise.all(
                SECTIONS.map(section => {
                    return new Promise((resolve) => {
                        const videoRef = videoRefs.current[section.id];
                        if (videoRef && videoRef.current) {
                            videoRef.current.onloadeddata = () => {
                                resolve();
                            };
                            videoRef.current.onerror = () => {
                                console.error(`Failed to load video for section ${section.id}`);
                                resolve(); // Resolve even on error to prevent infinite waiting
                            };
                        } else {
                            resolve(); // Resolve if videoRef or videoRef.current is not available
                        }
                    });
                })
            );
            setVideosLoaded(true);
        };

        loadAllVideos();


        // Cleanup function to pause videos and clear timeouts
        return () => {
            clearInterval(autoPlayIntervalRef.current);
            Object.values(videoRefs.current).forEach(ref => {
                if (ref && ref.current) {
                    ref.current.pause();
                }
            });
        };
    }, [detectMobile]);

    useEffect(() => {
        // Play the first video after all videos are loaded
        if (videosLoaded && firstLoad) {
            const firstVideoRef = videoRefs.current[SECTIONS[0].id];
            if (firstVideoRef && firstVideoRef.current) {
                firstVideoRef.current.muted = true;
                firstVideoRef.current.play().catch(error => {
                    console.warn("Autoplay prevented for first video:", error);
                });
            }
            setFirstLoad(false);
        }
    }, [videosLoaded, firstLoad]);


    useEffect(() => {
        const startAutoPlay = () => {
            autoPlayIntervalRef.current = setInterval(() => {
                if (!state.isPaused) {
                    const newIndex = (state.activeSection + 1) % SECTIONS.length;
                    handleNavigation(newIndex, 'next');
                }
            }, state.transitionDelay);
        };

        const stopAutoPlay = () => {
            clearInterval(autoPlayIntervalRef.current);
        };

        if (videosLoaded && !state.isPaused) {
            startAutoPlay();
        } else {
            stopAutoPlay(); // Ensure autoplay is stopped if videos are not yet loaded
        }

        return () => stopAutoPlay();
    }, [state.activeSection, state.isPaused, state.transitionDelay, handleNavigation, videosLoaded]);

    const handlePrev = useCallback(() => {
        const newIndex = (state.activeSection - 1 + SECTIONS.length) % SECTIONS.length;
        handleNavigation(newIndex, 'prev');
    }, [state.activeSection, handleNavigation]);

    const handleNext = useCallback(() => {
        const newIndex = (state.activeSection + 1) % SECTIONS.length;
        handleNavigation(newIndex, 'next');
    }, [state.activeSection, handleNavigation]);

    const handleDotClick = useCallback((index) => {
        if (state.isAnimating || index === state.activeSection) return;
        const direction = index > state.activeSection ? 'next' : 'prev';
        handleNavigation(index, direction);
    }, [state.activeSection, state.isAnimating, handleNavigation]);

    const handleMouseEnter = useCallback(() => {
        dispatch({ isPaused: true });
    }, []);

    const handleMouseLeave = useCallback(() => {
        dispatch({ isPaused: false });
    }, []);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [handlePrev, handleNext]);

    useEffect(() => {
        const handleResize = () => {
            dispatch({ isMobile: detectMobile() });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [detectMobile]);

    return (
        <div
            className="relative w-full h-screen overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {SECTIONS.map((section, index) => (
                <SectionComponent
                    key={section.id}
                    section={section}
                    isActive={index === state.activeSection}
                    direction={state.direction}
                    isMobile={state.isMobile}
                    t={t}
                    videoRef={videoRefs.current[section.id]}
                    index={index}
                    isVideoLoaded={videosLoaded}
                />
            ))}

            <NavigationControls
                activeSection={state.activeSection}
                sections={SECTIONS}
                handlePrev={handlePrev}
                handleNext={handleNext}
                handleDotClick={handleDotClick}
                isMobile={state.isMobile}
            />
        </div>
    );
};

export default Slider;
