
import { motion, AnimatePresence } from "framer-motion";
import { Code, ExternalLink, Github, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";
import ParallaxSection from "./ParallaxSection";
import { useState } from "react";

const ProjectsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [openProject, setOpenProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    }
  ];

  const handleProjectClick = (index: number) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section className={`py-20 relative ${
      isDark 
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" 
        : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#ffffff' : '#000000'} 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto relative z-10 px-6">
        <ParallaxSection offset={20}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MicroArtHover variant="glow" className="inline-block">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl ${
                  isDark 
                    ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20" 
                    : "bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                }`}>
                  <Code className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <h2 className={`text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                  Projects
                </h2>
              </div>
            </MicroArtHover>
            
            <motion.p 
              className={`text-xl max-w-3xl mx-auto leading-relaxed ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A showcase of my development projects, demonstrating my skills in modern web technologies 
              and problem-solving capabilities.
            </motion.p>
          </motion.div>
        </ParallaxSection>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* MacBook Container */}
              <div className="relative">
                {/* MacBook Base */}
                <motion.div
                  className={`relative rounded-2xl ${
                    isDark 
                      ? "bg-gradient-to-br from-slate-700 to-slate-800" 
                      : "bg-gradient-to-br from-slate-200 to-slate-300"
                  } p-1 shadow-2xl`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* MacBook Screen */}
                  <motion.div
                    className={`relative rounded-xl overflow-hidden ${
                      isDark ? "bg-slate-900" : "bg-white"
                    } shadow-inner`}
                    onClick={() => handleProjectClick(index)}
                  >
                    {/* Screen Bezel */}
                    <div className={`absolute inset-0 rounded-xl border-2 ${
                      isDark ? "border-slate-800" : "border-slate-100"
                    } pointer-events-none z-10`} />
                    
                    {/* Closed State - Project Preview */}
                    <AnimatePresence mode="wait">
                      {openProject !== index && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, rotateX: -90 }}
                          transition={{ duration: 0.6 }}
                          className="relative h-64 overflow-hidden"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className={`absolute inset-0 ${
                            isDark 
                              ? "bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" 
                              : "bg-gradient-to-t from-slate-100/80 via-transparent to-transparent"
                          }`} />
                          
                          {/* Project Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className={`text-lg font-bold mb-2 ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}>
                              {project.title}
                            </h3>
                            <p className={`text-sm ${
                              isDark ? "text-slate-300" : "text-slate-600"
                            }`}>
                              {project.description}
                            </p>
                          </div>

                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 backdrop-blur-sm">
                              <span className="text-xs font-medium">Featured</span>
                            </div>
                          )}

                          {/* Click to Open Indicator */}
                          <div className="absolute top-4 right-4 flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${
                              isDark ? "bg-green-400" : "bg-green-500"
                            } animate-pulse`} />
                            <span className={`text-xs ${
                              isDark ? "text-slate-400" : "text-slate-500"
                            }`}>
                              Click to open
                            </span>
                          </div>
                        </motion.div>
                      )}

                      {/* Open State - Live Website */}
                      {openProject === index && (
                        <motion.div
                          initial={{ opacity: 0, rotateX: 90 }}
                          animate={{ opacity: 1, rotateX: 0 }}
                          transition={{ duration: 0.6 }}
                          className="relative h-80"
                        >
                          {/* Browser Chrome */}
                          <div className={`flex items-center justify-between px-4 py-2 ${
                            isDark ? "bg-slate-800 border-b border-slate-700" : "bg-slate-100 border-b border-slate-200"
                          }`}>
                            {/* Traffic Lights */}
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500" />
                              <div className="w-3 h-3 rounded-full bg-yellow-500" />
                              <div className="w-3 h-3 rounded-full bg-green-500" />
                            </div>

                            {/* URL Bar */}
                            <div className={`flex-1 mx-4 px-3 py-1 rounded-md ${
                              isDark ? "bg-slate-700 text-slate-300" : "bg-white text-slate-600"
                            } text-xs font-mono`}>
                              {project.liveUrl}
                            </div>

                            {/* Close Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenProject(null);
                              }}
                              className={`p-1 rounded-md hover:bg-slate-600 transition-colors ${
                                isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
                              }`}
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Embedded Website */}
                          <div className="h-full">
                            <iframe
                              src={project.liveUrl}
                              title={project.title}
                              className="w-full h-full border-0"
                              sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
                            />
                          </div>

                          {/* Action Buttons */}
                          <div className="absolute bottom-4 right-4 flex gap-2">
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`w-10 h-10 rounded-full ${
                                isDark 
                                  ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700" 
                                  : "bg-white/80 text-slate-600 hover:bg-slate-100"
                              } backdrop-blur-sm flex items-center justify-center transition-colors duration-300 shadow-lg`}
                            >
                              <Github className="w-4 h-4" />
                            </motion.a>
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className={`w-10 h-10 rounded-full ${
                                isDark 
                                  ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700" 
                                  : "bg-white/80 text-slate-600 hover:bg-slate-100"
                              } backdrop-blur-sm flex items-center justify-center transition-colors duration-300 shadow-lg`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>

                {/* MacBook Base/Keyboard */}
                <div className={`mt-1 h-3 rounded-b-xl ${
                  isDark 
                    ? "bg-gradient-to-b from-slate-700 to-slate-800" 
                    : "bg-gradient-to-b from-slate-200 to-slate-300"
                } shadow-lg`} />

                {/* Technologies Tags */}
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? "bg-blue-500/20 text-blue-400" 
                          : "bg-blue-500/10 text-blue-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
