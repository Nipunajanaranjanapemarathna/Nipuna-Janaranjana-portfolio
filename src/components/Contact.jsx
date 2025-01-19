import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  // Animation variants
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

  // Contact info items
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: "Email",
      value: "nipunajanaranjana7@gmail.com",
      link: "mailto:your.email@example.com"
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      value: "(+94) 743790268",
      link: "tel:+94743790268"
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      value: "Mihinthale, Sri lanka",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      url: 'https://github.com/Nipunajanaranjanapemarathna',
      icon: <FaGithub className="w-6 h-6" />
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nipuna-janaranjana-936960285/',
      icon: <FaLinkedin className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="contact">
      {/* Background decoration */}
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold text-dark-text mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent/20 mx-auto rounded-full relative">
              <motion.div 
                className="absolute w-12 h-1 bg-accent rounded-full"
                animate={{ x: [0, 48, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-darkBg rounded-xl p-6 shadow-lg"
            >
              <form className="space-y-4">
                <div className="space-y-4">
                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label className="block text-dark-text/80 mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-darkBg border border-accent/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors text-dark-text placeholder-dark-text/50"
                      placeholder="John Doe"
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label className="block text-dark-text/80 mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-darkBg border border-accent/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors text-dark-text placeholder-dark-text/50"
                      placeholder="john@example.com"
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                    <label className="block text-dark-text/80 mb-2 text-sm">Message</label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-darkBg border border-accent/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors min-h-[150px] text-dark-text placeholder-dark-text/50"
                      placeholder="Your message here..."
                    ></textarea>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="flex items-center p-6 bg-darkBg rounded-xl shadow-lg hover:bg-accent/5 transition-colors"
                    whileHover={{
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="p-3 bg-accent/10 rounded-lg text-accent mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-dark-text font-medium mb-1">{info.title}</h3>
                      <p className="text-dark-text/70">{info.value}</p>
                    </div>
                  </motion.div>
                </motion.a>
              ))}

              {/* Social Media Links */}
              <motion.div 
                variants={itemVariants}
                className="flex gap-4 mt-8"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-darkBg rounded-lg text-dark-text/70 hover:text-accent transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 