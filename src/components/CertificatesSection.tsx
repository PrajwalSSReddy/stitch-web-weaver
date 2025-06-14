
import { motion } from "framer-motion";
import { Award, TrendingUp } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";
import ParallaxSection from "./ParallaxSection";
import CertificateCard from "./CertificateCard";

const CertificatesSection = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const certificates = [
    {
      title: "Microsoft Learn Student Ambassador",
      organization: "Microsoft",
      date: "2023",
      image: "/lovable-uploads/4a0ef743-e848-41a2-adeb-a98099b29dd7.png",
      description: "Python and Data Visualization Bootcamp completion certificate",
      skills: ["Python", "Data Visualization", "Microsoft Learn"]
    },
    {
      title: "Python and Data Visualization",
      organization: "Google Developer Group",
      date: "2023",
      image: "/lovable-uploads/3d71efee-b61e-4785-bbad-f26e11443a35.png",
      description: "7-days bootcamp completion with DevTown",
      skills: ["Python", "Data Visualization", "DevTown"]
    },
    {
      title: "Python and Deep Learning",
      organization: "DevTown",
      date: "2023",
      image: "/lovable-uploads/c325d044-df87-4772-b958-b65ffe1ae3a7.png",
      description: "7-days bootcamp on Python and Deep Learning",
      skills: ["Python", "Deep Learning", "Machine Learning"]
    },
    {
      title: "Excel: Mother of Business Intelligence",
      organization: "Code Basics",
      date: "October 2023",
      image: "/lovable-uploads/4b03ab92-71e4-4276-9fa8-f33fe1a14659.png",
      description: "Advanced Excel training with real-time business requirements using large datasets",
      skills: ["Excel", "Business Intelligence", "Data Analysis"]
    },
    {
      title: "Artificial Intelligence and Machine Learning",
      organization: "Tequed Labs",
      date: "September 2022",
      image: "/lovable-uploads/a1d8c4b1-0668-4cd9-b176-cdaa683d58ad.png",
      description: "1 Month internship focusing on IPL Batting Analysis project",
      skills: ["AI", "Machine Learning", "Data Analysis", "Python"]
    },
    {
      title: "Power BI Data Analytics",
      organization: "Code Basics",
      date: "October 2023",
      image: "/lovable-uploads/8ab18682-5f66-42fa-bf58-c0c566330725.png",
      description: "Business Insights 360 Power BI dashboard creation and data analytics",
      skills: ["Power BI", "Data Analytics", "Business Intelligence"]
    },
    {
      title: "SQL for Data Professionals",
      organization: "Code Basics",
      date: "November 2023",
      image: "/lovable-uploads/6ed7e2ae-71c1-4ecf-9a8a-2c40a06c02c1.png",
      description: "SQL from beginner to advanced level with real-time business analytics",
      skills: ["SQL", "Database", "Data Analysis"]
    }
  ];

  return (
    <section className={`py-20 px-6 relative ${
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

      <div className="container mx-auto relative z-10">
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
                  <Award className={`w-8 h-8 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                </div>
                <h2 className={`text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                  Certifications
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
              A collection of professional certifications showcasing my continuous learning journey 
              and expertise across various technologies and domains.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-8 mt-8"
            >
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                  {certificates.length}+
                </div>
                <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Certifications
                </div>
              </div>
              <div className={`w-px h-12 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
              <div className="text-center">
                <div className={`text-3xl font-bold ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                  5+
                </div>
                <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Organizations
                </div>
              </div>
              <div className={`w-px h-12 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
              <div className="text-center flex items-center gap-2">
                <TrendingUp className={`w-6 h-6 ${isDark ? "text-green-400" : "text-green-600"}`} />
                <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  Growing
                </div>
              </div>
            </motion.div>
          </motion.div>
        </ParallaxSection>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CertificateCard {...cert} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <ParallaxSection offset={15}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <MicroArtHover variant="aurora" className={`inline-block ${
              isDark 
                ? "bg-gradient-to-r from-slate-800/50 to-slate-700/50" 
                : "bg-gradient-to-r from-slate-200/50 to-slate-100/50"
            } rounded-3xl p-8`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                Continuous Learning Journey
              </h3>
              <p className={`text-lg ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}>
                Always expanding my skillset and staying updated with the latest technologies
              </p>
            </MicroArtHover>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default CertificatesSection;
