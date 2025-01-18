import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  // Animation variants for text container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for individual elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-darker flex items-center relative overflow-hidden" id="home">
      {/* Background patterns */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.svg 
          className="absolute -right-16 -top-16 text-accent/5 w-64 h-64" 
          viewBox="0 0 200 200"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <path fill="currentColor" d="M47.7,-57.2C59.5,-47.3,65.5,-29.7,68.3,-11.5C71.1,6.7,70.8,25.4,62.4,39.1C54,52.8,37.6,61.4,20.3,65.5C3,69.5,-15.2,68.9,-31.8,62.3C-48.4,55.7,-63.4,43,-69.2,27C-75,11,-71.7,-8.3,-63.6,-23.9C-55.5,-39.5,-42.7,-51.3,-28.8,-60.1C-14.9,-68.9,0.2,-74.7,13.9,-71.1C27.7,-67.5,40,-62.5,47.7,-57.2Z" transform="translate(100 100)" />
        </motion.svg>
      </motion.div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content with animations */}
          <motion.div 
            className="flex-1 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated greeting */}
            <motion.div
              variants={itemVariants}
              className="text-xl text-accent font-medium"
            >
              <TypeAnimation
                sequence={[
                  '👋 Hello World!',
                  1000,
                  '🚀 Welcome to my portfolio!',
                  1000,
                  "💫 Let's create something amazing!",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.div>

            {/* Animated name with highlight */}
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-dark-text"
              variants={itemVariants}
            >
              I'm{' '}
              <motion.span 
                className="text-accent relative inline-block"
                animate={{
                  color: ['#your-accent-color', '#your-secondary-color', '#your-accent-color']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                [Your Name]
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.span>
            </motion.h1>

            {/* Animated role/title */}
            <motion.h2 
              className="text-2xl md:text-3xl text-dark-text/80"
              variants={itemVariants}
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer 💻',
                  2000,
                  'UI/UX Designer 🎨',
                  2000,
                  'Problem Solver 🔧',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="inline-block"
              />
            </motion.h2>

            {/* Description with fade-in animation */}
            <motion.p 
              className="text-lg text-dark-text/70 max-w-md"
              variants={itemVariants}
            >
              Passionate about creating beautiful and functional web experiences. 
              Specialized in modern web technologies and user-centric design.
            </motion.p>

            {/* CTA Buttons with hover effects */}
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                View Projects
              </motion.button>
              
              <motion.button
                className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(var(--accent-rgb), 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links with hover animations */}
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
                <motion.a
                  key={platform}
                  href="#"
                  className="text-dark-text/60 hover:text-accent transition-colors"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {platform}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo container with animations */}
          <motion.div 
            className="relative flex-1 max-w-md"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-accent/50 rounded-full"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Photo wrapper with zoom animation */}
            <motion.div
              className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-accent/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Your actual image */}
              <img 
                src="/images/1.png"  // Updated to your image path
                alt="Nipuna Janaranjana"
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-darker/30 to-transparent">
                {/* Optional overlay effects */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}