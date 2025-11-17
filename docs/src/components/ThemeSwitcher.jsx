import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themes } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeIcons = {
    light: "☀️",
    dark: "🌙",
    noir: "🎬",
    breastCancer: "🎀",
    autism: "🧩",
    environmental: "🌱",
    gad: "💚",
  };

  const themeColors = {
    light: "from-slate-900 via-slate-800 to-zinc-900",
    dark: "from-purple-600 to-pink-600",
    noir: "from-neutral-100 via-stone-100 to-zinc-100",
    breastCancer: "from-pink-500 to-rose-500",
    autism: "from-blue-500 via-indigo-500 to-purple-500",
    environmental: "from-green-600 via-emerald-600 to-teal-600",
    gad: "from-teal-500 via-cyan-500 to-sky-500",
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
            className={`absolute bottom-20 right-0 ${theme.card} ${theme.border} border rounded-2xl shadow-2xl p-5 w-72 backdrop-blur-xl`}
          >
            <h3
              className={`text-sm font-semibold ${theme.text} mb-4 tracking-wider flex items-center gap-2`}
            >
              <span className="text-lg">🎨</span>
              SELECT THEME
            </h3>
            <div className="space-y-2">
              {Object.keys(themes).map((themeName, index) => (
                <motion.button
                  key={themeName}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    changeTheme(themeName);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-3 relative overflow-hidden ${
                    currentTheme === themeName
                      ? `bg-gradient-to-r ${themeColors[themeName]} text-white shadow-lg`
                      : `${theme.border} border ${theme.text} hover:shadow-md`
                  }`}
                >
                  <motion.span
                    animate={{
                      rotate: currentTheme === themeName ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: currentTheme === themeName ? Infinity : 0,
                      repeatDelay: 2,
                    }}
                    className="text-2xl"
                  >
                    {themeIcons[themeName]}
                  </motion.span>
                  <span className="text-sm tracking-wide font-medium flex-1">
                    {themes[themeName].name}
                  </span>
                  {currentTheme === themeName && (
                    <motion.span
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      className="text-lg"
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
        whileHover={{ scale: 1.15, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(0,0,0,0.3)",
            "0 0 40px rgba(0,0,0,0.4)",
            "0 0 20px rgba(0,0,0,0.3)",
          ],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
        }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full bg-gradient-to-r ${themeColors[currentTheme]} text-white shadow-2xl flex items-center justify-center text-2xl transition-all duration-300 relative overflow-hidden`}
        aria-label="Theme Switcher"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <span className="relative z-10">{themeIcons[currentTheme]}</span>
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
