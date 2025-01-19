import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, CpuChipIcon } from '@heroicons/react/24/outline';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", icon: "fab fa-python" },
        { name: "Neural Networks", icon: "fas fa-network-wired" },
        { name: "ML Algorithms", icon: "fas fa-cogs" },
        { name: "Image Processing", icon: "fas fa-image" },
        { name: "LLM", icon: "fas fa-robot" },
        { name: "Vector DB", icon: "fas fa-database" },
        { name: "Agentic AI", icon: "fas fa-microchip" },
      ]
    },
    {
      title: "Data Science",
      skills: [
        { name: "NumPy", icon: "fas fa-calculator" },
        { name: "Pandas", icon: "fas fa-table" },
        { name: "SQL", icon: "fas fa-database" },
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: "fab fa-aws" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "Git/GitHub", icon: "fab fa-github" },
        { name: "Linux", icon: "fab fa-linux" },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "Java", icon: "fab fa-java" },
        { name: "C", icon: "fas fa-code" },
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", icon: "fab fa-react" },
        { name: "Flask", icon: "fas fa-flask" },
        { name: "FastAPI", icon: "fas fa-bolt" },
      ]
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Hover animation for skill cards
  const skillCardVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(var(--accent-rgb), 0.15)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  // Background pattern animation
  const patternVariants = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="skills">
      {/* Animated background patterns */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.svg 
          variants={patternVariants}
          initial="initial"
          animate="animate"
          className="absolute -right-16 -top-16 text-accent/5 w-64 h-64" 
          viewBox="0 0 200 200"
        >
          <path fill="currentColor" d="M47.7,-57.2C59.5,-47.3,65.5,-29.7,68.3,-11.5C71.1,6.7,70.8,25.4,62.4,39.1C54,52.8,37.6,61.4,20.3,65.5C3,69.5,-15.2,68.9,-31.8,62.3C-48.4,55.7,-63.4,43,-69.2,27C-75,11,-71.7,-8.3,-63.6,-23.9C-55.5,-39.5,-42.7,-51.3,-28.8,-60.1C-14.9,-68.9,0.2,-74.7,13.9,-71.1C27.7,-67.5,40,-62.5,47.7,-57.2Z" transform="translate(100 100)" />
        </motion.svg>
        
        <motion.svg 
          variants={patternVariants}
          initial="initial"
          animate="animate"
          className="absolute -left-16 -bottom-16 text-accent/5 w-64 h-64" 
          viewBox="0 0 200 200"
        >
          <path fill="currentColor" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.4,18.7C51.4,29.4,41.4,38.8,30.4,45.6C19.4,52.4,7.3,56.6,-6.3,57.8C-19.9,59,-35,57.2,-48.8,49.6C-62.6,42,-75.1,28.7,-78.3,13.2C-81.5,-2.3,-75.4,-20,-65.5,-33.3C-55.7,-46.7,-42.1,-55.7,-28.8,-63.2C-15.5,-70.7,-2.6,-76.7,8.8,-73.8C20.3,-71,34.5,-73,42.7,-62.9Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <WrenchScrewdriverIcon className="w-8 h-8 text-accent" />
            </motion.div>
            <h2 className="text-4xl font-bold text-dark-text">Skills</h2>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <CpuChipIcon className="w-8 h-8 text-accent" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-24 h-1 bg-accent/20 mx-auto rounded-full relative"
            whileInView={{ width: [0, 96] }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute w-12 h-1 bg-accent rounded-full animate-slide"></div>
          </motion.div>

          <motion.div 
            className="absolute -right-4 top-0 w-20 h-20 grid grid-cols-3 gap-2 opacity-20"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-accent rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-darkBg rounded-lg p-6 transform-gpu"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-semibold text-dark-text mb-4">{category.title}</h3>
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center space-x-2 bg-darker p-3 rounded-lg transition-colors duration-300"
                    variants={skillCardVariants}
                    whileHover="hover"
                  >
                    <motion.span 
                      className="text-accent text-xl w-8"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <i className={skill.icon}></i>
                    </motion.span>
                    <span className="text-dark-text-muted">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 