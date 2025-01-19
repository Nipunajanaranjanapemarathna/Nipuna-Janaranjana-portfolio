import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon, AcademicCapIcon as CertificateIcon } from '@heroicons/react/24/outline';

export default function Education() {
  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="education">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <AcademicCapIcon className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold text-dark-text">Education</h2>
            <BookOpenIcon className="w-8 h-8 text-accent" />
          </div>
          
          <div className="w-24 h-1 bg-accent/20 mx-auto rounded-full relative">
            <div className="absolute w-12 h-1 bg-accent rounded-full animate-slide"></div>
          </div>
        </motion.div>

        {/* Academic Education Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.h3 
            className="text-2xl font-semibold text-accent mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Academic Qualifications
          </motion.h3>
          
          {/* University Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-accent/20"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent absolute top-1 left-1"></div>
            </div>
            <div className="bg-darkBg p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent mb-2">Bachelor of Information and Communication Technology (Hons)</h4>
              <p className="text-dark-text/60 mb-2">Faculty of Technology, University of Sri Jayewardenepura</p>
              <p className="text-dark-text/60">2022 - Present</p>
            </div>
          </motion.div>

          {/* High School Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-accent/20"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent absolute top-1 left-1"></div>
            </div>
            <div className="bg-darkBg p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent mb-2">G.C.E. Advanced Level in Technology</h4>
              <p className="text-dark-text/60 mb-2">A/Mihinthale M/V</p>
              <p className="text-dark-text/60 mb-2">Engineering Technology</p>
              <p className="text-dark-text/60 font-medium">District Rank - 20</p>
            </div>
          </motion.div>
        </div>

        {/* Professional Certificates Section */}
        <div className="max-w-3xl mx-auto">
          <motion.h3 
            className="text-2xl font-semibold text-accent mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Professional Certificates
          </motion.h3>

          {/* AWS Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-accent/20"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent absolute top-1 left-1"></div>
            </div>
            <div className="bg-darkBg p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent mb-2">AWS Cloud Practitioner Essentials Certificate</h4>
              <p className="text-dark-text/60 mb-2">Amazon Web Services (AWS)</p>
              <p className="text-dark-text/60">2024</p>
            </div>
          </motion.div>

          {/* AI/ML Certificate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-8 pb-12 border-l-2 border-accent/20"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20">
              <div className="w-2 h-2 rounded-full bg-accent absolute top-1 left-1"></div>
            </div>
            <div className="bg-darkBg p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-accent mb-2">AI/ML Engineer - Stage II</h4>
              <p className="text-dark-text/60 mb-2">Sri Lanka Institute of Information Technology (SLIIT)</p>
              <p className="text-dark-text/60">2024</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 