import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaRobot, FaGitAlt } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Full Stack Development',
      description: 'Creating end-to-end solutions with both frontend and backend expertise.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications with React Native.'
    },
    {
      icon: <FaRobot />,
      title: 'Machine Learning',
      description: 'Implementing ML models and data analysis pipelines using Python and TensorFlow.'
    },
    {
      icon: <FaGitAlt />,
      title: 'Version Control',
      description: 'Managing code repositories and collaborating using Git and GitHub workflows.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/90 to-blue-900/90 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E')] opacity-25"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a motivated and results-driven individual with a strong foundation in software development. 
            Passionate about continuous learning, I excel in dynamic environments, taking on challenges with a growth mindset. 
            Committed to delivering high-quality results and contributing effectively to team success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-purple-500/10 backdrop-blur-sm 
                        transform hover:scale-105 transition-all duration-300 group hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400">
                {skill.title}
              </h3>
              <p className="text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
