import React, { useState, useEffect, useRef } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Terminal,
  GraduationCap,
  MapPin,
  ChevronRight,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import profileImg from "./images/GraduationPic.jpg";
import campusTraceImg from "./images/CampusTraceImage.png";

// --- Custom Hook for Scroll Animations ---
const useElementOnScreen = (options) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Optional: Stop observing once visible to prevent re-triggering
        if (containerRef.current) observer.unobserve(containerRef.current);
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, isVisible];
};

// --- Wrapper Component for Reveal Animations ---
const RevealOnScroll = ({
  children,
  delay = 0,
  className = "",
  animation = "fadeUp",
}) => {
  const [ref, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const animations = {
    fadeUp: isVisible
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-16 scale-95",
    fadeLeft: isVisible
      ? "opacity-100 translate-x-0 scale-100"
      : "opacity-0 -translate-x-16 scale-95",
    fadeRight: isVisible
      ? "opacity-100 translate-x-0 scale-100"
      : "opacity-0 translate-x-16 scale-95",
    scaleIn: isVisible
      ? "opacity-100 scale-100 rotate-0"
      : "opacity-0 scale-75 rotate-3",
    bounceIn: isVisible
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-20 scale-50",
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      className={`transition-all duration-700 ${animations[animation]} ${className}`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Handle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle Navbar blur effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Spy Logic
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      // Create Gmail compose link
      const subject = encodeURIComponent(
        `Portfolio Contact from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=johnfranklinbugauisan0@gmail.com&su=${subject}&body=${body}`;

      // Open Gmail in new tab
      window.open(gmailLink, "_blank");

      setFormStatus("success");
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setFormStatus("");
      }, 2000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  return (
    <div
      className={`min-h-screen selection:bg-blue-500 selection:text-white transition-colors duration-500 ${
        darkMode ? "bg-zinc-950 text-zinc-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Ambient Noise Texture for tactile feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-zinc-950/80 border-zinc-800 backdrop-blur-xl py-2 border-b"
              : "bg-white/80 border-slate-200 backdrop-blur-xl py-2 border-b"
            : "bg-transparent py-4 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span
                className={`text-2xl font-bold tracking-tighter font-industry flex items-center gap-2 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                Franklin<span className="hidden sm:inline">Bugauisan</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === link.name.toLowerCase()
                        ? "text-white bg-blue-600 shadow-lg shadow-blue-600/20"
                        : darkMode
                        ? "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                        : "text-slate-600 hover:text-black hover:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="h-6 w-px bg-current opacity-10 mx-2"></div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full transition-all duration-300 transform hover:rotate-12 ${
                    darkMode
                      ? "bg-zinc-900 hover:bg-zinc-800 text-amber-300"
                      : "bg-slate-100 hover:bg-slate-200 text-blue-600"
                  }`}
                  aria-label="Toggle Theme"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-zinc-900 text-amber-300"
                    : "bg-slate-100 text-slate-800"
                }`}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-transform ${
                  isMenuOpen ? "rotate-90" : ""
                } ${
                  darkMode
                    ? "text-zinc-200 hover:bg-zinc-800"
                    : "text-slate-800 hover:bg-slate-100"
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-4 pt-2 pb-6 space-y-2 shadow-xl ${
              darkMode ? "bg-zinc-950 border-b border-zinc-800" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  activeSection === link.name.toLowerCase()
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    : "text-slate-600 hover:text-black hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Enhanced Dynamic Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <div
            className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob ${
              darkMode ? "bg-blue-900/50" : "bg-blue-200"
            }`}
          ></div>
          <div
            className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000 ${
              darkMode ? "bg-purple-900/50" : "bg-purple-200"
            }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <RevealOnScroll>
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-8 transition-colors hover:scale-105 duration-300 cursor-default ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900/50 text-zinc-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  : "border-slate-200 bg-white/80 text-slate-600 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Commission
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 font-industry leading-[1.1] px-4">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                Franklin
              </span>
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                .
              </span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <p
              className={`mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light px-4 ${
                darkMode ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              Student{" "}
              <span
                className={`font-medium ${
                  darkMode ? "text-zinc-100" : "text-slate-900"
                }`}
              >
                Software Developer
              </span>{" "}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={600}>
            <p
              className={`mt-6 max-w-3xl mx-auto text-lg leading-relaxed ${
                darkMode ? "text-zinc-500" : "text-slate-500"
              }`}
            >
              "Good developers do more than just write code; they simplify
              complex logic, boost efficiency, and ensure long-term
              maintainability."
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={800}>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto">
              <a
                href="#projects"
                className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all transform active:scale-95 sm:hover:-translate-y-1 shadow-lg font-industry overflow-hidden text-center ${
                  darkMode
                    ? "bg-white text-black hover:shadow-white/25"
                    : "bg-blue-600 text-white hover:shadow-blue-500/40"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                <span className="relative flex items-center justify-center gap-2">
                  View My Work{" "}
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </span>
              </a>
              <a
                href="#contact"
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border font-bold text-base sm:text-lg transition-all transform active:scale-95 sm:hover:-translate-y-1 flex items-center justify-center gap-2 font-industry ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800 text-zinc-300"
                    : "border-slate-300 hover:bg-slate-100 text-slate-700"
                }`}
              >
                Let's Talk{" "}
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={1000}>
            <div className="mt-16 flex justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <SocialLink
                href="#"
                icon={<Github size={24} />}
                darkMode={darkMode}
              />
              <SocialLink
                href="#"
                icon={<Linkedin size={24} />}
                darkMode={darkMode}
              />
              <SocialLink
                href="mailto:johnfranklinbugauisan0@gmail.com"
                icon={<Mail size={24} />}
                darkMode={darkMode}
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              title="About Me"
              subtitle="Behind the code"
              darkMode={darkMode}
            />
          </RevealOnScroll>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Card with 3D Tilt Feel */}
            <RevealOnScroll
              delay={200}
              animation="fadeLeft"
              className="flex justify-center"
            >
              <div className="relative group max-w-md w-full">
                <div
                  className={`absolute -inset-1 rounded-[2rem] opacity-20 group-hover:opacity-50 blur-xl transition-opacity duration-500 ${
                    darkMode
                      ? "bg-gradient-to-br from-blue-500 to-purple-500"
                      : "bg-gradient-to-br from-blue-400 to-sky-300"
                  }`}
                ></div>
                <div
                  className={`relative rounded-[1.8rem] overflow-hidden aspect-[4/5] border-2 transition-transform duration-700 group-hover:scale-[1.02] ${
                    darkMode
                      ? "bg-zinc-900 border-zinc-800"
                      : "bg-white border-slate-100"
                  }`}
                >
                  {/* High Quality Rendering Enforcement */}
                  <img
                    src={profileImg}
                    alt="John Franklin Bugauisan"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 will-change-transform"
                    style={{ imageRendering: "auto" }} // or -webkit-optimize-contrast if supported
                  />
                  {/* Overlay gradient for better text readability if needed, or just aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Content */}
            <div className="space-y-8">
              <RevealOnScroll delay={400} animation="fadeRight">
                <h3 className="text-4xl font-bold font-industry leading-tight">
                  Computer Science Student at{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    Isabela State University
                  </span>
                  .
                </h3>
              </RevealOnScroll>

              <RevealOnScroll delay={600}>
                <p
                  className={`text-lg leading-8 font-light ${
                    darkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  I describe myself as an intermediate web developer actively
                  exploring the realms of data science. My passion lies in
                  bridging the gap between complex backend logic and intuitive,
                  beautiful user experiences. I don't just build websites; I
                  build digital solutions that solve real problems.
                </p>
              </RevealOnScroll>

              <RevealOnScroll delay={800}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InfoItem
                    icon={<MapPin size={18} />}
                    label="Location"
                    value="Isabela, Philippines"
                    darkMode={darkMode}
                  />
                  <InfoItem
                    icon={<Mail size={18} />}
                    label="Email"
                    value="johnfranklinbugauisan0"
                    subValue="@gmail.com"
                    darkMode={darkMode}
                  />
                  <InfoItem
                    icon={<GraduationCap size={18} />}
                    label="Degree"
                    value="BS Computer Science"
                    darkMode={darkMode}
                  />
                  <InfoItem
                    icon={<Code2 size={18} />}
                    label="Focus"
                    value="Web Dev & Data Science"
                    darkMode={darkMode}
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Bento Grid Style */}
      <section
        id="skills"
        className={`py-32 relative ${
          darkMode ? "bg-zinc-900/30" : "bg-slate-50/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              title="Technical Arsenal"
              subtitle="My stack"
              darkMode={darkMode}
            />
          </RevealOnScroll>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            <RevealOnScroll delay={200} animation="bounceIn" className="h-full">
              <SkillCard
                title="Frontend"
                icon={
                  <Code2
                    className={darkMode ? "text-blue-400" : "text-blue-600"}
                    size={40}
                  />
                }
                skills={[
                  "React.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "HTML5/CSS3",
                  "Framer Motion",
                ]}
                darkMode={darkMode}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={400} animation="bounceIn" className="h-full">
              <SkillCard
                title="Backend & Systems"
                icon={
                  <Terminal
                    className={darkMode ? "text-purple-400" : "text-purple-600"}
                    size={40}
                  />
                }
                skills={["Node.js", "Python", "Java", "Supabase", "PostgreSQL"]}
                darkMode={darkMode}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={600} animation="bounceIn" className="h-full">
              <SkillCard
                title="Tools & Workflow"
                icon={
                  <Database
                    className={
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }
                    size={40}
                  />
                }
                skills={[
                  "Git & GitHub",
                  "VS Code",
                  "Figma",
                  "Data Structures",
                  "Agile Methodology",
                ]}
                darkMode={darkMode}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              title="Featured Work"
              subtitle="Recent Projects"
              darkMode={darkMode}
            />
          </RevealOnScroll>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4">
            {/* Project Card: CampusTrace */}
            <RevealOnScroll delay={200} animation="scaleIn">
              <div
                className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Enhanced Image Area */}
                <div className="relative aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-8">
                  {/* Interactive Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>

                  <img
                    src={campusTraceImg}
                    alt="CampusTrace Project"
                    className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-[1.05] group-hover:-rotate-1 transition-transform duration-700 ease-out will-change-transform"
                  />

                  {/* Floating Link Button */}
                  <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                      View Project <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold tracking-tight font-industry group-hover:text-blue-500 transition-colors">
                      CampusTrace
                    </h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        darkMode
                          ? "bg-zinc-950 border-zinc-800 text-zinc-400"
                          : "bg-slate-100 border-slate-200 text-slate-600"
                      }`}
                    >
                      2025
                    </span>
                  </div>

                  <p
                    className={`mb-6 text-base leading-relaxed ${
                      darkMode ? "text-zinc-400" : "text-slate-600"
                    }`}
                  >
                    A cross-platform solution designed to revolutionize the lost
                    and found process for university campuses. Leveraging
                    advanced AI for image recognition to help students recover
                    items seamlessly.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["React Native", "Python", "Supabase", "AI/ML"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                            darkMode
                              ? "bg-zinc-800 text-zinc-300"
                              : "bg-blue-50 text-blue-600"
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
            {/* Add more cards here with same structure */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-32 relative ${
          darkMode ? "bg-zinc-900/30" : "bg-slate-50/80"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              title="Education"
              subtitle="Academic Journey"
              center
              darkMode={darkMode}
            />
          </RevealOnScroll>

          <div
            className={`mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b ${
              darkMode
                ? "before:from-transparent before:via-zinc-800 before:to-transparent"
                : "before:from-transparent before:via-slate-300 before:to-transparent"
            }`}
          >
            <RevealOnScroll delay={200}>
              <TimelineItem
                year="2023 - Present"
                title="BS Computer Science"
                school="Isabela State University"
                description="Dean's Lister. Focusing on Software Engineering & Algorithms."
                darkMode={darkMode}
                active
              />
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <TimelineItem
                year="2021 - 2023"
                title="Senior High School"
                school="Odizee School Of Achievers"
                description="Graduated with honors, focusing on STEM track."
                darkMode={darkMode}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <TimelineItem
                year="2017 - 2021"
                title="Junior High School"
                school="Angadanan National High School"
                darkMode={darkMode}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div
              className={`rounded-[2.5rem] p-8 md:p-12 text-center border backdrop-blur-sm shadow-2xl ${
                darkMode
                  ? "bg-zinc-900/80 border-zinc-800"
                  : "bg-white/80 border-slate-100"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-industry tracking-tight">
                Let's build something amazing.
              </h2>
              <p
                className={`mb-10 text-lg ${
                  darkMode ? "text-zinc-400" : "text-slate-600"
                }`}
              >
                I'm currently available for freelance work and commissions. Have
                a project in mind? Let's turn that idea into code.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
                <div
                  className={`p-4 rounded-2xl flex items-center gap-4 text-left transition-colors border w-full md:w-auto ${
                    darkMode
                      ? "bg-black/50 border-zinc-800"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold opacity-60 uppercase tracking-wider">
                      Email Me
                    </p>
                    <a
                      href="mailto:johnfranklinbugauisan0@gmail.com"
                      className="font-medium hover:underline"
                    >
                      johnfranklinbugauisan0@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <form
                className="space-y-4 text-left max-w-md mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl outline-none transition-all border font-medium text-base ${
                        darkMode
                          ? "bg-zinc-950 border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                          : "bg-white border-slate-200 focus:border-blue-500"
                      }`}
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl outline-none transition-all border font-medium text-base ${
                        darkMode
                          ? "bg-zinc-950 border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                          : "bg-white border-slate-200 focus:border-blue-500"
                      }`}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl outline-none transition-all border font-medium resize-none text-base ${
                      darkMode
                        ? "bg-zinc-950 border-zinc-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white"
                        : "bg-white border-slate-200 focus:border-blue-500"
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className={`w-full py-4 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg font-industry ${
                    darkMode
                      ? "bg-white text-black hover:bg-zinc-200 disabled:opacity-50"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-blue-500/30 disabled:opacity-50"
                  }`}
                >
                  {formStatus === "sending"
                    ? "Sending..."
                    : formStatus === "success"
                    ? "Sent! ✓"
                    : "Send Message"}
                </button>
                {formStatus === "error" && (
                  <p className="text-red-500 text-sm text-center mt-2">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t ${
          darkMode
            ? "bg-zinc-950 border-zinc-900 text-zinc-600"
            : "bg-slate-50 border-slate-200 text-slate-500"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span
              className={`font-bold text-lg font-industry block ${
                darkMode ? "text-zinc-300" : "text-slate-800"
              }`}
            >
              Franklin Bugauisan
            </span>
            <span className="text-sm">© 2025. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-blue-600"
              }`}
            >
              GitHub
            </a>
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-blue-600"
              }`}
            >
              LinkedIn
            </a>
            <a
              href="#"
              className={`transition-colors ${
                darkMode ? "hover:text-white" : "hover:text-blue-600"
              }`}
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Optimized Sub-components ---

const SocialLink = ({ href, icon, darkMode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-110 ${
      darkMode
        ? "bg-zinc-900 text-zinc-400 hover:bg-white hover:text-black"
        : "bg-white shadow-md text-slate-600 hover:bg-blue-600 hover:text-white"
    }`}
  >
    {icon}
  </a>
);

const SectionHeading = ({ title, subtitle, center, darkMode }) => (
  <div className={`mb-10 md:mb-12 px-4 ${center ? "text-center" : ""}`}>
    <h2
      className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 font-industry ${
        darkMode ? "text-zinc-500" : "text-blue-600"
      }`}
    >
      {subtitle}
    </h2>
    <h3
      className={`text-3xl sm:text-4xl md:text-5xl font-bold font-industry leading-tight ${
        darkMode ? "text-white" : "text-slate-900"
      }`}
    >
      {title}
    </h3>
    <div
      className={`h-1 sm:h-1.5 w-20 sm:w-24 mt-4 sm:mt-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ${
        center ? "mx-auto" : ""
      }`}
    ></div>
  </div>
);

const InfoItem = ({ icon, label, value, subValue, darkMode }) => (
  <div
    className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
      darkMode
        ? "bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700"
        : "bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1"
    }`}
  >
    <div
      className={`p-3 rounded-xl shrink-0 ${
        darkMode
          ? "bg-black border border-zinc-800 text-white"
          : "bg-blue-50 text-blue-600"
      }`}
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p
        className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${
          darkMode ? "text-zinc-500" : "text-slate-400"
        }`}
      >
        {label}
      </p>
      <p
        className={`font-medium truncate ${
          darkMode ? "text-zinc-200" : "text-slate-800"
        }`}
      >
        {value} <span className="opacity-60">{subValue}</span>
      </p>
    </div>
  </div>
);

const SkillCard = ({ title, icon, skills, darkMode }) => (
  <div
    className={`h-full p-8 rounded-[2rem] border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${
      darkMode
        ? "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
        : "bg-white border-slate-200 hover:border-blue-200"
    }`}
  >
    <div className="mb-8 p-4 bg-zinc-100/5 rounded-2xl inline-block md:block md:w-fit group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-2xl font-bold mb-6 font-industry">{title}</h4>
    <ul className="space-y-4">
      {skills.map((skill, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          <div
            className={`w-2 h-2 rounded-full ${
              darkMode ? "bg-zinc-500" : "bg-blue-500"
            }`}
          ></div>
          <span
            className={`text-lg ${
              darkMode
                ? "text-zinc-400 group-hover:text-zinc-200"
                : "text-slate-600 group-hover:text-slate-900"
            } transition-colors`}
          >
            {skill}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const TimelineItem = ({
  year,
  title,
  school,
  description,
  darkMode,
  active,
}) => (
  <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
    {/* Icon/Dot */}
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-full border-4 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl ${
        active
          ? darkMode
            ? "bg-white border-zinc-800 text-black"
            : "bg-blue-600 border-white text-white"
          : darkMode
          ? "bg-black border-zinc-800 text-zinc-600"
          : "bg-white border-slate-200 text-slate-400"
      }`}
    >
      <GraduationCap size={20} />
    </div>
    {/* Content */}
    <div
      className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 md:group-odd:mr-auto md:group-even:ml-auto ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
          : "bg-white border-slate-200 hover:border-blue-200"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <span className="font-bold text-xl font-industry">{title}</span>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${
            darkMode
              ? "bg-zinc-950 text-zinc-400 border border-zinc-800"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {year}
        </span>
      </div>
      <p
        className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
          darkMode ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {school}
      </p>
      {description && (
        <p
          className={`text-base leading-relaxed ${
            darkMode ? "text-zinc-500" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  </div>
);

export default Portfolio;
