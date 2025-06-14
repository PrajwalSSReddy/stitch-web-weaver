
import { motion } from "framer-motion";
import { ArrowRight, Code, Smartphone, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import ParallaxSection from "@/components/ParallaxSection";
import MicroArtHover from "@/components/MicroArtHover";
import FloatingOrbs from "@/components/FloatingOrbs";
import CircularButton from "@/components/CircularButton";

const Index = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const skills = [
    { icon: Smartphone, name: "iOS Development", color: "text-blue-400" },
    { icon: Code, name: "Python Development", color: "text-green-400" },
    { icon: Palette, name: "UI/UX Design", color: "text-purple-400" },
    { icon: Globe, name: "React Development", color: "text-orange-400" },
  ];

  return (
    <div className={`min-h-screen ${
      isDark 
        ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" 
        : "bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900"
    } relative`}>
      <FloatingOrbs />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <MicroArtHover variant="aurora" className="absolute inset-0">
          <div className={`absolute inset-0 ${
            isDark 
              ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10" 
              : "bg-gradient-to-r from-blue-500/5 to-purple-500/5"
          } rounded-3xl`}></div>
        </MicroArtHover>
        
        <ParallaxSection offset={30}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center px-6 relative z-10"
          >
            <MicroArtHover variant="glow" className="inline-block">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm Prajwal
              </motion.h1>
            </MicroArtHover>
            
            <motion.h2 
              className={`text-3xl md:text-4xl font-light mb-8 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A versatile developer
            </motion.h2>
            
            <MicroArtHover variant="light" className="max-w-3xl mx-auto mb-12">
              <motion.p 
                className={`text-xl ${
                  isDark ? "text-slate-400" : "text-slate-500"
                } leading-relaxed`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm a passionate developer with expertise in iOS, Python, UI/UX design, and React. 
                I love creating innovative solutions and bringing ideas to life.
              </motion.p>
            </MicroArtHover>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center"
            >
              <Link to="/projects">
                <CircularButton>
                  View My Work
                </CircularButton>
              </Link>
            </motion.div>
          </motion.div>
        </ParallaxSection>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-6 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <MicroArtHover variant="glow" className="inline-block">
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>Skills</h2>
            </MicroArtHover>
            <p className={`text-xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            } max-w-2xl mx-auto`}>
              My expertise spans across multiple domains
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <MicroArtHover variant="light" className={`w-20 h-20 mx-auto mb-4 ${
                  isDark 
                    ? "bg-slate-800 group-hover:bg-slate-700" 
                    : "bg-slate-100 group-hover:bg-slate-200"
                } rounded-2xl flex items-center justify-center transition-colors duration-300`}>
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                </MicroArtHover>
                <h3 className={`text-lg font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                } group-hover:text-blue-400 transition-colors duration-300`}>
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative z-10">
        <ParallaxSection offset={20}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mx-auto max-w-4xl"
          >
            <MicroArtHover variant="aurora" className={`${
              isDark 
                ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50" 
                : "bg-gradient-to-r from-slate-200/50 to-slate-100/50"
            } rounded-3xl p-12`}>
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Let's Create Something Amazing Together
              </h2>
              <p className={`text-xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              } mb-8`}>
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              <MicroArtHover variant="ripple" className="inline-block">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className={`${
                      isDark 
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white" 
                        : "border-slate-300 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    } px-8 py-4 text-lg`}
                  >
                    Get In Touch
                  </Button>
                </Link>
              </MicroArtHover>
            </MicroArtHover>
          </motion.div>
        </ParallaxSection>
      </section>
    </div>
  );
};

export default Index;
