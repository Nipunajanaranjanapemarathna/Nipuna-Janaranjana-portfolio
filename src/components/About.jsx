import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-dark-text mb-4">About Me</h2>
            <motion.div 
              className="w-24 h-1 bg-accent/20 mx-auto rounded-full relative"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1 }}
            >
              <motion.div 
                className="absolute h-full bg-accent rounded-full"
                animate={{ x: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* About Content */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div className="relative group">
              {/* Glowing border container */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
              
              {/* Image container */}
              <motion.div
                className="relative aspect-square rounded-full bg-gradient-to-br from-accent/20 to-accent/10 overflow-hidden border-2 border-accent/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Your actual image */}
                <img 
                  src="/images/about2.jpg"
                  alt="Nipuna Janaranjana"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Keeping the overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent opacity-50">
                  <div className="w-full h-full flex items-end justify-start p-4 text-xs font-mono text-accent/30 overflow-hidden">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="mr-4">
                        {Array.from({ length: 8 }).map((_, j) => (
                          <div key={j}>
                            {Math.random().toString(2).slice(2, 10)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Keeping the animated border */}
              <motion.div
                className="absolute inset-0 border-2 border-accent/20 rounded-full"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Keeping decorative circles */}
              <motion.div
                className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -left-2 -top-2 w-16 h-16 bg-accent/10 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

            {/* Text Content */}
            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <motion.h3 
                className="text-2xl font-semibold text-accent"
              >
                <TypeAnimation
                  sequence={[
                    'AI/ML  Enthusiast',
                    2000,
                    'Cloud Computing Enthusiast',
                    2000,
                    'Undergraduate Student',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h3>

              <motion.p 
                className="text-dark-text/80 leading-relaxed"
                variants={itemVariants}
              >
                I am <span className="text-accent font-medium">Nipuna Janaranjana</span>, 
                passionate about AI and ML, with a focus on emerging trends like Generative AI, 
                Agentic AI, and Computer Vision. Through my academic journey, I've had the 
                opportunity to explore image processing and related technologies.
              </motion.p>

              <motion.p 
                className="text-dark-text/80 leading-relaxed"
                variants={itemVariants}
              >
                I believe that success is built on countless failures, where each setback 
                fuels the next step toward innovation.
              </motion.p>

              <motion.div 
                className="space-y-4 mt-6"
                variants={itemVariants}
              >
                {/* Areas of Focus */}
                {[
                  { label: 'Machine Learning', value: 'Intermediate' },
                  { label: 'Generative AI', value: 'Intermediate' },
                  { label: 'Computer Vision', value: 'Intermediate' },
                  { label: 'Agentic AI', value: 'Intermediate' },
                ].map((focus, index) => (
                  <motion.div 
                    key={focus.label}
                    className="flex items-center gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span 
                      className="w-2 h-2 bg-accent rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                    />
                    <span className="text-dark-text/60">{focus.label}:</span>
                    <span className="text-accent font-medium">{focus.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 