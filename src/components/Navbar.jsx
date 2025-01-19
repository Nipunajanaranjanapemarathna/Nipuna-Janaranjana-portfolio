import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ArrowDownTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Skills', href: '#skills' },
    { title: 'Education', href: '#education' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F172A]/90 backdrop-blur-xl border-b border-accent/10' : 'bg-[#0F172A]/80 backdrop-blur-lg'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center">
              <img
                src="/images/hero (1).jpg"
                alt="nJ Logo"
                className="h-8 w-8 rounded-full object-cover border-2 border-accent/20"
              />
              <span className="text-xl font-bold text-accent ml-2">Nipuna</span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.href}
                className="text-dark-text/80 hover:text-accent relative group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.title}
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            {/* CV Download Button */}
            <motion.a
              href="../public/cv/Nipuna_cv.pdf"
              download="Nipuna_cv.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-accent text-darker rounded-full hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownTrayIcon className="w-4 h-4" />
              <span className="font-medium">Download CV</span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark-text/80 hover:text-accent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-darker/40 backdrop-blur-md md:hidden"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ zIndex: 40 }}
                />
                
                {/* Mobile menu content */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 md:hidden"
                  style={{ zIndex: 50 }}
                >
                  <div className="bg-[#0F172A]/95 backdrop-blur-xl shadow-xl border-t border-accent/10">
                    <div className="container mx-auto px-4 py-4">
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link, index) => (
                          <motion.a
                            key={link.title}
                            href={link.href}
                            className="text-dark-text/80 hover:text-accent py-2 transition-colors duration-200"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.title}
                          </motion.a>
                        ))}
                        {/* Mobile CV Download Button */}
                        <motion.a
                          href="../public/cv/Nipuna_cv.pdf"
                          download="Nipuna_cv.pdf"
                          className="flex items-center gap-2 px-4 py-2 bg-accent text-darker rounded-full hover:bg-accent/90 transition-colors w-full justify-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: navLinks.length * 0.1 }}
                        >
                          <ArrowDownTrayIcon className="w-4 h-4" />
                          <span className="font-medium">Download CV</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Progress Bar */}
      <motion.div
        className="h-0.5 bg-accent/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-accent"
          style={{
            transformOrigin: 'left',
            scaleX: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.header>
  );
} 