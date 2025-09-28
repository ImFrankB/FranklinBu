import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-6xl mb-8"
          >
            🚧
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Under <span className="font-medium">Construction</span>
          </h1>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Something amazing is in the works. Check back soon to see my latest
            projects.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors"
            >
              BACK TO HOME
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
