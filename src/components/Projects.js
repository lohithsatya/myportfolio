import React from 'react';
import { FaGithub } from 'react-icons/fa';

const colorClasses = {
  purple: "from-purple-500 to-purple-700",
  blue: "from-blue-500 to-blue-700",
  green: "from-green-500 to-green-700"
};

const Projects = () => {
  const projects = [
    {
      title: "BLOG APP",
      description: "A full-stack blog application built with MERN stack. Features user authentication, blog post creation, editing, and deletion with a clean and intuitive interface.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/lohithsatya/blogapp",
      color: "purple"
    },
    {
      title: "INTERNSHIP-AUTOMATION",
      description: "An automated system for managing student internships, featuring application submission, approval workflows, and document management.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com/lohithsatya/internship-automation",
      color: "blue"
    },
    {
      title: "TASKHUB",
      description: "A task management platform designed to streamline team collaboration and productivity, with real-time updates and intuitive task organization.",
      technologies: ["Node.js", "Express", "MongoDB", "React"],
      github: "https://github.com/lohithsatya/taskhub",
      color: "green"
    },
    {
      title: "IMAGE CLASSIFICATION",
      description: "Built a CNN model using TensorFlow/Keras that achieves 95% accuracy on CIFAR-10 dataset. Implemented data augmentation and transfer learning techniques.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN"],
      github: "https://github.com/lohithsatya/image-classification",
      color: "purple"
    },
    {
      title: "REAL-TIME OBJECT DETECTION",
      description: "Developed a real-time object detection system using YOLOv5 architecture. Capable of detecting 80+ object classes with 30 FPS performance.",
      technologies: ["Python", "PyTorch", "YOLOv5", "OpenCV"],
      github: "https://github.com/lohithsatya/object-detection",
      color: "blue"
    },
    {
      title: "MEDICAL IMAGE SEGMENTATION",
      description: "Implemented a U-Net architecture for segmenting tumors in MRI scans. Achieved 0.92 Dice coefficient on the BraTS dataset.",
      technologies: ["Python", "PyTorch", "U-Net", "Medical Imaging"],
      github: "https://github.com/lohithsatya/medical-segmentation",
      color: "green"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/90 to-blue-900/90 relative font-['Times_New_Roman']">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E')] opacity-25"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
            My Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transform hover:scale-105 transition-all duration-300 group"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${colorClasses[project.color]}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center text-4xl text-white/10 font-bold">
                  {project.title.split(' ')[0]}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white mb-4 text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm px-3 py-1 bg-purple-500/20 text-white rounded-full hover:bg-purple-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-300 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
