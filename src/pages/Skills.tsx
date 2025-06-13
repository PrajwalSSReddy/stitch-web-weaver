
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "iOS Development", level: 90, icon: Smartphone, color: "from-blue-500 to-blue-700" },
    { name: "Python Development", level: 85, icon: Code, color: "from-green-500 to-green-700" },
    { name: "UI/UX Design", level: 80, icon: Palette, color: "from-purple-500 to-purple-700" },
    { name: "React Development", level: 75, icon: Globe, color: "from-orange-500 to-orange-700" },
  ];

  const technologies = [
    "Swift", "Python", "React", "JavaScript", "UI/UX Design", 
    "Figma", "HTML", "CSS", "Git", "Agile"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background text-foreground py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My expertise spans across multiple domains, allowing me to approach projects 
            with a holistic perspective. Here's a breakdown of my key skills:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{skill.name}</h3>
                      <div className="w-full bg-muted rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="text-muted-foreground text-sm mt-1 block">{skill.level}%</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {skill.name === "iOS Development" && "Proficient in Swift and SwiftUI, I build robust and user-friendly iOS applications."}
                    {skill.name === "Python Development" && "Experienced in developing backend systems, data analysis tools, and automation scripts using Python."}
                    {skill.name === "UI/UX Design" && "I create intuitive and visually appealing user interfaces, focusing on user experience and accessibility."}
                    {skill.name === "React Development" && "Skilled in building dynamic and responsive web applications using React and modern JavaScript frameworks."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-foreground">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-secondary rounded-full text-secondary-foreground font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
