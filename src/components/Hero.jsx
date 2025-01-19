import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen relative overflow-hidden bg-darkBg">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-primary to-secondary opacity-60"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-accent-light/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              className="mx-auto mb-8"
            >
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                <motion.div 
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-[3px] rounded-full bg-darkBg"></div>
                <motion.div 
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="\images\hero (1).jpg"
                    alt="Nipuna Janaranjana"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-dark-text mb-6 bg-clip-text text-transparent bg-gradient-to-r from-accent-light to-accent"
            >
              Nipuna Janaranjana
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl text-dark-text-muted max-w-2xl mx-auto leading-relaxed"
            >
              AI/ML Enthusiast | Exploring Generative AI, Agentic AI, and Computer Vision | Undergraduate Student
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex justify-center gap-4 mt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent-light transform transition-all duration-300 shadow-lg hover:shadow-accent/50"
              >
                Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-3 bg-secondary/50 text-dark-text rounded-full font-medium hover:bg-secondary transform transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ 
                opacity: 1, 
                y: [0, 10, 0] 
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-6 h-10 border-2 border-dark-text-muted rounded-full p-1">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mx-auto animate-bounce"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 