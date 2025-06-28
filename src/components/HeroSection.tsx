
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-tech-blue via-tech-purple to-tech-teal">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-tech-orange/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-tech-electric/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-tech-orange/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <path d="M50 200 L150 200 L150 100 L250 100 L250 300 L350 300" stroke="white" strokeWidth="2"/>
          <path d="M100 50 L100 150 L300 150 L300 250 L350 250" stroke="white" strokeWidth="2"/>
          <circle cx="150" cy="200" r="4" fill="white"/>
          <circle cx="150" cy="100" r="4" fill="white"/>
          <circle cx="250" cy="100" r="4" fill="white"/>
          <circle cx="100" cy="150" r="4" fill="white"/>
          <circle cx="300" cy="150" r="4" fill="white"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className="text-white space-y-6 animate-slide-up">
            <h1 className="font-rajdhani text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-orange to-white">
                Amandeep Singh
              </span>
            </h1>
            
            <p className="font-rajdhani text-xl md:text-2xl text-gray-200">
              IoT & Arduino Enthusiast | Engineering Graduate
            </p>
            
            <p className="font-open-sans text-lg text-gray-300 max-w-md">
              Turning Innovative Ideas into Smart Projects
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white font-rajdhani text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-tech-blue font-rajdhani text-lg px-8 py-3 rounded-full transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image with Tech Frame */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-tech-orange to-tech-electric p-1">
                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <img 
                    src="https://i.postimg.cc/Y08gKr4t/IMG-20250628-WA0001-1.jpg"
                    alt="Amandeep Singh"
                    className="w-72 h-72 rounded-full object-cover border-4 border-white/20"
                  />
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 bg-tech-orange text-white p-3 rounded-full animate-float">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-tech-electric text-white p-3 rounded-full animate-float" style={{animationDelay: '1s'}}>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default HeroSection;
