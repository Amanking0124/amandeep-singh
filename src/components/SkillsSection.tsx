
import { useState, useEffect } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'Python', level: 85, color: 'bg-blue-500' },
    { name: 'C++', level: 80, color: 'bg-green-500' },
    { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
    { name: 'C', level: 85, color: 'bg-purple-500' },
    { name: 'Arduino', level: 90, color: 'bg-tech-teal' },
  ];

  const platforms = [
    { name: 'Arduino UNO', icon: '🔧' },
    { name: 'ESP32', icon: '📡' },
    { name: 'IoT Modules', icon: '🌐' },
    { name: 'Sensors', icon: '📊' },
    { name: 'RF Modules', icon: '📶' },
    { name: 'GPS Tracking', icon: '🛰️' },
  ];

  const interests = [
    { name: 'Embedded Systems', icon: '⚡' },
    { name: 'IoT Development', icon: '🏠' },
    { name: 'Automation', icon: '🤖' },
    { name: 'Robotics', icon: '🤖' },
    { name: 'Smart Devices', icon: '📱' },
    { name: 'Web Development', icon: '💻' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-tech-blue mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-teal to-tech-orange mx-auto rounded-full"></div>
          <p className="font-open-sans text-gray-600 mt-4 max-w-2xl mx-auto">
            A combination of programming languages, hardware platforms, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-rajdhani text-2xl font-semibold text-tech-blue mb-6 text-center">
              Programming Languages
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-open-sans font-medium text-gray-700">{skill.name}</span>
                    <span className="font-open-sans text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platforms & Tools */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-rajdhani text-2xl font-semibold text-tech-blue mb-6 text-center">
              Platforms & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{platform.icon}</div>
                  <span className="font-open-sans text-sm font-medium text-gray-700">{platform.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interest Areas */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="font-rajdhani text-2xl font-semibold text-tech-blue mb-6 text-center">
              Interest Areas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div 
                  key={interest.name}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{interest.icon}</div>
                  <span className="font-open-sans text-sm font-medium text-gray-700">{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
