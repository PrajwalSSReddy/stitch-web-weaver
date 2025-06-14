import { motion, useScroll, useTransform } from "framer-motion";
import { Code, ExternalLink, Github, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";
import ParallaxSection from "./ParallaxSection";
import { useState, useRef, useCallback, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const ProjectsSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [currentProject, setCurrentProject] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [isMobile, setIsMobile] = useState(false);
  const macbookRef = useRef<HTMLDivElement>(null);

  // Check if mobile view - fixed threshold
  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      console.log("Window width:", width);
      setIsMobile(width < 1024); // Use 1024px as threshold for laptop vs mobile
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fixed scroll-based animations for MacBook with proper opening timing
  const { scrollYProgress } = useScroll({
    target: macbookRef,
    offset: ["start 90%", "end -50%"]
  });

  // Fixed lid rotation - properly opens the laptop
  const lidRotation = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [0, -85, -85, -20] // Start closed (0), open to -85 degrees, stay open, close slightly at end
  );
  
  // Smoother opacity transition
  const baseOpacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [0.4, 1, 1, 0.4]
  );

  // Scale animation for more dynamic effect
  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.95, 1, 1, 0.95]
  );

  // Update current project when carousel changes
  const onSelect = useCallback(() => {
    if (!api) {
      console.log("API not available in onSelect");
      return;
    }
    const newIndex = api.selectedScrollSnap();
    console.log("Carousel selection changed to:", newIndex);
    setCurrentProject(newIndex);
  }, [api]);

  // Set up carousel API and event listeners
  useEffect(() => {
    if (!api) {
      console.log("API not available in useEffect");
      return;
    }

    console.log("Setting up carousel API");
    setCurrentProject(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      console.log("Cleaning up carousel API");
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

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

  const handlePrevProject = useCallback(() => {
    console.log("Previous button clicked, API exists:", !!api);
    if (api) {
      console.log("Current scroll snap before prev:", api.selectedScrollSnap());
      api.scrollPrev();
      console.log("ScrollPrev called");
    } else {
      console.error("API not available for previous button");
    }
  }, [api]);

  const handleNextProject = useCallback(() => {
    console.log("Next button clicked, API exists:", !!api);
    if (api) {
      console.log("Current scroll snap before next:", api.selectedScrollSnap());
      api.scrollNext();
      console.log("ScrollNext called");
    } else {
      console.error("API not available for next button");
    }
  }, [api]);

  const handleProjectSelect = useCallback((index: number) => {
    console.log("Project selected:", index, "API exists:", !!api);
    if (api) {
      console.log("Current scroll snap before select:", api.selectedScrollSnap());
      api.scrollTo(index);
      console.log("ScrollTo called with index:", index);
    } else {
      console.error("API not available for project selection");
    }
  }, [api]);

  const currentProjectData = projects[currentProject];

  const MobileDeviceFrame = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      viewport={{ once: true }}
      className="relative mx-auto"
      style={{ width: '100%', maxWidth: '400px' }}
    >
      {/* Mobile Frame */}
      <div className={`relative ${
        isDark 
          ? "bg-gradient-to-br from-slate-700 to-slate-800" 
          : "bg-gradient-to-br from-slate-200 to-slate-300"
      } shadow-2xl transition-all duration-700 ease-out`}
      style={{
        width: '100%',
        aspectRatio: '9/16',
        borderRadius: '32px',
        padding: '12px',
      }}>
        {/* Mobile Screen */}
        <div 
          className={`relative overflow-hidden ${
            isDark ? "bg-slate-900" : "bg-white"
          } shadow-inner transition-all duration-500`}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
          }}
        >
          {/* Screen Bezel */}
          <div className={`absolute inset-0 border-2 ${
            isDark ? "border-slate-800" : "border-slate-100"
          } pointer-events-none z-10`} 
          style={{ borderRadius: '24px' }} />
          
          {/* Notch */}
          <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 ${
            isDark ? "bg-slate-800" : "bg-slate-200"
          } z-20`}
          style={{ borderRadius: '0 0 16px 16px' }} />
          
          {children}
        </div>
      </div>
    </motion.div>
  );

  const LaptopDeviceFrame = ({ children }: { children: React.ReactNode }) => (
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
      className="max-w-7xl mx-auto mb-16 relative"
      style={{ 
        perspective: '2000px',
        opacity: baseOpacity,
        scale: scale
      }}
    >
      {/* MacBook Base */}
      <div className="relative mx-auto" style={{ width: '100%', maxWidth: '1400px' }}>
        {/* MacBook Lid (Screen) with Fixed Animation */}
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
            transformStyle: 'preserve-3d'
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
            
            {children}
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
  );

  const DeviceContent = () => (
    <>
      {/* Navigation Controls */}
      <div className={`absolute ${isMobile ? 'top-12' : 'top-4'} left-4 right-4 z-20 flex items-center justify-between`}>
        <button
          onClick={handlePrevProject}
          className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full ${
            isDark 
              ? "bg-slate-800/90 text-slate-300 hover:bg-slate-700" 
              : "bg-white/90 text-slate-600 hover:bg-slate-100"
          } backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border ${
            isDark ? "border-slate-700" : "border-slate-200"
          } hover:scale-110 active:scale-95`}
        >
          <ChevronLeft className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </button>

        {/* Project Counter */}
        <div className={`${isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3'} rounded-full ${
          isDark 
            ? "bg-slate-800/90 text-slate-300" 
            : "bg-white/90 text-slate-600"
        } backdrop-blur-sm font-medium shadow-lg border ${
          isDark ? "border-slate-700" : "border-slate-200"
        }`}>
          {currentProject + 1} / {projects.length}
        </div>

        <button
          onClick={handleNextProject}
          className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-full ${
            isDark 
              ? "bg-slate-800/90 text-slate-300 hover:bg-slate-700" 
              : "bg-white/90 text-slate-600 hover:bg-slate-100"
          } backdrop-blur-sm flex items-center justify-center transition-all duration-300 shadow-lg border ${
          isDark ? "border-slate-700" : "border-slate-200"
        } hover:scale-110 active:scale-95`}
        >
          <ChevronRight className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
        </button>
      </div>

      {/* Carousel for Project Content */}
      <Carousel 
        className="w-full h-full"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
          watchDrag: true,
        }}
      >
        <CarouselContent className="h-full -ml-0">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <motion.div 
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentProject === index ? 1 : 0.3 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Browser Chrome - Hide on mobile for more space */}
                {!isMobile && (
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
                      {project.liveUrl}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
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
                        href={project.liveUrl}
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
                )}

                {/* Project Visualization */}
                <div className="relative" style={{ height: isMobile ? '100%' : 'calc(100% - 80px)' }}>
                  {/* Project Image/Preview with Fade Animation */}
                  <motion.div 
                    className="relative w-full h-full overflow-hidden"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    key={project.title}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with project details */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="text-white">
                        <motion.div 
                          className="flex items-center justify-between mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <h3 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold`}>
                            {project.title}
                          </h3>
                          <span className={`${isMobile ? 'text-xs px-3 py-1' : 'text-sm px-4 py-2'} rounded-full bg-white/20 backdrop-blur-sm border border-white/30`}>
                            {project.date}
                          </span>
                        </motion.div>
                        
                        <motion.p 
                          className={`text-white/90 mb-4 md:mb-6 ${isMobile ? 'text-sm' : 'text-lg'} leading-relaxed max-w-4xl`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          {project.description}
                        </motion.p>
                        
                        <motion.div 
                          className="flex flex-wrap gap-2 mb-4 md:mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          {project.technologies.slice(0, isMobile ? 3 : 6).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`${isMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-full font-medium bg-blue-500/30 text-blue-200 border border-blue-400/50 backdrop-blur-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > (isMobile ? 3 : 6) && (
                            <span className={`${isMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-full text-blue-200`}>
                              +{project.technologies.length - (isMobile ? 3 : 6)}
                            </span>
                          )}
                        </motion.div>
                        
                        {/* Action Buttons */}
                        <motion.div 
                          className={`flex ${isMobile ? 'gap-2' : 'gap-4'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={`${isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3'} rounded-lg bg-slate-800/50 text-white border border-slate-600 hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2`}
                            >
                              <Github className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                              {!isMobile && 'View Code'}
                            </motion.a>
                          )}
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${isMobile ? 'px-3 py-2 text-sm' : 'px-6 py-3'} rounded-lg bg-blue-600/80 text-white border border-blue-500 hover:bg-blue-700/80 transition-all duration-300 flex items-center gap-2`}
                          >
                            <ExternalLink className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`} />
                            {!isMobile && (project.type === 'github' ? 'View Repository' : 'Visit Project')}
                          </motion.a>
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        className={`absolute ${isMobile ? 'top-16' : 'top-6'} left-4 md:left-6 ${isMobile ? 'px-3 py-1 text-xs' : 'px-4 py-2'} rounded-full bg-yellow-500/30 text-yellow-300 border border-yellow-400/50 backdrop-blur-sm`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                      >
                        <span className="font-medium">Featured</span>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );

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
                  {isMobile ? (
                    <Smartphone className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                  ) : (
                    <Code className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                  )}
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

        {/* Device Container with Carousel - Properly Responsive */}
        <div className="relative">
          <div className="block lg:hidden">
            {/* Mobile View */}
            <MobileDeviceFrame>
              <DeviceContent />
            </MobileDeviceFrame>
          </div>
          
          <div className="hidden lg:block">
            {/* Desktop View - Laptop */}
            <LaptopDeviceFrame>
              <DeviceContent />
            </LaptopDeviceFrame>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mt-16"
        >
          <h3 className={`text-3xl font-bold text-center mb-12 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            All Projects
          </h3>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${isMobile ? 'gap-3' : 'xl:grid-cols-5 gap-4'}`}>
            {projects.map((project, index) => (
              <motion.button
                key={index}
                onClick={() => handleProjectSelect(index)}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
