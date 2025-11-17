import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { path: "/", label: "Home", number: "01" },
    { path: "/about", label: "About", number: "02" },
    { path: "/Projects", label: "Projects", number: "03" },
    { path: "/contact", label: "Contact", number: "04" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? `${theme.bg}/80 backdrop-blur-md` : "bg-transparent"
        }`}
      >
        <div className="px-8 md:px-16 py-6">
          <div className="flex justify-between items-center">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`text-2xl font-light tracking-wider ${theme.text}`}
              >
                FRANKLIN-BU
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div whileHover={{ y: -2 }} className="relative group">
                    <span className={`text-xs ${theme.textTertiary} mr-2`}>
                      {item.number}
                    </span>
                    <span
                      className={`text-sm tracking-wider ${
                        location.pathname === item.path
                          ? theme.text
                          : theme.textSecondary
                      } transition-colors`}
                      style={{
                        color:
                          location.pathname === item.path
                            ? undefined
                            : undefined,
                      }}
                    >
                      {item.label}
                    </span>
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-[1px] ${theme.accent}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: location.pathname === item.path ? "100%" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 md:hidden"
              data-cursor="pointer"
            >
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 0 : -4 }}
                className={`absolute left-0 w-full h-[1px] ${theme.accent}`}
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className={`absolute left-0 w-full h-[1px] ${theme.accent}`}
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? 0 : 4 }}
                className={`absolute left-0 w-full h-[1px] ${theme.accent}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.5,
              ease: [0.76, 0, 0.24, 1],
            }}
            className={`fixed inset-0 ${theme.bg} z-30 md:hidden`}
          >
            <div className="flex flex-col justify-center items-center h-full">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-4"
                  >
                    <span className={`${theme.textTertiary} text-sm mr-4`}>
                      {item.number}
                    </span>
                    <span className={`text-3xl font-light ${theme.text}`}>
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
