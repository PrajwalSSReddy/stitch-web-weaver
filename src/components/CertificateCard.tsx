
import { motion } from "framer-motion";
import { useState } from "react";
import { Expand, Award, Calendar, Building } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import MicroArtHover from "./MicroArtHover";

interface CertificateCardProps {
  title: string;
  organization: string;
  date: string;
  image: string;
  description?: string;
  skills?: string[];
}

const CertificateCard = ({ title, organization, date, image, description, skills }: CertificateCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <MicroArtHover variant="aurora" className={`relative overflow-hidden rounded-2xl ${
        isDark 
          ? "bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50" 
          : "bg-gradient-to-br from-white/80 to-slate-50/80 backdrop-blur-sm border border-slate-200/50"
      } transition-all duration-300 hover:scale-[1.02]`}>
        {/* Certificate Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className={`absolute inset-0 ${
            isDark 
              ? "bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" 
              : "bg-gradient-to-t from-slate-100/80 via-transparent to-transparent"
          }`} />
          
          {/* Expand Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full ${
              isDark 
                ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700" 
                : "bg-white/80 text-slate-600 hover:bg-slate-100"
            } backdrop-blur-sm flex items-center justify-center transition-colors duration-300`}
          >
            <Expand className="w-5 h-5" />
          </motion.button>

          {/* Award Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full ${
            isDark 
              ? "bg-blue-500/20 text-blue-400 border border-blue-400/30" 
              : "bg-blue-500/10 text-blue-600 border border-blue-500/20"
          } backdrop-blur-sm flex items-center gap-2`}>
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">Certified</span>
          </div>
        </div>

        {/* Certificate Content */}
        <div className="p-6">
          <motion.h3 
            className={`text-xl font-bold mb-2 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
            layout
          >
            {title}
          </motion.h3>
          
          <div className="flex items-center gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Building className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
              <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {organization}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`} />
              <span className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {date}
              </span>
            </div>
          </div>

          {description && (
            <motion.p 
              className={`text-sm mb-4 ${isDark ? "text-slate-300" : "text-slate-600"}`}
              layout
            >
              {description}
            </motion.p>
          )}

          {skills && skills.length > 0 && (
            <motion.div className="flex flex-wrap gap-2" layout>
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark 
                      ? "bg-blue-500/20 text-blue-400" 
                      : "bg-blue-500/10 text-blue-600"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isDark 
            ? "bg-gradient-to-r from-blue-500/5 to-purple-500/5" 
            : "bg-gradient-to-r from-blue-500/3 to-purple-500/3"
        } rounded-2xl pointer-events-none`} />
      </MicroArtHover>

      {/* Expanded Modal */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsExpanded(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CertificateCard;
