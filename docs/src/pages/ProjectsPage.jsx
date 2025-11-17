import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useTheme } from "../context/ThemeContext";
import campusTraceLogo from "../images/CampusTrace.png";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { theme } = useTheme();

  const projects = [
    {
      id: 1,
      title: "CampusTrace",
      logo: campusTraceLogo,
      description:
        "CampusTrace is a cross-platform solution featuring both a web application and mobile app, designed to revolutionize the lost and found process for university campuses. Leveraging advanced AI technology, the platform enables students to seamlessly report, search, and recover lost items across any device. With intelligent image recognition, real-time notifications, and an intuitive interface optimized for both desktop and mobile experiences, CampusTrace makes finding lost belongings faster and more efficient than ever.",
      tags: ["AI/ML", "React", "React Native", "Python", "Supabase"],
      link: "https://campustrace.site",
      year: "2025",
      status: "Live",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-8 md:px-16">
        <div className="noise" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-sm ${theme.textTertiary} tracking-[0.3em] uppercase`}
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light mt-4 ${theme.text}`}
            >
              Selected <span className="font-medium">Projects</span>
            </motion.h1>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`relative ${theme.border} border p-8 md:p-12 ${theme.borderHover} ${theme.cardHover} transition-all duration-500 ${theme.card}`}
                  >
                    {/* Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className={`absolute top-8 right-8 px-4 py-1 ${
                        theme.accent
                      } ${
                        theme.bg === "bg-white" ||
                        theme.bg === "bg-pink-50" ||
                        theme.bg === "bg-blue-50" ||
                        theme.bg === "bg-green-50" ||
                        theme.bg === "bg-teal-50"
                          ? "text-white"
                          : "text-black"
                      } text-xs tracking-wider`}
                    >
                      {project.status}
                    </motion.div>

                    {/* Project Number */}
                    <div className="mb-8">
                      <span
                        className={`text-6xl md:text-8xl font-light ${theme.numberBg} transition-colors duration-500`}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      {/* Logo & Title Section */}
                      <div className="md:col-span-12">
                        <div className="flex items-center gap-6 mb-8">
                          {/* Logo */}
                          <motion.div
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <div
                              className={`w-20 h-20 md:w-24 md:h-24 ${theme.card} border-2 ${theme.border} ${theme.borderHover} transition-all duration-500 flex items-center justify-center overflow-hidden`}
                            >
                              <img
                                src={project.logo}
                                alt={`${project.title} logo`}
                                className="w-full h-full object-contain p-2"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.parentElement.innerHTML = `<span class="text-2xl font-bold">${project.title[0]}</span>`;
                                }}
                              />
                            </div>
                          </motion.div>

                          {/* Title */}
                          <div className="flex-1">
                            <motion.h2
                              className={`text-4xl md:text-6xl font-light group-hover:translate-x-2 transition-transform duration-500 ${theme.text}`}
                            >
                              {project.title}
                            </motion.h2>
                            <div className="flex items-center gap-4 mt-2">
                              <span
                                className={`text-sm ${theme.textTertiary} tracking-wider`}
                              >
                                {project.year}
                              </span>
                              <span
                                className={`w-1 h-1 ${theme.textTertiary} rounded-full`}
                              />
                              <motion.div className="flex items-center gap-2 text-sm tracking-wider group-hover:gap-3 transition-all duration-300">
                                <span className={theme.textSecondary}>
                                  VIEW PROJECT
                                </span>
                                <motion.span
                                  animate={{
                                    x:
                                      hoveredProject === project.id
                                        ? [0, 5, 0]
                                        : 0,
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    repeat:
                                      hoveredProject === project.id
                                        ? Infinity
                                        : 0,
                                  }}
                                  className={theme.accentText}
                                >
                                  →
                                </motion.span>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description Section */}
                      <div className="md:col-span-12">
                        <div
                          className={`${theme.descriptionBg} transition-colors duration-500 p-6 md:p-8 border-l-4 ${theme.accent}`}
                        >
                          <p
                            className={`${theme.textSecondary} leading-relaxed text-base md:text-lg`}
                          >
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tags Section */}
                      <div className="md:col-span-12">
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 + i * 0.1 }}
                              className={`text-xs tracking-wider px-5 py-2.5 ${theme.tag} transition-all duration-300`}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom border */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className={`border-t ${theme.border} mt-8`}
          />

          {/* More Projects Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <p className={`${theme.textTertiary} mb-8`}>
              More projects coming soon...
            </p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 ${theme.buttonOutline} border text-sm tracking-wider transition-all`}
              >
                BACK TO HOME
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
