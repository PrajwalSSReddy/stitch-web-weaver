
import { motion } from "framer-motion";
import { User, Heart, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Alex Carter</h1>
          <p className="text-xl text-slate-300 mb-2">
            iOS Developer, Python Developer, UI/UX Designer, React Developer
          </p>
          <p className="text-slate-400">
            Passionate about creating intuitive and impactful digital experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <User className="mr-3 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">Background</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  I am a versatile developer with a strong foundation in iOS and Python, 
                  complemented by expertise in UI/UX design and React. My goal is to craft 
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
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="mr-3 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">Interests</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
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
            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Camera className="mr-3 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Philosophy</h2>
                </div>
                <p className="text-slate-300 leading-relaxed">
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
