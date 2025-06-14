
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingOrbs from "@/components/FloatingOrbs";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";

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

      {/* Tabs Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <Tabs defaultValue="projects" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mb-12"
            >
              <TabsList className={`grid w-full max-w-md grid-cols-2 ${
                isDark 
                  ? "bg-slate-800/50 border border-slate-700" 
                  : "bg-slate-100/50 border border-slate-200"
              }`}>
                <TabsTrigger 
                  value="projects" 
                  className={`${
                    isDark 
                      ? "data-[state=active]:bg-slate-700 data-[state=active]:text-white" 
                      : "data-[state=active]:bg-white data-[state=active]:text-slate-900"
                  }`}
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="certificates"
                  className={`${
                    isDark 
                      ? "data-[state=active]:bg-slate-700 data-[state=active]:text-white" 
                      : "data-[state=active]:bg-white data-[state=active]:text-slate-900"
                  }`}
                >
                  Certificates
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="projects" className="mt-0">
              <ProjectsSection />
            </TabsContent>

            <TabsContent value="certificates" className="mt-0">
              <CertificatesSection />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Projects;
