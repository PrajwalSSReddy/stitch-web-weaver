
import { motion } from "framer-motion";
import { User, Heart, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background text-foreground py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="/lovable-uploads/3bb13471-a1d5-4654-b982-5fa77977faaf.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Prajwal S S Reddy</h1>
          <p className="text-xl text-muted-foreground mb-2">
            iOS Developer at Cubiquitous Pvt Ltd
          </p>
          <p className="text-muted-foreground">
            Since 2025 | Passionate about creating innovative mobile experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <User className="mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold text-foreground">Background</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am currently working as an iOS Developer at Cubiquitous Pvt Ltd since 2025, 
                  with expertise in Python development, UI/UX design, and React. My goal is to craft 
                  seamless and engaging applications that meet user needs and exceed expectations.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="mr-3 text-green-400" />
                  <h2 className="text-2xl font-bold text-foreground">Interests</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and staying updated with the latest design trends. 
                  I also have a keen interest in photography and travel.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Camera className="mr-3 text-purple-400" />
                  <h2 className="text-2xl font-bold text-foreground">Philosophy</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and collaboration. My approach is 
                  user-centric, focusing on creating solutions that are both functional 
                  and aesthetically pleasing. I strive for excellence in every project, 
                  ensuring quality and innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
