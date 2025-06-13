
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Mobile App for Fitness Tracking",
      description: "A fitness tracking app built with Swift, focusing on user experience and performance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      tags: ["Swift", "iOS", "Core Data", "HealthKit"],
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "E-commerce Website Redesign",
      description: "Redesign of an e-commerce platform, enhancing user interface and responsiveness using React.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Data Analysis Tool in Python",
      description: "A Python-based tool for analyzing large datasets, providing insights and visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "UI/UX Design for Travel App",
      description: "A UI/UX design for a travel application, focusing on user experience and visual appeal.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
      gradient: "from-orange-500/20 to-red-500/20"
    }
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
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects showcasing my skills in iOS, Python, UI/UX Design, and React development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${project.gradient} border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-muted-foreground hover:bg-accent hover:text-foreground"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
