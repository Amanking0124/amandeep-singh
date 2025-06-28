
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SOAR – Smart Obstacle Avoidance Robot",
      description: "A robot that detects and avoids obstacles using sensors with GPS tracking and remote control capabilities.",
      features: [
        "Obstacle detection and avoidance using ultrasonic sensors",
        "GPS tracking for location monitoring",
        "Remote control via mobile application",
        "Object transportation capabilities"
      ],
      technologies: ["Arduino UNO", "Sensors", "GPS Module", "RF Receiver"],
      category: "Robotics",
      image: "🤖",
      status: "Completed"
    },
    {
      title: "RFID Smart Lock System",
      description: "A secure lock system combining RFID tags and fingerprint sensor for dual authentication.",
      features: [
        "RFID card-based access control",
        "Biometric fingerprint authentication",
        "Dual security verification system",
        "Remote monitoring capabilities"
      ],
      technologies: ["Arduino", "RFID Module", "Fingerprint Sensor", "Security Modules"],
      category: "Security",
      image: "🔐",
      status: "Completed"
    },
    {
      title: "Typing Speed Test Game",
      description: "A web-based interactive game to test and improve typing speed with real-time feedback.",
      features: [
        "Real-time typing speed calculation",
        "Error highlighting and tracking",
        "Performance analytics and statistics",
        "Multiple difficulty levels"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Web APIs"],
      category: "Web Development",
      image: "⌨️",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rajdhani text-4xl md:text-5xl font-bold text-tech-blue mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-teal to-tech-orange mx-auto rounded-full"></div>
          <p className="font-open-sans text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore my portfolio of innovative projects showcasing Arduino, IoT, and web development skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-br from-tech-blue to-tech-teal text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-6xl opacity-20">{project.image}</div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="bg-tech-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>
                  <CardTitle className="font-rajdhani text-xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-gray-100 font-open-sans">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-rajdhani text-lg font-semibold text-tech-blue mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="font-open-sans text-sm text-gray-600 flex items-start">
                          <span className="text-tech-teal mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-rajdhani text-lg font-semibold text-tech-blue mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="bg-tech-teal/10 text-tech-teal px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-tech-teal to-tech-electric hover:from-tech-electric hover:to-tech-teal transition-all duration-300 group-hover:scale-105">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-tech-blue hover:bg-tech-blue/90 text-white font-rajdhani text-lg px-8 py-3 rounded-full"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
