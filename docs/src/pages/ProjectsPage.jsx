import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "CampusTrace",
      description: "An AI powered lost and found application for universities.",
      tags: ["Web Development", "Full Stack", "Management System"],
      link: "https://campustrace.site",
      year: "2025",
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
              className="text-sm text-gray-500 tracking-[0.3em] uppercase"
            >
              Portfolio
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-light mt-4"
            >
              Selected <span className="font-medium">Projects</span>
            </motion.h1>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
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
                  <div className="border-t border-gray-200 py-8 md:py-12">
                    <div className="grid md:grid-cols-12 gap-8 items-start">
                      {/* Project Number */}
                      <div className="md:col-span-1">
                        <span className="text-sm text-gray-400 font-light">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Project Info */}
                      <div className="md:col-span-7">
                        <motion.h2 className="text-3xl md:text-5xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">
                          {project.title}
                        </motion.h2>
                        <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs tracking-wider px-4 py-2 border border-gray-300 text-gray-700 group-hover:border-black group-hover:bg-black group-hover:text-white transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Year & Link */}
                      <div className="md:col-span-4 flex md:flex-col justify-between md:items-end h-full">
                        <span className="text-sm text-gray-500 tracking-wider">
                          {project.year}
                        </span>
                        <motion.div className="flex items-center gap-2 text-sm tracking-wider group-hover:gap-4 transition-all duration-300">
                          <span>VIEW PROJECT</span>
                          <motion.span
                            animate={{
                              x: hoveredProject === project.id ? [0, 5, 0] : 0,
                            }}
                            transition={{
                              duration: 0.8,
                              repeat:
                                hoveredProject === project.id ? Infinity : 0,
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
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
            className="border-t border-gray-200 mt-8"
          />

          {/* More Projects Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 text-center"
          >
            <p className="text-gray-500 mb-8">More projects coming soon...</p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-black text-sm tracking-wider hover:bg-black hover:text-white transition-all"
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
