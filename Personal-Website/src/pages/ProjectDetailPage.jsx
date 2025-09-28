import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const ProjectDetailPage = () => {
  const { id } = useParams();

  // Mock project data - replace with real data
  const project = {
    id: 1,
    title: 'Minimal E-Commerce',
    category: 'Web Design',
    year: '2024',
    description: 'A minimalist e-commerce platform that focuses on user experience and clean aesthetics. Built with modern technologies and optimized for performance.',
    role: 'Full Stack Developer & UI Designer',
    client: 'Fashion Brand Co.',
    duration: '3 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    link: 'https://example.com',
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 px-8 md:px-16 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link to="/projects" className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-light mb-4">{project.title}</h1>
            <div className="flex gap-4 text-sm text-gray-600">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300" />
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-2"
            >
              <h2 className="text-2xl font-light mb-6">Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xs text-gray-500 tracking-wider mb-2">ROLE</h3>
                <p className="text-sm">{project.role}</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500 tracking-wider mb-2">CLIENT</h3>
                <p className="text-sm">{project.client}</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500 tracking-wider mb-2">DURATION</h3>
                <p className="text-sm">{project.duration}</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500 tracking-wider mb-2">TECHNOLOGIES</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 border border-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8 mb-20"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300" />
              <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>
          </motion.div>

          {/* Visit Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-black text-white text-sm tracking-wider hover:bg-gray-900 transition-colors"
              data-cursor="pointer"
            >
              VISIT LIVE SITE
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetailPage;