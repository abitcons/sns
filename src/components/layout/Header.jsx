import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Logo from "../shared/logo/Logo";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation('common');
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const defaultLang = localStorage.getItem('i18nextLng') || 'en';

        const initializeLanguage = () => {
            document.documentElement.lang = defaultLang;
            document.documentElement.dir = defaultLang === "ar" ? "rtl" : "ltr";
            i18n.changeLanguage(defaultLang);
        };

        initializeLanguage();
    }, [i18n]);

    const navigation = React.useMemo(() => [
        { name: t('header.navigation.home'), href: "/" },
        { name: t('header.navigation.about'), href: "/about" },
        {
            name: t('header.navigation.services'),
            href: "/services",
            submenu: [
                {
                    name: t('header.services_submenu.digital_transformation'),
                    href: "/services/digital-transformation-consulting"
                },
                {
                    name: t('header.services_submenu.sap_implementation'),
                    href: "/services/sap-implementation"
                },
                {
                    name: t('header.services_submenu.ai_data_analytics'),
                    href: "/services/ai-data-analytics"
                },
                {
                    name: t('header.services_submenu.cloud_computing'),
                    href: "/services/cloud-computing-services"
                },
                {
                    name: t('header.services_submenu.software_development'),
                    href: "/services/custom-software-development"
                },
                {
                    name: t('header.services_submenu.data_management'),
                    href: "/services/enterprise-data-management"
                },
            ],
        },
        {
            name: t('header.navigation.solutions'),
            href: "/solutions",
            submenu: [
                {
                    name: t('header.solutions_submenu.erp_solutions'),
                    href: "/solutions/erp"
                },
                {
                    name: t('header.solutions_submenu.hr_solutions'),
                    href: "/solutions/hr"
                },
                {
                    name: t('header.solutions_submenu.customer_experience'),
                    href: "/solutions/customer-experience"
                },
                {
                    name: t('header.solutions_submenu.procurement'),
                    href: "/solutions/procurement"
                },
                {
                    name: t('header.solutions_submenu.snam_solutions'),
                    href: "/solutions/hr/snam"
                },
            ],
        },
        { name: t('header.navigation.careers'), href: "/careers" },
        { name: t('header.navigation.blog'), href: "/blog" },
        { name: t('header.navigation.contact'), href: "/contact" },
    ], [t]);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 20);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const changeLanguage = useCallback((lang) => {
        try {
            localStorage.setItem('i18nextLng', lang);
            i18n.changeLanguage(lang);
            document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
            document.documentElement.lang = lang;
            setMobileMenuOpen(false);
        } catch (error) {
            console.error('Language change failed:', error);
        }
    }, [i18n]);

    const isRtl = i18n.language === 'ar';

    const handleOutsideClick = useCallback((event) => {
        if (mobileMenuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    }, [mobileMenuOpen, setMobileMenuOpen]);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [handleOutsideClick]);

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-white"}`}>
            <nav className="mx-auto flex w-full items-center justify-between p-4 lg:px-8">
                {/* Logo Section with both logos - Add margin-right */}
                <div className="flex items-center gap-6 flex-shrink-0 lg:mr-24">
                    {/* Main Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Logo variant="default" className="h-16 md:h-[4.5rem]" />
                    </motion.div>
                    {/* Separator Line */}
                    <div className="h-12 w-px bg-gray-200 hidden md:block" />

                    {/* ELM Partner Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="hidden md:block">
                        <img src="/Partners Logo/ELM.svg" alt="ELM Logo" className="h-12 md:h-14 object-contain" />
                    </motion.div>
                </div>
                {/* Desktop Navigation - Keep the existing gap */}
                <div className="hidden lg:flex lg:items-center lg:gap-x-24 flex-1 justify-end w-full">
                    <div className="flex lg:items-center lg:gap-x-6">
                        {navigation.map((item) => {
                            const isContact = item.name === t('header.navigation.contact');
                            const hasSubmenu = item.submenu;
                            const isActive = location.pathname === item.href || (hasSubmenu && item.submenu?.some(subItem => location.pathname === subItem.href));

                            return (
                                <motion.div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={() => hasSubmenu && setActiveDropdown(item.name)}
                                    onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link
                                        to={item.href}
                                        className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 
                      group flex items-center gap-2 rounded-xl overflow-hidden
                      ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                                    >
                                        {/* Background animation */}
                                        <motion.div
                                            className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100"
                                            initial={false}
                                            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        />
                                        <span className="relative z-10">{item.name}</span>
                                        {hasSubmenu && (
                                            <motion.div animate={{ rotate: activeDropdown === item.name ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                                <ChevronDown className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                        {/*{isContact && item.icon && ( // No icon here
                                            <motion.div whileHover={{ rotate: 12, scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
                                                <item.icon className="w-5 h-5" />
                                            </motion.div>
                                        )}*/}

                                        {/* Active indicator */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                initial={false}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                    {hasSubmenu && item.submenu && (
                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} w-72 bg-white rounded-xl shadow-lg py-2 mt-2 backdrop-blur-sm bg-white/80`}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                    {item.submenu.map((subItem, index) => (
                                                        <motion.div initial={{ opacity: 0, x: isRtl ? 20 : -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} key={subItem.href}>
                                                            <Link to={subItem.href} className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                                                                <motion.div whileHover={{ x: isRtl ? -4 : 4 }} className="flex items-center justify-between">
                                                                    <span>{subItem.name}</span>
                                                                    <motion.div initial={{ opacity: 0, x: isRtl ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                                                                        <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 ${isRtl ? 'rotate-180' : ''}`} />
                                                                    </motion.div>
                                                                </motion.div>
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop Language Switcher */}
                <div className="hidden lg:flex items-center gap-4 ml-6">

                    {/* Language Toggle */}
                    <div className="flex items-center bg-gray-50 rounded-2xl p-1">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => changeLanguage("en")}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 
        ${i18n.language === "en"
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-gray-600 hover:text-primary"}`}
                        >
                            <span>English</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => changeLanguage("ar")}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 
        ${i18n.language === "ar"
                                    ? "bg-white text-primary shadow-sm"
                                    : "text-gray-600 hover:text-primary"}`}
                        >
                            <span>عربي</span>
                        </motion.button>
                    </div>
                </div>


                {/* Mobile Menu Button */}
                <motion.button
                    type="button"
                    className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={mobileMenuOpen ? "close" : "menu"}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </motion.div>
                    </AnimatePresence>
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                            <motion.div
                                ref={mobileMenuRef}
                                key="mobile-menu"
                                initial={{ x: isRtl ? "100%" : "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: isRtl ? "100%" : "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className={`fixed inset-y-0 ${isRtl ? 'right-0' : 'left-0'} w-full max-w-sm bg-white shadow-lg z-50 lg:hidden`}
                                style={{
                                    overflowY: 'auto',
                                    WebkitOverflowScrolling: 'touch',
                                    height: '100vh' // Set height to 100vh
                                }}
                            >
                                {/* Mobile Menu Header with both logos */}
                                <div className="flex items-center justify-between p-8 border-b">
                                    <div className="flex items-center gap-8">
                                        {/* Main Logo */}
                                        <Logo variant="default" className="h-14" />
                                        {/* Separator Line */}
                                        <div className="h-12 w-px bg-gray-200" />
                                        {/* ELM Logo for mobile */}
                                        <img src="/Partners Logo/ELM.svg" alt="ELM Logo" className="h-12 object-contain" />
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 rounded-xl text-gray-700 hover:bg-gray-100"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <X className="h-6 w-6" />
                                    </motion.button>
                                </div>
                                {/* Mobile Language Switcher */}
                                <div className="px-8 py-6 border-b">
                                    <div className="flex gap-2 bg-gray-50 rounded-2xl p-1">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                changeLanguage("en");
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 
        ${i18n.language === "en"
                                                    ? "bg-white text-primary shadow-sm"
                                                    : "text-gray-600 hover:text-primary"}`}
                                        >
                                            <span>English</span>
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                changeLanguage("ar");
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 
        ${i18n.language === "ar"
                                                    ? "bg-white text-primary shadow-sm"
                                                    : "text-gray-600 hover:text-primary"}`}
                                        >
                                            <span>عربي</span>
                                        </motion.button>
                                    </div>
                                </div>
                                {/* Mobile Navigation Menu */}
                                <nav className="p-8">
                                    <motion.ul
                                        className="space-y-6"
                                        initial="closed"
                                        animate="open"
                                        variants={{
                                            open: {
                                                transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                                            },
                                            closed: {
                                                transition: { staggerChildren: 0.05, staggerDirection: -1 }
                                            }
                                        }}
                                    >
                                        {navigation.map((item) => (
                                            <motion.li
                                                key={item.href}
                                                variants={{
                                                    open: {
                                                        y: 0,
                                                        opacity: 1,
                                                        transition: {
                                                            y: { stiffness: 1000, velocity: -100 }
                                                        }
                                                    },
                                                    closed: {
                                                        y: 50,
                                                        opacity: 0,
                                                        transition: {
                                                            y: { stiffness: 1000 }
                                                        }
                                                    }
                                                }}
                                            >
                                                <div className="relative">
                                                    <div
                                                        className={`flex items-center justify-between py-4 px-6 rounded-xl text-lg font-semibold
    transition-all duration-300 group relative overflow-hidden cursor-pointer
    ${location.pathname === item.href
                                                                ? "bg-primary/10 text-primary"
                                                                : "text-gray-700 hover:text-primary"}`}
                                                    >
                                                        <Link
                                                            to={item.href}
                                                            className="block w-full"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            <span className="relative z-10">{item.name}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </nav>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Header;
