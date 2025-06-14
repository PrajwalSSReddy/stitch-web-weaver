
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import FloatingOrbs from "@/components/FloatingOrbs";
import CertificatesSection from "@/components/CertificatesSection";

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className={`min-h-screen ${
      isDark 
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" 
        : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
    } relative pt-16`}>
      <FloatingOrbs />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6 relative z-10"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My Work
          </motion.h1>
          
          <motion.h2 
            className={`text-3xl md:text-4xl font-light mb-8 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Projects & Certifications
          </motion.h2>
          
          <motion.p 
            className={`text-xl ${
              isDark ? "text-slate-400" : "text-slate-500"
            } leading-relaxed max-w-3xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore my journey through various projects and professional certifications 
            that showcase my skills and continuous learning commitment.
          </motion.p>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <CertificatesSection />
    </div>
  );
};

export default Projects;
