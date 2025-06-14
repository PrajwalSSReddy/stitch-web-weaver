
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Business 360 - PowerBI",
      description: "This Power BI dashboard that helped AtliQ Hardware analyze their global sales trends. The dashboard gathered data from two different sources: Excel/CSV files and a SQL database.",
      date: "Nov 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      tags: ["Power BI", "SQL", "Excel", "Data Analysis"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      liveLink: "https://app.powerbi.com/links/bKm6_9zzPY?ctid=89bf0b5b-6665-4eb0-a6fc-fc2e8734863e&pbi_source=linkShare&bookmarkGuid=ef8286e4-1ffd-47e4-b18b-224fe4dc5f82"
    },
    {
      title: "Excel Sales Analytics",
      description: "This project demonstrates a comprehensive approach to sales and finance data analysis, providing valuable insights that can drive business strategy.",
      date: "Oct 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      tags: ["Excel", "Data Analysis", "Sales Analytics"],
      gradient: "from-green-500/20 to-emerald-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/Excel_Sales_Analytics"
    },
    {
      title: "Grocery Store Management",
      description: "The Grocery Store Management is a web-based application that enables store owners to record and manage the details of the products and orders in the store.",
      date: "Aug 2023",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["FastAPI", "Python", "Web Development"],
      gradient: "from-purple-500/20 to-pink-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/Grocery_store_management_system_using_Fastapi"
    },
    {
      title: "Notes-App",
      description: "The Notes-app is a FastAPI application that allows users to create, read, update and delete notes. It is built using Python 3.7+ and FastAPI framework.",
      date: "Jul 2023",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      tags: ["FastAPI", "Python", "CRUD", "API"],
      gradient: "from-orange-500/20 to-red-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/Notes-app"
    },
    {
      title: "Cricket Analysis-PowerBI",
      description: "This dashboard will analyze cricket player statistics and select the best 11 based on the T20 World Cup 2022 using pandas, numpy, data extraction from the ESPN website and Power BI.",
      date: "Jun 2023",
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
      tags: ["Power BI", "Pandas", "NumPy", "Data Extraction"],
      gradient: "from-blue-500/20 to-purple-500/20",
      liveLink: "https://app.powerbi.com/links/T1-xQGfpDX?ctid=89bf0b5b-6665-4eb0-a6fc-fc2e8734863e&pbi_source=linkShare"
    },
    {
      title: "Autonomous Trash Collecting Robot - Densenet121 Architecture",
      description: "This project worked on Image recognization using deep learning, of CNN algorithm with Densenet121 Architecture, which uses a number of layers which contains neurons to find the trash in image captured by camera.",
      date: "Apr 2023",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      tags: ["Deep Learning", "CNN", "DenseNet", "Computer Vision"],
      gradient: "from-teal-500/20 to-cyan-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/Densenet121_Architecture-"
    },
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system is an ML-based approach to filtering or predicting the users film preferences based on their past choices and behaviour.",
      date: "Mar 2023",
      image: "https://images.unsplash.com/photo-1489599508084-7f2ab92accd3?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "Streamlit", "Recommendation System"],
      gradient: "from-pink-500/20 to-rose-500/20",
      liveLink: "https://movie1recommended1system.streamlit.app/"
    },
    {
      title: "Stock Market Prediction using Numerical and Textual Analysis",
      description: "Stock Market Prediction using Numerical and Textual Analysis is a project that aims to create a hybrid model for predicting stock price/performance.",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      tags: ["Machine Learning", "Stock Prediction", "Textual Analysis"],
      gradient: "from-indigo-500/20 to-blue-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/Task_7-Stock%20Market%20Prediction%20using%20Numerical%20and%20Textual%20Analysis.ipynb"
    },
    {
      title: "IPL Batting Analysis",
      description: "IPL batting analysis is the process of exploring and visualizing the data of IPL matches to gain insights about the performance of batsmen.",
      date: "Sep 2022",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
      tags: ["Data Analysis", "Python", "Cricket Analytics"],
      gradient: "from-yellow-500/20 to-orange-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/IPL_Batting_Analysis"
    },
    {
      title: "Prediction Using Unsupervised ML-Kmeans",
      description: "The project involved using the K-means clustering algorithm to analyze the Iris dataset, a popular dataset in the field of machine learning.",
      date: "Dec 2023",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      tags: ["K-means", "Clustering", "Unsupervised ML", "Iris Dataset"],
      gradient: "from-violet-500/20 to-purple-500/20",
      githubLink: "https://github.com/PrajwalSSReddy/The-spark-Foundation/blob/main/task_2_kmeans_main.ipynb"
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
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of my work in data analysis, machine learning, web development, and mobile applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`bg-gradient-to-br ${project.gradient} border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full flex flex-col`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
                <CardHeader className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-foreground group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {project.title}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                      {project.date}
                    </span>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 rounded-full text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-muted-foreground hover:bg-accent hover:text-foreground flex-1"
                        onClick={() => window.open(project.githubLink, '_blank')}
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-border text-muted-foreground hover:bg-accent hover:text-foreground flex-1"
                        onClick={() => window.open(project.liveLink, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live
                      </Button>
                    )}
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
