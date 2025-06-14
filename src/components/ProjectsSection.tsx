import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Code, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";
import ParallaxSection from "./ParallaxSection";
import { useState, useRef } from "react";

const ProjectsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [currentProject, setCurrentProject] = useState(0);
  const macbookRef = useRef<HTMLDivElement>(null);

  // Fixed scroll-based animations for MacBook with proper opening timing
  const { scrollYProgress } = useScroll({
    target: macbookRef,
    offset: ["start 100%", "end 0%"] // Start animation when MacBook first appears
  });

  // Fixed lid rotation - opens immediately when MacBook is visible
  const lidRotation = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    [-5, -95, -95, -5] // Start closed, open quickly when visible, stay open, then close
  );
  
  // Smoother opacity transition
  const baseOpacity = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    [0.4, 1, 1, 0.4]
  );

  // Scale animation for more dynamic effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.95, 1, 1, 0.95]
  );

  const projects = [
    {
      title: "Business 360 - PowerBI",
      description: "This Power BI dashboard that helped AtliQ Hardware analyze their global sales trends. The dashboard gathered data from two different sources: Excel/CSV files and a SQL database.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      technologies: ["PowerBI", "Excel", "SQL", "Data Analysis"],
      githubUrl: "",
      liveUrl: "https://app.powerbi.com/links/bKm6_9zzPY?ctid=89bf0b5b-6665-4eb0-a6fc-fc2e8734863e&pbi_source=linkShare&bookmarkGuid=ef8286e4-1ffd-47e4-b18b-224fe4dc5f82",
      featured: true,
      date: "Nov-2023",
      type: "powerbi"
    },
    {
      title: "Excel Sales Analytics",
      description: "This project demonstrates a comprehensive approach to sales and finance data analysis, providing valuable insights that can drive business strategy.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      technologies: ["Excel", "Data Analysis", "Finance"],
      githubUrl: "https://github.com/PrajwalSSReddy/Excel_Sales_Analytics",
      liveUrl: "https://github.com/PrajwalSSReddy/Excel_Sales_Analytics",
      featured: false,
      date: "Oct-2023",
      type: "github"
    },
    {
      title: "Grocery Store Management",
      description: "The Grocery Store Management is a web-based application that enables store owners to record and manage the details of the products and orders in the store.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
      technologies: ["FastAPI", "Python", "Web Development"],
      githubUrl: "https://github.com/PrajwalSSReddy/Grocery_store_management_system_using_Fastapi",
      liveUrl: "https://github.com/PrajwalSSReddy/Grocery_store_management_system_using_Fastapi",
      featured: false,
      date: "Aug-2023",
      type: "github"
    },
    {
      title: "Notes-App",
      description: "The Notes-app is a FastAPI application that allows users to create, read, update and delete notes. It is built using Python 3.7+ and FastAPI framework.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop",
      technologies: ["FastAPI", "Python", "CRUD Operations"],
      githubUrl: "https://github.com/PrajwalSSReddy/Notes-app",
      liveUrl: "https://github.com/PrajwalSSReddy/Notes-app",
      featured: false,
      date: "Jul-2023",
      type: "github"
    },
    {
      title: "Cricket Analysis-PowerBI",
      description: "This dashboard will analyze cricket player statistics and select the best 11 based on the T20 World Cup 2022 using pandas, numpy, data extraction from the ESPN website and Power BI.",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=800&fit=crop",
      technologies: ["PowerBI", "Python", "Pandas", "NumPy"],
      githubUrl: "",
      liveUrl: "https://app.powerbi.com/links/T1-xQGfpDX?ctid=89bf0b5b-6665-4eb0-a6fc-fc2e8734863e&pbi_source=linkShare",
      featured: true,
      date: "Jun-2023",
      type: "powerbi"
    },
    {
      title: "Autonomous Trash Collecting Robot",
      description: "This project worked on Image recognization using deep learning, of CNN algorithm with Densenet121 Architecture, which uses a number of layers which contains neurons to find the trash in image captured by camera.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop",
      technologies: ["Deep Learning", "CNN", "DenseNet121", "Computer Vision"],
      githubUrl: "https://github.com/PrajwalSSReddy/Densenet121_Architecture-",
      liveUrl: "https://github.com/PrajwalSSReddy/Densenet121_Architecture-",
      featured: false,
      date: "Apr-2023",
      type: "github"
    },
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system is an ML-based approach to filtering or predicting the users film preferences based on their past choices and behaviour.",
      image: "https://images.unsplash.com/photo-1489599510536-e2523b6b6b5a?w=1200&h=800&fit=crop",
      technologies: ["Python", "Machine Learning", "Streamlit"],
      githubUrl: "",
      liveUrl: "https://movie1recommended1system.streamlit.app/",
      featured: true,
      date: "Mar-2023",
      type: "website"
    },
    {
      title: "IPL Batting Analysis",
      description: "IPL batting analysis is the process of exploring and visualizing the data of IPL matches to gain insights about the performance of batsmen.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=800&fit=crop",
      technologies: ["Python", "Data Analysis", "Cricket Analytics"],
      githubUrl: "https://github.com/PrajwalSSReddy/IPL_Batting_Analysis",
      liveUrl: "https://github.com/PrajwalSSReddy/IPL_Batting_Analysis",
      featured: false,
      date: "Sep-2022",
      type: "github"
    },
    {
      title: "Stock Market Prediction",
      description: "Stock Market Prediction using Numerical and Textual Analysis is a project that aims to create a hybrid model for predicting stock price/performance.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
      technologies: ["Machine Learning", "Python", "Financial Analysis"],
      githubUrl: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/Task_7-Stock%20Market%20Prediction%20using%20Numerical%20and%20Textual%20Analysis.ipynb",
      liveUrl: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/Task_7-Stock%20Market%20Prediction%20using%20Numerical%20and%20Textual%20Analysis.ipynb",
      featured: false,
      date: "Dec-2023",
      type: "github"
    },
    {
      title: "Prediction Using K-means",
      description: "The project involved using the K-means clustering algorithm to analyze the Iris dataset, a popular dataset in the field of machine learning.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      technologies: ["Machine Learning", "K-means", "Python", "Unsupervised Learning"],
      githubUrl: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/task_2_kmeans_main.ipynb",
      liveUrl: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/task_2_kmeans_main.ipynb",
      featured: false,
      date: "Dec-2023",
      type: "github"
    }
  ];

  const handlePrevProject = () => {
    setCurrentProject((prev) => prev === 0 ? projects.length - 1 : prev - 1);
  };

  const handleNextProject = () => {
    setCurrentProject((prev) => prev === projects.length - 1 ? 0 : prev + 1);
  };

  const handleProjectSelect = (index: number) => {
    setCurrentProject(index);
  };

  const currentProjectData = projects[currentProject];

  return (
    <section className={`py-20 relative min-h-screen ${
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
              A showcase of my development projects, demonstrating my skills in modern web technologies, 
              data analysis, machine learning, and problem-solving capabilities.
            </motion.p>
          </motion.div>
        </ParallaxSection>

        {/* MacBook Container with Improved Opening/Closing Animation */}
        <motion.div
          ref={macbookRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16 perspective-1000"
          style={{ 
            perspective: '2000px',
            opacity: baseOpacity,
            scale: scale
          }}
        >
          {/* MacBook Base */}
          <div className="relative mx-auto" style={{ width: '100%', maxWidth: '1400px' }}>
            {/* MacBook Lid (Screen) with Improved Animation */}
            <motion.div
              className={`relative ${
                isDark 
                  ? "bg-gradient-to-br from-slate-700 to-slate-800" 
                  : "bg-gradient-to-br from-slate-200 to-slate-300"
              } shadow-2xl transition-all duration-700 ease-out`}
              style={{
                width: '100%',
                aspectRatio: '14/9',
                borderRadius: '24px',
                padding: '8px',
                transformOrigin: 'bottom center',
                rotateX: lidRotation,
                transformStyle: 'preserve-3d',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              {/* MacBook Screen */}
              <div 
                className={`relative overflow-hidden ${
                  isDark ? "bg-slate-900" : "bg-white"
                } shadow-inner transition-all duration-500`}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                }}
              >
                {/* Screen Bezel */}
                <div className={`absolute inset-0 border-4 ${
                  isDark ? "border-slate-800" : "border-slate-100"
                } pointer-events-none z-10`} 
                style={{ borderRadius: '20px' }} />
                
                {/* Navigation Controls */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                  <motion.button
                    onClick={handlePrevProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full ${
                      isDark 
                        ? "bg-slate-800/90 text-slate-300 hover:bg-slate-700" 
                        : "bg-white/90 text-slate-600 hover:bg-slate-100"
                    } backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border ${
                      isDark ? "border-slate-700" : "border-slate-200"
                    }`}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  {/* Project Counter */}
                  <div className={`px-6 py-3 rounded-full ${
                    isDark 
                      ? "bg-slate-800/90 text-slate-300" 
                      : "bg-white/90 text-slate-600"
                  } backdrop-blur-sm font-medium shadow-lg border ${
                    isDark ? "border-slate-700" : "border-slate-200"
                  }`}>
                    {currentProject + 1} / {projects.length}
                  </div>

                  <motion.button
                    onClick={handleNextProject}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-full ${
                      isDark 
                        ? "bg-slate-800/90 text-slate-300 hover:bg-slate-700" 
                        : "bg-white/90 text-slate-600 hover:bg-slate-100"
                    } backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border ${
                    isDark ? "border-slate-700" : "border-slate-200"
                  }`}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Project Content with Smooth Scrolling */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.5 
                    }}
                    className="relative w-full h-full"
                  >
                    {/* Browser Chrome */}
                    <div className={`flex items-center justify-between px-6 py-4 ${
                      isDark ? "bg-slate-800 border-b border-slate-700" : "bg-slate-100 border-b border-slate-200"
                    }`}>
                      {/* Traffic Lights */}
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm" />
                        <div className="w-4 h-4 rounded-full bg-yellow-500 shadow-sm" />
                        <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm" />
                      </div>

                      {/* URL Bar */}
                      <div className={`flex-1 mx-6 px-4 py-3 rounded-lg ${
                        isDark ? "bg-slate-700 text-slate-300" : "bg-white text-slate-600"
                      } font-mono text-sm truncate border ${
                        isDark ? "border-slate-600" : "border-slate-300"
                      }`}>
                        {currentProjectData.liveUrl}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {currentProjectData.githubUrl && (
                          <motion.a
                            href={currentProjectData.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full ${
                              isDark 
                                ? "bg-slate-700 text-slate-300 hover:bg-slate-600" 
                                : "bg-white text-slate-600 hover:bg-slate-50"
                            } flex items-center justify-center transition-colors duration-300 shadow-sm border ${
                              isDark ? "border-slate-600" : "border-slate-200"
                            }`}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                        <motion.a
                          href={currentProjectData.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-10 h-10 rounded-full ${
                            isDark 
                              ? "bg-slate-700 text-slate-300 hover:bg-slate-600" 
                              : "bg-white text-slate-600 hover:bg-slate-50"
                          } flex items-center justify-center transition-colors duration-300 shadow-sm border ${
                            isDark ? "border-slate-600" : "border-slate-200"
                          }`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Visualization */}
                    <div className="relative" style={{ height: 'calc(100% - 80px)' }}>
                      {/* Project Image/Preview */}
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={currentProjectData.image}
                          alt={currentProjectData.title}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Overlay with project details */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                          <div className="text-white">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-3xl font-bold">
                                {currentProjectData.title}
                              </h3>
                              <span className="text-sm px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                                {currentProjectData.date}
                              </span>
                            </div>
                            <p className="text-white/90 mb-6 text-lg leading-relaxed max-w-4xl">
                              {currentProjectData.description}
                            </p>
                            <div className="flex flex-wrap gap-3 mb-6">
                              {currentProjectData.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-200 border border-blue-400/50 backdrop-blur-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex gap-4">
                              {currentProjectData.githubUrl && (
                                <motion.a
                                  href={currentProjectData.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-6 py-3 rounded-lg bg-slate-800/50 text-white border border-slate-600 hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                                >
                                  <Github className="w-5 h-5" />
                                  View Code
                                </motion.a>
                              )}
                              <motion.a
                                href={currentProjectData.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-3 rounded-lg bg-blue-600/80 text-white border border-blue-500 hover:bg-blue-700/80 transition-all duration-300 flex items-center gap-2"
                              >
                                <ExternalLink className="w-5 h-5" />
                                {currentProjectData.type === 'github' ? 'View Repository' : 'Visit Project'}
                              </motion.a>
                            </div>
                          </div>
                        </div>

                        {/* Featured Badge */}
                        {currentProjectData.featured && (
                          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-yellow-500/30 text-yellow-300 border border-yellow-400/50 backdrop-blur-sm">
                            <span className="text-sm font-medium">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* MacBook Base/Keyboard */}
            <div className={`mt-2 h-4 mx-auto ${
              isDark 
                ? "bg-gradient-to-b from-slate-700 to-slate-800" 
                : "bg-gradient-to-b from-slate-200 to-slate-300"
            } shadow-lg transition-all duration-500`} 
            style={{
              width: '100%',
              maxWidth: '1400px',
              borderRadius: '0 0 24px 24px',
            }} />
          </div>
        </motion.div>

        {/* Project List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            All Projects
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => handleProjectSelect(index)}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  currentProject === index
                    ? (isDark 
                        ? "bg-blue-500/20 border-2 border-blue-400 shadow-lg shadow-blue-500/20" 
                        : "bg-blue-500/10 border-2 border-blue-500 shadow-lg shadow-blue-500/20")
                    : (isDark 
                        ? "bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-slate-600" 
                        : "bg-white/50 border border-slate-200 hover:bg-white hover:border-slate-300")
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-12 h-12 rounded-lg object-cover shadow-sm"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold text-sm ${
                      isDark ? "text-white" : "text-slate-900"
                    } line-clamp-2`}>
                      {project.title}
                    </h4>
                    <span className={`text-xs ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>
                      {project.date}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs ${
                        isDark 
                          ? "bg-slate-700 text-slate-300" 
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className={`px-2 py-1 rounded text-xs ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}>
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-7 h-7 rounded flex items-center justify-center ${
                        isDark 
                          ? "bg-slate-700 text-slate-300 hover:bg-slate-600" 
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      } transition-colors`}
                    >
                      <Github className="w-3 h-3" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-7 h-7 rounded flex items-center justify-center ${
                      isDark 
                        ? "bg-slate-700 text-slate-300 hover:bg-slate-600" 
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    } transition-colors`}
                  >
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
