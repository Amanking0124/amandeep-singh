
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-tech-blue mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-teal to-tech-orange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-rajdhani text-2xl font-semibold text-tech-blue mb-4">
              Designing Solutions, Not Just Visuals
            </h3>
            
            <div className="font-open-sans text-gray-700 space-y-4 leading-relaxed">
              <p>
                I am Amandeep Singh, a fresher Computer Science Engineer passionate about creating innovative Arduino and IoT-based projects. I enjoy working with Arduino UNO, ESP32, and exploring new coding languages like Python, C++, and JavaScript.
              </p>
              
              <p>
                My journey in technology started with curiosity about how things work, and evolved into a passion for creating smart solutions that can make a real difference. From obstacle-avoiding robots to smart security systems, I love bringing ideas to life through code and hardware.
              </p>
              
              <p>
                Outside of tech, I love playing outdoor games like volleyball, which helps me maintain a healthy work-life balance and teaches me teamwork and strategic thinking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-tech-teal">
              <h4 className="font-rajdhani text-xl font-semibold text-tech-blue mb-2">Quick Facts</h4>
              <ul className="font-open-sans text-gray-700 space-y-2">
                <li>🎓 <strong>8+ Years of Experience</strong> in Engineering</li>
                <li>✅ <strong>50+ Complete Projects</strong> Delivered</li>
                <li>🏆 <strong>3+ Years of Experience</strong> in Problem Solving</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="font-rajdhani text-2xl font-semibold text-tech-blue mb-6">Education</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-tech-orange pl-6">
                <h4 className="font-rajdhani text-xl font-semibold text-gray-900">
                  B.E. in Computer Science Engineering
                </h4>
                <p className="font-open-sans text-tech-teal font-medium">Chandigarh University</p>
                <p className="font-open-sans text-gray-600">Batch of 2027 • CGPA: 7.0</p>
                <p className="font-open-sans text-gray-700 mt-2">
                  Specializing in IoT development, embedded systems, and software engineering with hands-on experience in Arduino and modern programming languages.
                </p>
              </div>

              <div className="bg-gradient-to-r from-tech-blue/10 to-tech-teal/10 p-4 rounded-lg">
                <h4 className="font-rajdhani text-lg font-semibold text-tech-blue mb-2">
                  Key Coursework
                </h4>
                <div className="grid grid-cols-2 gap-2 font-open-sans text-sm text-gray-700">
                  <span>• Data Structures</span>
                  <span>• Algorithms</span>
                  <span>• Embedded Systems</span>
                  <span>• IoT Development</span>
                  <span>• Database Systems</span>
                  <span>• Web Technologies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
