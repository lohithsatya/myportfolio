import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: [
        'Led a team of 5 developers in building a cloud-based project management system',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipeline reducing deployment time by 60%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Lab',
      period: '2020 - 2022',
      description: [
        'Developed responsive web applications using React.js and Redux',
        'Created reusable component library used across multiple projects',
        'Collaborated with UX team to implement modern design patterns'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'StartUp Hub',
      period: '2019 - 2020',
      description: [
        'Built and maintained client websites using HTML, CSS, and JavaScript',
        'Assisted in developing an e-commerce platform using MERN stack',
        'Participated in daily stand-ups and sprint planning meetings'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 