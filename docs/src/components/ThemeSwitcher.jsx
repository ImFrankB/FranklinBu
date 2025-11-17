import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    light: "☀️",
    dark: "🌙",
    breastCancer: "🎀",
    autism: "🧩",
    environmental: "🌱",
    gad: "💚",
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className={`absolute bottom-20 right-0 ${theme.card} ${theme.border} border rounded-lg shadow-2xl p-4 w-64`}
          >
            <h3
              className={`text-sm font-medium ${theme.text} mb-3 tracking-wider`}
            >
              SELECT THEME
            </h3>
            <div className="space-y-2">
              {Object.keys(themes).map((themeName) => (
                <motion.button
                  key={themeName}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    changeTheme(themeName);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded transition-all duration-300 flex items-center gap-3 ${
                    currentTheme === themeName
                      ? theme.accent + " text-white"
                      : theme.border +
                        " border " +
                        theme.text +
                        " hover:border-current"
                  }`}
                >
                  <span className="text-xl">{themeIcons[themeName]}</span>
                  <span className="text-sm tracking-wide">
                    {themes[themeName].name}
                  </span>
                  {currentTheme === themeName && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full ${theme.accent} text-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-300`}
        aria-label="Theme Switcher"
      >
        {themeIcons[currentTheme]}
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
