import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AnimatedBackground from "./components/AnimatedBackground";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <div
      className={`${theme.bg} ${theme.text} min-h-screen transition-colors duration-500 relative overflow-hidden`}
    >
      <AnimatedBackground />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <div className="relative z-10">
            <AnimatedRoutes />
          </div>
          <ThemeSwitcher />
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
