import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../shared/logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Customer Success", href: "/customer-success" },
  { name: "Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo variant="default" className="h-16 md:h-[4.5rem]" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-lg font-semibold transition-colors duration-300 ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-gray-700 hover:text-[#36a0d0]"
              } ${
                item.name === "Contact"
                  ? "border-2 border-primary rounded-lg px-4 py-[6px] shadow-md hover:bg-primary hover:text-white transition-all duration-300 flex items-center"
                  : ""
              }`}
              style={{
                display: "flex", // Ensures alignment
                alignItems: "center",
                height: "auto",
              }}
            >
              {location.pathname === item.href && item.name !== "Contact" && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary"
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 text-gray-700"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-label="Mobile Navigation"
          >
            <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-lg flex flex-col">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center bg-white p-4 shadow">
                <p className="text-lg font-semibold text-gray-800">Menu</p>
                <button
                  type="button"
                  className="p-2 text-gray-700"
                  onClick={toggleMenu}
                  aria-label="Close Menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 flex-1 overflow-y-auto">
                <ul className="space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={`block text-lg font-semibold transition-colors duration-300 ${
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-gray-900 hover:text-[#36a0d0]"
                        }`}
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
