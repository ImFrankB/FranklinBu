import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PageTransition from "../components/PageTransition";

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { category: "Frontend", items: ["React", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SupaBase"] },
    { category: "Tools", items: ["Git", "GitHub"] },
    { category: "Languages", items: ["Python", "JavaScript", "Java", "C++"] },
  ];

  const Education = [
    { year: "2023 - Present", role: "Isabela State University Main Campus" },
    { year: "2021 - 2023", role: "Odizee School Of Achievers" },
    { year: "2017 - 2021", role: "Angadanan National High School" },
    { year: "2012 - 2017", role: "Pisbakal Elementary School" },
  ];

  const stats = [{ number: "10+", label: "Projects Completed" }];

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 px-8 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <span className="text-sm text-gray-500 tracking-[0.3em] uppercase">
              About Me
            </span>
            <h1 className="text-5xl md:text-7xl font-light mt-4">
              Simplifying
              <br />
              <span className="font-medium">Complexities</span>
            </h1>
          </motion.div>

          {/* Profile Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src="./public/Images/profileImg.jpg"
                  alt="Profile"
                  className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <motion.div
                  initial={{ height: "100%" }}
                  animate={{ height: "0%" }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="absolute inset-0 bg-white"
                />
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-10 -right-10 bg-white p-6 shadow-lg"
              >
                <p className="text-3xl font-light">3rd year</p>
                <p className="text-sm text-gray-500">
                  Computer Science Student
                </p>
              </motion.div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-light mb-6">
                Hello, I'm{" "}
                <span className="font-medium">John Franklin Bugauisan</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a Computer Science student at Isabela State University. I
                enjoy learning new technologies and building simple projects.
                I'm still new (but not totally new—maybe intermediate) to web
                development and currently exploring more about it along with
                data science.
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-medium">Isabela, Philippines</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <p className="font-medium">
                    johnfranklinbugauisan0@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Education</p>
                  <p className="font-medium">BS Computer Science</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Languages</p>
                  <p className="font-medium">Filipino, English</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-gray-200 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <motion.p
                  className="text-4xl md:text-5xl font-light mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <blockquote className="border-l-2 border-black pl-6 mt-8">
                <p className="text-lg italic text-gray-700">
                  "The code you write makes you a programmer. The code you
                  delete makes you a good one. The code you don't have to write
                  makes you a great one."
                </p>
                <cite className="text-sm text-gray-500 mt-2 block">
                  — Maxi Contieri
                </cite>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-2xl font-light mb-6">Education</h2>
              <div className="space-y-6">
                {Education.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="border-l border-gray-300 pl-6 relative"
                  >
                    <div className="absolute -left-[5px] top-0 w-2 h-2 bg-black rounded-full" />
                    <span className="text-xs text-gray-500">{exp.year}</span>
                    <h3 className="text-lg font-medium">{exp.role}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-light mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-4 gap-12">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={skillSet.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-sm font-medium tracking-wider mb-4">
                    {skillSet.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        className="text-gray-600 text-sm flex items-center"
                      >
                        <span className="w-1 h-1 bg-black rounded-full mr-2" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="border border-gray-200 p-8 hover:border-black transition-colors">
              <div className="text-3xl mb-4">💻</div>
              <h3 className="text-lg font-medium mb-2">Web Development</h3>
              <p className="text-sm text-gray-600">
                Building fast, responsive websites and web-app with modern
                technologies and best practices.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <button className="px-8 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors">
              Franklin Bu
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
