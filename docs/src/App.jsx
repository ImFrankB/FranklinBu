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
  ExternalLink,
  Award,
  CheckCircle2,
  Calendar,
  Shield,
} from "lucide-react";
import profileImg from "/Me.png";
import campusTraceImg from "/CampusTraceImage.png";
import huaweiCertImg from "/Certificate.png";

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
        "certifications",
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
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
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
      className={`min-h-screen selection:bg-emerald-500 selection:text-white transition-colors duration-500 ${
        darkMode ? "bg-[#0f1112] text-zinc-100" : "bg-white text-slate-900"
      }`}
    >
      {/* Ambient Noise Texture for tactile feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[1] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? darkMode
              ? "bg-[#141417]/80 border-zinc-800 backdrop-blur-xl py-2 border-b"
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
                        ? "text-white bg-emerald-600"
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
                  className={`p-2 rounded-full transition-all duration-300 ${
                    darkMode
                      ? "bg-zinc-900 hover:bg-zinc-800 text-amber-300"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
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
              darkMode ? "bg-[#141417] border-b border-zinc-800" : "bg-white"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium ${
                  activeSection === link.name.toLowerCase()
                    ? "bg-emerald-600 text-white"
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
            className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob ${
              darkMode ? "bg-zinc-700" : "bg-slate-200"
            }`}
          ></div>
          <div
            className={`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000 ${
              darkMode ? "bg-zinc-700" : "bg-slate-200"
            }`}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div>
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium mb-8 transition-colors duration-300 cursor-default ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900/50 text-zinc-300"
                  : "border-slate-200 bg-white/80 text-slate-600 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Open for Commission
            </div>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 font-industry leading-[1.1] px-4">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-500 to-lime-500 animate-gradient-x">
                Franklin
              </span>
              <span className={darkMode ? "text-white" : "text-slate-900"}>
                .
              </span>
            </h1>
          </div>

          <div>
            <p
              className={`mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-light px-4 ${
                darkMode ? "text-zinc-400" : "text-slate-600"
              }`}
            >
              AI-Augmented{" "}
              <span
                className={`font-medium ${
                  darkMode ? "text-zinc-100" : "text-slate-900"
                }`}
              >
                Student Software Engineer | Aspiring Software Architect
              </span>
            </p>
          </div>

          <div>
            <p
              className={`mt-6 max-w-3xl mx-auto text-lg leading-relaxed ${
                darkMode ? "text-zinc-500" : "text-slate-500"
              }`}
            >
              "I don't just write code—I architect solutions and let AI handle
              the heavy lifting. My role is the brain behind the system:
              designing scalable backends, mapping out architectures, and
              guiding AI tools to execute my vision with precision and speed."
            </p>
          </div>

          <div>
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto">
              <a
                href="#projects"
                className={`group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg font-industry overflow-hidden text-center ${
                  darkMode
                    ? "bg-white text-black hover:shadow-white/25"
                    : "bg-emerald-600 text-white hover:shadow-emerald-500/40"
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
                className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-2 font-industry ${
                  darkMode
                    ? "border-zinc-700 hover:bg-zinc-800 text-zinc-300"
                    : "border-slate-300 hover:bg-slate-100 text-slate-700"
                }`}
              >
                Let's Talk{" "}
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <div className="mt-16 flex justify-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <SocialLink
                href="https://github.com/ImFrankB"
                icon={<Github size={24} />}
                darkMode={darkMode}
              />
              <SocialLink
                href="https://www.linkedin.com/in/john-franklin-bugauisan-86aa16309/"
                icon={<Linkedin size={24} />}
                darkMode={darkMode}
              />
              <SocialLink
                href="mailto:johnfranklinbugauisan0@gmail.com"
                icon={<Mail size={24} />}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="Behind the code"
            darkMode={darkMode}
          />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Card with 3D Tilt Feel */}
            <div className="flex justify-center">
              <div className="relative group max-w-md w-full">
                <div
                  className={`relative rounded-[1.8rem] overflow-hidden aspect-[4/5] border-2 transition-transform duration-700 ${
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
                    className="w-full h-full object-cover"
                    style={{ imageRendering: "auto" }}
                  />
                  {/* Overlay gradient for better text readability if needed, or just aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold font-industry leading-tight mb-6">
                  John Franklin Bugauisan
                </h3>
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                    darkMode
                      ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      : "bg-purple-50 text-purple-600 border border-purple-200"
                  }`}
                >
                  <Sparkles size={16} className="mr-2" />
                  AI-Augmented Developer
                </div>
              </div>

              <div>
                <p
                  className={`text-lg leading-8 font-light ${
                    darkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  <span
                    className={`font-bold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Computer Science Student at Isabela State University.
                  </span>{" "}
                  I'm a web developer exploring machine learning and AI. I use
                  AI tools to enhance my work—turning complex backend systems
                  into clean, easy-to-use interfaces that people actually enjoy.
                </p>
                <p
                  className={`text-lg leading-8 font-light mt-4 ${
                    darkMode ? "text-zinc-300" : "text-slate-600"
                  }`}
                >
                  Rather than just building websites, I create smart digital
                  solutions that solve real problems. I believe great technology
                  should be both powerful and simple.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {[
                    { name: "Next.js", variant: "default" },
                    { name: "React", variant: "default" },
                    { name: "TypeScript", variant: "default" },
                    { name: "Python", variant: "default" },
                    { name: "FastAPI", variant: "default" },
                    { name: "AI", variant: "default" },
                    { name: "AI-Augmented", variant: "special" },
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        tech.variant === "special"
                          ? darkMode
                            ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                            : "bg-purple-50 text-purple-600 border border-purple-200"
                          : darkMode
                          ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Bento Grid Style */}
      <section
        id="skills"
        className={`py-32 relative ${
          darkMode ? "bg-[#0a0b0c]" : "bg-slate-50/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technical Arsenal"
            subtitle="My stack"
            darkMode={darkMode}
          />

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            <div className="h-full">
              <SkillCard
                title="Frontend"
                icon={<Code2 className="text-emerald-500" size={40} />}
                skills={[
                  "React.js",
                  "Tailwind CSS",
                  "JavaScript",
                  "HTML5/CSS3",
                  "Framer Motion",
                ]}
                darkMode={darkMode}
              />
            </div>
            <div className="h-full">
              <SkillCard
                title="Backend & Systems"
                icon={<Terminal className="text-emerald-500" size={40} />}
                skills={[
                  "Node.js",
                  "Python",
                  "Java",
                  "C++",
                  "Supabase",
                  "PostgreSQL",
                ]}
                darkMode={darkMode}
              />
            </div>
            <div className="h-full">
              <SkillCard
                title="Tools & Workflow"
                icon={<Database className="text-emerald-500" size={40} />}
                skills={[
                  "Git & GitHub",
                  "VS Code",
                  "Figma",
                  "Notion",
                  "AI Tools (Gemini, ChatGPT, Claude, Perplexity Github Copilot)",
                  "Agile Methodology",
                ]}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Work"
            subtitle="Recent Projects"
            darkMode={darkMode}
          />

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4">
            {/* Project Card: LearnSteps */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              {/* Enhanced Image Area */}
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-6 sm:p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>

                <img
                  src="Learnsteps.png"
                  alt="LearnSteps Project"
                  className="w-full h-full object-contain drop-shadow-xl"
                />

                {/* Floating Link Button */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    Visit Platform <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
                    LearnSteps
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
                  AI-powered learning platform that generates personalized
                  step-by-step roadmaps for mastering any skill. Features
                  curated resources, progress tracking, and structured learning
                  paths to help users save 100+ hours of research time.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React.js", "AI/ML", "Tailwind CSS", "API Integration"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                          darkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://learnsteps.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    darkMode
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  Visit Platform <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project Card: CampusTrace */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              {/* Enhanced Image Area */}
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-6 sm:p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>

                <img
                  src={campusTraceImg}
                  alt="CampusTrace Project"
                  className="w-full h-full object-contain drop-shadow-xl"
                />

                {/* Floating Link Button */}
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    Visit Application <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
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
                  and found process for university campuses. Leveraging advanced
                  AI for image recognition to help students recover items
                  seamlessly.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React native/JS", "Python", "Supabase", "AI/ML"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                          darkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <a
                  href="https://campustrace.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                    darkMode
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-emerald-600 text-white hover:bg-emerald-700"
                  }`}
                >
                  Visit Application <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: Odizee School Of Achievers Website */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-6 sm:p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                <img
                  src="OSAwebsite.png"
                  alt="Odizee School Of Achievers Website"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    Visit Website <ExternalLink size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
                    Odizee School Of Achievers, Inc. Official Website
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
                  Official website for Odizee School Of Achievers featuring a
                  complete Content Management System (CMS) for easy content
                  updates, announcements, and school information management.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React.js", "Tailwind CSS", "CMS", "Responsive"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                            darkMode
                              ? "bg-zinc-800 text-zinc-300"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <a
                    href="https://odizeeschoolofachievers.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 ${
                      darkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Car Dealership System */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                <img
                  src="Cardealership.jpg"
                  alt="Car Dealership System"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    View Code <Github size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
                    Car Dealership System
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      darkMode
                        ? "bg-zinc-950 border-zinc-800 text-zinc-400"
                        : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}
                  >
                    2024
                  </span>
                </div>
                <p
                  className={`mb-6 text-base leading-relaxed ${
                    darkMode ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  A desktop application with a GUI and database connection.
                  Handles full CRUD operations for vehicle management and sales
                  recording using Java Swing and MySQL.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Java Swing", "MySQL", "JDBC", "OOP"].map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                          darkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/imfrankb/franklinbu-basic-system-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 ${
                      darkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    View Repository <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: Personal Development Tracker */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                <img
                  src="personalDev.jpg"
                  alt="Personal Development Tracker"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    View Code <Github size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
                    Personal Dev Tracker
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      darkMode
                        ? "bg-zinc-950 border-zinc-800 text-zinc-400"
                        : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}
                  >
                    2023
                  </span>
                </div>
                <p
                  className={`mb-6 text-base leading-relaxed ${
                    darkMode ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  A CLI application that uses structs and vectors to manage user
                  goals and habits. Features custom loading animations and
                  color-coded console output for a better UX.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["C++", "Vectors", "Structs", "CLI UI"].map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                          darkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/imfrankb/franklinbu-basic-system-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 ${
                      darkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    View Repository <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: Enrollment System */}
            <div
              className={`group rounded-[2rem] overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              <div
                className={`relative aspect-video overflow-hidden flex items-center justify-center p-8 ${
                  darkMode ? "bg-zinc-900" : "bg-slate-100"
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                <img
                  src="enrollmentSystem.png"
                  alt="Enrollment System"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
                <div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    View Code <Github size={16} />
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-2xl font-bold tracking-tight font-industry transition-colors ${
                      darkMode
                        ? "group-hover:text-zinc-300"
                        : "group-hover:text-slate-600"
                    }`}
                  >
                    University Enrollment
                  </h3>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      darkMode
                        ? "bg-zinc-950 border-zinc-800 text-zinc-400"
                        : "bg-slate-100 border-slate-200 text-slate-600"
                    }`}
                  >
                    2023
                  </span>
                </div>
                <p
                  className={`mb-6 text-base leading-relaxed ${
                    darkMode ? "text-zinc-400" : "text-slate-600"
                  }`}
                >
                  A logic-heavy console application that simulates university
                  enrollment. Handles complex branching for different courses
                  (BSCS, BSIS, BSIT) and prerequisites.
                </p>
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["C++", "CLI UI"].map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-md ${
                          darkMode
                            ? "bg-zinc-800 text-zinc-300"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/imfrankb/franklinbu-basic-system-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 ${
                      darkMode
                        ? "bg-white text-black hover:bg-zinc-200"
                        : "bg-emerald-600 text-white hover:bg-emerald-700"
                    }`}
                  >
                    View Repository <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Certifications"
            subtitle="credentials"
            center
            darkMode={darkMode}
          />

          {/* Minimalist 3-Column Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* HUAWEI Certificate */}
            <div
              className={`group h-full rounded-xl border transition-all duration-300 flex flex-col ${
                darkMode
                  ? "bg-zinc-950 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              {/* Certificate Image */}
              <div
                className={`aspect-[4/3] overflow-hidden rounded-t-xl ${
                  darkMode ? "bg-black" : "bg-slate-50"
                }`}
              >
                <img
                  src={huaweiCertImg}
                  alt="HUAWEI ICT Academy Certificate"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {/* Icon + Title Row */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "border-emerald-500/30 bg-emerald-500/10"
                        : "border-emerald-200 bg-emerald-50"
                    }`}
                  >
                    <Award size={16} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold font-industry leading-tight text-sm sm:text-base ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      AI and Applications
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? "text-zinc-500" : "text-slate-500"
                      }`}
                    >
                      HUAWEI ICT Academy
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? "text-zinc-500" : "text-slate-500"
                  }`}
                >
                  Completed comprehensive training covering AI/ML fundamentals,
                  deep learning algorithms, neural network architectures, and
                  cloud-based AI deployment solutions through the HUAWEI ICT
                  Academy program.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    "AI/ML",
                    "Deep Learning",
                    "Neural Networks",
                    "Cloud AI",
                    "Computer Vision",
                    "NLP",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md ${
                        darkMode
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between pt-3 mt-auto border-t ${
                    darkMode ? "border-zinc-800" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-xs ${
                      darkMode ? "text-zinc-600" : "text-slate-400"
                    }`}
                  >
                    Dec 2025
                  </span>
                  <a
                    href="https://e.huawei.com/en/talent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-700"
                    }`}
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Vanderbilt Certificate */}
            <div
              className={`group h-full rounded-xl border transition-all duration-300 flex flex-col ${
                darkMode
                  ? "bg-zinc-950 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              {/* Certificate Image */}
              <div
                className={`aspect-[4/3] overflow-hidden rounded-t-xl ${
                  darkMode ? "bg-black" : "bg-slate-50"
                }`}
              >
                <img
                  src="/AIagent.jpg"
                  alt="Claude Code Certificate"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {/* Icon + Title Row */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "border-emerald-500/30 bg-emerald-500/10"
                        : "border-emerald-200 bg-emerald-50"
                    }`}
                  >
                    <Award size={16} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold font-industry leading-tight text-sm sm:text-base ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Claude Code: Software Engineering with AI Agents
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? "text-zinc-500" : "text-slate-500"
                      }`}
                    >
                      Vanderbilt University
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? "text-zinc-500" : "text-slate-500"
                  }`}
                >
                  Completed Vanderbilt University's course on Coursera with a
                  100% grade, focusing on advanced prompt engineering to
                  orchestrate Claude Code like a tech lead managing multiple
                  senior developers. Gained hands-on experience using structured
                  prompts to drive AI-powered software development, automate
                  testing, and design AI-first architectures.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    "Prompt Engineering",
                    "Generative AI",
                    "Software Architecture",
                    "Test Automation",
                    "Software Design",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md ${
                        darkMode
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center justify-between pt-3 mt-auto border-t ${
                    darkMode ? "border-zinc-800" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-xs ${
                      darkMode ? "text-zinc-600" : "text-slate-400"
                    }`}
                  >
                    Dec 2025
                  </span>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/ZL0NFKR2X6GA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-700"
                    }`}
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Certificate */}
            <div
              className={`group h-full rounded-xl border transition-all duration-300 flex flex-col ${
                darkMode
                  ? "bg-zinc-950 border-zinc-800 hover:border-emerald-500/50"
                  : "bg-white border-slate-200 hover:border-emerald-500"
              }`}
            >
              {/* Certificate Image */}
              <div
                className={`aspect-[4/3] overflow-hidden rounded-t-xl ${
                  darkMode ? "bg-black" : "bg-slate-50"
                }`}
              >
                <img
                  src="/AIprompt.jpg"
                  alt="Google Prompting Essentials Certificate"
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                {/* Icon + Title Row */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 ${
                      darkMode
                        ? "border-emerald-500/30 bg-emerald-500/10"
                        : "border-emerald-200 bg-emerald-50"
                    }`}
                  >
                    <Award size={16} className="text-emerald-500" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold font-industry leading-tight text-sm sm:text-base ${
                        darkMode ? "text-white" : "text-slate-900"
                      }`}
                    >
                      Design Prompts for Everyday Work Tasks
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${
                        darkMode ? "text-zinc-500" : "text-slate-500"
                      }`}
                    >
                      Google
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    darkMode ? "text-zinc-500" : "text-slate-500"
                  }`}
                >
                  Completed Google's course on Coursera with a verified 100%
                  grade, covering practical prompt engineering techniques for
                  daily knowledge work. Learned to apply a prompting framework
                  for drafting content, brainstorming ideas, structuring tables
                  and timelines, summarizing long text, and tailoring tone and
                  style using tools like Google Gemini and other LLMs.
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {[
                    "Prompt Engineering",
                    "Google Gemini",
                    "LLM Application",
                    "Business Writing",
                    "Brainstorming",
                    "ChatGPT",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs px-2 py-1 rounded-md ${
                        darkMode
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex items-center justify-between pt-3 mt-auto border-t ${
                    darkMode ? "border-zinc-800" : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-xs ${
                      darkMode ? "text-zinc-600" : "text-slate-400"
                    }`}
                  >
                    Dec 2025
                  </span>
                  <a
                    href="https://www.coursera.org/account/accomplishments/verify/FX72XSD8H83O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-medium flex items-center gap-1 transition-colors ${
                      darkMode
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-600 hover:text-emerald-700"
                    }`}
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-32 relative ${
          darkMode ? "bg-[#0a0b0c]" : "bg-slate-50/80"
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Education"
            subtitle="Academic Journey"
            center
            darkMode={darkMode}
          />

          <div
            className={`mt-16 space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b ${
              darkMode
                ? "before:from-transparent before:via-zinc-800 before:to-transparent"
                : "before:from-transparent before:via-slate-300 before:to-transparent"
            }`}
          >
            <TimelineItem
              year="2023 - Present"
              title="BS Computer Science"
              school="Isabela State University"
              darkMode={darkMode}
              active
            />
            <TimelineItem
              year="2021 - 2023"
              title="Senior High School"
              school="Odizee School Of Achievers"
              darkMode={darkMode}
            />
            <TimelineItem
              year="2017 - 2021"
              title="Junior High School"
              school="Angadanan National High School"
              darkMode={darkMode}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Background Glow */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none ${
            darkMode ? "bg-zinc-800/30" : "bg-slate-200/50"
          }`}
        ></div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              I'm currently available for freelance work and commissions. Have a
              project in mind? Let's turn that idea into code.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
              <div
                className={`p-4 rounded-2xl flex items-center gap-4 text-left transition-colors border w-full md:w-auto ${
                  darkMode
                    ? "bg-black/50 border-zinc-800"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                <div
                  className={`p-3 rounded-xl ${
                    darkMode
                      ? "bg-emerald-500/10 text-emerald-500"
                      : "bg-emerald-50 text-emerald-600"
                  }`}
                >
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
                        ? "bg-zinc-950 border-zinc-800 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-white"
                        : "bg-white border-slate-200 focus:border-slate-400"
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
                        ? "bg-zinc-950 border-zinc-800 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-white"
                        : "bg-white border-slate-200 focus:border-slate-400"
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
                      ? "bg-zinc-950 border-zinc-800 focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 text-white"
                      : "bg-white border-slate-200 focus:border-slate-400"
                  }`}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all shadow-lg font-industry ${
                  darkMode
                    ? "bg-white text-black hover:bg-zinc-200 disabled:opacity-50"
                    : "bg-gradient-to-r from-green-700 to-emerald-500 text-white shadow-emerald-500/30 disabled:opacity-50"
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
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 border-t ${
          darkMode
            ? "bg-[#0a0b0c] border-zinc-900 text-zinc-600"
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
          <div className="flex gap-4">
            <a
              href="https://github.com/ImFrankB"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/john-franklin-bugauisan-86aa16309/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:johnfranklinbugauisan0@gmail.com"
              className={`p-3 rounded-full transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white"
              }`}
            >
              <Mail size={20} />
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
    className={`p-3 rounded-full transition-all duration-300 ${
      darkMode
        ? "bg-zinc-900 text-zinc-400 hover:bg-emerald-500 hover:text-white"
        : "bg-white shadow-md text-slate-600 hover:bg-emerald-500 hover:text-white"
    }`}
  >
    {icon}
  </a>
);

const SectionHeading = ({ title, subtitle, center, darkMode }) => (
  <div className={`mb-10 md:mb-12 px-4 ${center ? "text-center" : ""}`}>
    <h2
      className={`text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-2 sm:mb-3 font-industry ${
        darkMode ? "text-zinc-500" : "text-slate-500"
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
      className={`h-1 sm:h-1.5 w-20 sm:w-24 mt-4 sm:mt-5 rounded-full bg-emerald-500 ${
        center ? "mx-auto" : ""
      }`}
    ></div>
  </div>
);

const InfoItem = ({ icon, label, value, subValue, darkMode }) => (
  <div
    className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
      darkMode
        ? "bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900 hover:border-emerald-500/50"
        : "bg-white border border-slate-100 hover:border-emerald-500"
    }`}
  >
    <div
      className={`p-3 rounded-xl shrink-0 ${
        darkMode
          ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500"
          : "bg-emerald-50 text-emerald-600"
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
    className={`h-full p-6 sm:p-8 rounded-[2rem] border transition-all duration-300 group ${
      darkMode
        ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
        : "bg-white border-slate-200 hover:border-emerald-500"
    }`}
  >
    <div className="mb-8 p-4 bg-zinc-100/5 rounded-2xl inline-block md:block md:w-fit">
      {icon}
    </div>
    <h4 className="text-2xl font-bold mb-6 font-industry">{title}</h4>
    <ul className="space-y-4">
      {skills.map((skill, idx) => (
        <li key={idx} className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
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
      className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 sm:p-8 rounded-3xl border transition-all duration-300 md:group-odd:mr-auto md:group-even:ml-auto ${
        darkMode
          ? "bg-zinc-900 border-zinc-800 hover:border-emerald-500/50"
          : "bg-white border-slate-200 hover:border-emerald-500"
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <span className="font-bold text-xl font-industry">{title}</span>
        <span
          className={`text-xs font-bold px-3 py-1 rounded-full w-fit ${
            darkMode
              ? "bg-zinc-950 text-zinc-400 border border-zinc-800"
              : "bg-slate-100 text-slate-600"
          }`}
        >
          {year}
        </span>
      </div>
      <p
        className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
          darkMode ? "text-zinc-400" : "text-slate-600"
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
