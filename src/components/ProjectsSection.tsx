
import { motion } from "framer-motion";
import { Code, ExternalLink, Github } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";
import ParallaxSection from "./ParallaxSection";

const ProjectsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates",
      image: "/placeholder.svg",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

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
              <MicroArtHover variant="aurora" className={`relative overflow-hidden rounded-2xl ${
                isDark 
                  ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50" 
                  : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border border-slate-200/50"
              } transition-all duration-300 hover:scale-[1.02]`}>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${
                    isDark 
                      ? "bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" 
                      : "bg-gradient-to-t from-slate-100/80 via-transparent to-transparent"
                  }`} />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${
                      isDark 
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30" 
                        : "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20"
                    } backdrop-blur-sm`}>
                      <span className="text-sm font-medium">Featured</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-full ${
                        isDark 
                          ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700" 
                          : "bg-white/80 text-slate-600 hover:bg-slate-100"
                      } backdrop-blur-sm flex items-center justify-center transition-colors duration-300`}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-full ${
                        isDark 
                          ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700" 
                          : "bg-white/80 text-slate-600 hover:bg-slate-100"
                      } backdrop-blur-sm flex items-center justify-center transition-colors duration-300`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
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

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark 
                    ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5" 
                    : "bg-gradient-to-r from-blue-500/3 to-purple-500/3"
                } rounded-2xl pointer-events-none`} />
              </MicroArtHover>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
