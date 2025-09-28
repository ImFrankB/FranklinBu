import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import PageTransition from "../components/PageTransition";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      <div className="min-h-screen flex items-center justify-center px-8 md:px-16">
        <div className="noise" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl w-full"
        >
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div variants={itemVariants} className="mb-8">
                <span className="text-sm text-gray-500 tracking-[0.3em] uppercase">
                  Welcome
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-light leading-tight mb-6"
              >
                I'm <span className="font-medium">Franklin</span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-600 mb-8 h-16"
              >
                <TypeAnimation
                  sequence={[
                    "Student",
                    2000,
                    "Passionate Coder",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 leading-relaxed mb-12 max-w-lg"
              >
                Good developers do more than just write code; they simplify
                complex code, boost its efficiency, and ensure its long-term
                maintainability.
              </motion.p>

              <motion.div variants={itemVariants} className="flex gap-6">
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors"
                    data-cursor="pointer"
                  >
                    VIEW PROJECTS
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-black text-sm tracking-wider hover:bg-black hover:text-white transition-all"
                    data-cursor="pointer"
                  >
                    GET IN TOUCH
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative hidden md:block"
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-96 h-96 mx-auto"
              >
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <motion.path
                    d="M 100,200 Q 200,100 300,200 T 100,200"
                    fill="none"
                    stroke="black"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-8 md:left-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-xs text-gray-500 tracking-wider mb-2 rotate-90">
                SCROLL
              </span>
              <div className="w-[1px] h-20 bg-gray-300" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
