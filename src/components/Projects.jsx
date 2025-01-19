import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: "Research Gaps Identifier",
      description: "An AI-powered tool for identifying research gaps in academic literature",
      technologies: ["LLaMA 3.1", "Flask", "Groq Cloud"],
      points: [
        "Built Research Gaps Identifier with LLaMA 3.1, Flask, and Groq Cloud",
        "Streamlined gap detection for academic research"
      ],
      supervisor: "Dr. D. L. Chamara Pramod Liyanage",
      image: "/images/research-gap2.jpg",
      github: "https://github.com/Nipunajanaranjanapemarathna/research-gaps-identifier"
    },
    {
      title: "Potato Leaf Disease Classification",
      description: "CNN-based system for real-time disease detection in potato plants",
      technologies: ["FastAPI", "TensorFlow", "CNN"],
      points: [
        "Built FastAPI backend for CNN-based potato leaf disease classification",
        "Enabled real-time image classification with TensorFlow and /docs API"
      ],
      image: "/images/potato.jpg",
      github: "https://github.com/Nipunajanaranjanapemarathna/CNN_Deploy_FastApi"
    },
    {
      title: "CalmMind AI",
      description: "AI-powered mental health support system",
      technologies: ["LLaMA", "Groq API", "RAG"],
      points: [
        "Built CalmMind AI for stress relief using LLaMA and Groq API",
        "Utilized RAG for personalized, AI-driven support"
      ],
      status: "Ongoing",
      image: "/images/calm_mind.jpeg",
      github: "https://github.com/NipunaJayathilaka/calm-mind-ai"
    },
    {
      title: "Abnormal Behavior Detection",
      description: "AI system for detecting unusual behavior patterns",
      technologies: ["MediaPipe", "LSTM", "TensorFlow"],
      points: [
        "Implemented MediaPipe Pose Estimation",
        "LSTM for action recognition",
        "TensorFlow for model training"
      ],
      status: "Ongoing",
      image: "/images/abnormal.jpg",
      github: "https://github.com/NipunaJayathilaka/abnormal-behavior-detection"
    },
    {
      title: "Mental Health Support LLM",
      description: "Specialized LLM for mental health assistance",
      technologies: ["LLaMA", "LoRA"],
      points: [
        "Fine-Tuned LLM with LoRA for mental health support",
        "Used Medical Q&A Data from doctors and consultants."
      ],
      image: "/images/menal_llm.jpg",
      github: "https://github.com/NipunaJayathilaka/mental-health-support-llm"
    },
    {
      title: "Multi AI Agent System",
      description: "Complex system of specialized AI agents",
      technologies: ["Phidata", "LLaMA"],
      points: [
        "Developed web search, finance, and team leader agents",
        "LLM for LLAMA"
      ],
      image: "/images/multiagentic.jpg",
      github: "https://github.com/Nipunajanaranjanapemarathna/agentic_AI"
    }
  ];

  return (
    <section className="py-20 bg-darker relative overflow-hidden" id="projects">
      {/* Decorative Vector Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right pattern */}
        <svg className="absolute -right-16 -top-16 text-accent/5 w-64 h-64" viewBox="0 0 200 200">
          <path fill="currentColor" d="M42.7,-62.9C50.9,-52.8,50.1,-34.4,51.7,-19.2C53.4,-4,57.4,8,54.4,18.7C51.4,29.4,41.4,38.8,30.4,45.6C19.4,52.4,7.3,56.6,-6.3,57.8C-19.9,59,-35,57.2,-48.8,49.6C-62.6,42,-75.1,28.7,-78.3,13.2C-81.5,-2.3,-75.4,-20,-65.5,-33.3C-55.7,-46.7,-42.1,-55.7,-28.8,-63.2C-15.5,-70.7,-2.6,-76.7,8.8,-73.8C20.3,-71,34.5,-73,42.7,-62.9Z" transform="translate(100 100)" />
        </svg>
        
        {/* Bottom-left pattern */}
        <svg className="absolute -left-16 -bottom-16 text-accent/5 w-64 h-64" viewBox="0 0 200 200">
          <path fill="currentColor" d="M39.5,-51.2C52.6,-43.9,65.8,-34.4,70.8,-21.5C75.8,-8.6,72.6,7.7,66.5,22.3C60.3,36.9,51.2,49.8,38.8,57.4C26.3,65,10.5,67.3,-3.9,64.9C-18.2,62.4,-31,55.2,-43.9,46.3C-56.8,37.4,-69.8,26.8,-74.8,12.5C-79.7,-1.8,-76.7,-19.8,-67.8,-33C-58.9,-46.2,-44.1,-54.5,-30.2,-61.3C-16.3,-68,-2.3,-73.2,9.4,-69.8C21.1,-66.5,40.1,-54.6,39.5,-51.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          {/* Title with Code Icons */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <CodeBracketIcon className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold text-dark-text">Projects</h2>
            <CommandLineIcon className="w-8 h-8 text-accent" />
          </div>
          
          {/* Animated underline */}
          <div className="w-24 h-1 bg-accent/20 mx-auto rounded-full relative">
            <div className="absolute w-12 h-1 bg-accent rounded-full animate-slide"></div>
          </div>

          {/* Decorative dots grid */}
          <div className="absolute -right-4 top-0 w-20 h-20 grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-darkBg rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30 max-w-sm mx-auto"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.status && (
                  <span className="absolute top-3 right-3 text-accent text-xs px-2 py-1 bg-darkBg/90 rounded-full">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-dark-text mb-1">{project.title}</h3>
                  <p className="text-dark-text-muted text-sm mb-2">{project.description}</p>
                  {project.supervisor && (
                    <p className="text-accent text-xs mb-2">Supervisor: {project.supervisor}</p>
                  )}
                </div>

                <div className="mb-3 flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-0.5 bg-accent/5 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-dark-text-muted text-xs space-y-1 ml-1">
                  {project.points.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-end">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-5 h-5" />
                    <span className="text-sm">View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 