
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-rajdhani text-2xl font-bold text-white">
              Amandeep Singh
            </h3>
            <p className="font-open-sans text-gray-400 max-w-md">
              IoT & Arduino Enthusiast passionate about creating innovative solutions 
              through embedded systems and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-rajdhani text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block font-open-sans text-gray-400 hover:text-tech-orange transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="font-rajdhani text-lg font-semibold text-white">Connect With Me</h4>
            <div className="space-y-2">
              <a 
                href="mailto:amandeepsingh70159@gmail.com"
                className="block font-open-sans text-gray-400 hover:text-tech-orange transition-colors duration-200"
              >
                📧 amandeepsingh70159@gmail.com
              </a>
              <a 
                href="tel:+918816095020"
                className="block font-open-sans text-gray-400 hover:text-tech-orange transition-colors duration-200"
              >
                📱 +91 8816095020
              </a>
              <a 
                href="https://linkedin.com/in/amandeep-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-open-sans text-gray-400 hover:text-tech-orange transition-colors duration-200"
              >
                💼 LinkedIn Profile
              </a>
              <a 
                href="https://github.com/Amanking0124"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-open-sans text-gray-400 hover:text-tech-orange transition-colors duration-200"
              >
                💻 GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-open-sans text-gray-400">
            © {currentYear} Amandeep Singh. All rights reserved. Built with passion and technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
