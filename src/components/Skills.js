import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaShieldAlt, FaLock, FaBug, FaRobot } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiGithub, SiLinux } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'purple',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
        { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" />, level: 85 },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" />, level: 88 },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, level: 85 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'blue',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, level: 82 },
        { name: 'Express.js', icon: <SiExpress className="text-white" />, level: 80 },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, level: 78 }
      ]
    },
    {
      title: 'Security',
      color: 'green',
      skills: [
        { name: 'Burp Suite', icon: <FaBug className="text-orange-500" />, level: 75 },
        { name: 'Penetration Testing', icon: <FaShieldAlt className="text-red-500" />, level: 70 },
        { name: 'Security Auditing', icon: <FaLock className="text-yellow-500" />, level: 72 }
      ]
    },
    {
      title: 'Machine Learning',
      color: 'orange',
      skills: [
        { name: 'Python', icon: <FaRobot className="text-[#FFD43B]" />, level: 80 },
        { name: 'TensorFlow', icon: <FaRobot className="text-[#FF6F00]" />, level: 75 },
        { name: 'Data Analysis', icon: <FaRobot className="text-[#FF6F00]" />, level: 70 }
      ]
    },
    {
      title: 'Version Control',
      color: 'cyan',
      skills: [
        { name: 'Git', icon: <SiGithub className="text-[#F1502F]" />, level: 85 },
        { name: 'Linux', icon: <SiLinux className="text-[#FCC624]" />, level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/90 to-blue-900/90 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\' fill=\'rgba(255,255,255,0.07)\'/%3E%3C/svg%3E')] opacity-25"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 transition-all duration-300">
            My Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I specialize in full-stack development with a focus on modern web technologies and security practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transform hover:scale-105 transition-all duration-300 group"
            >
              <h3 className={`text-2xl font-semibold mb-6 text-${category.color}-300 group-hover:text-${category.color}-200`}>
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center gap-3 text-gray-300 group-hover:text-white">
                      <div className="text-xl">{skill.icon}</div>
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-400 transform origin-left scale-x-0 animate-skill-fill`}
                        style={{ transform: `scaleX(${skill.level / 100})` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
