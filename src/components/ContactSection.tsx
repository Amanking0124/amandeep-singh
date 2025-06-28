import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_gi0563j', // Service ID
        'template_dbo9eos', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Amandeep Singh',
        },
        'T9wuISeqb4ErU-tlY' // Public Key
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'amandeepsingh70159@gmail.com',
      href: 'mailto:amandeepsingh70159@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8816095020',
      href: 'tel:+918816095020'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'amandeep-singh',
      href: 'https://linkedin.com/in/amandeep-singh'
    },
    {
      icon: '💻',
      label: 'GitHub',
      value: 'Amanking0124',
      href: 'https://github.com/Amanking0124'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-tech-blue via-tech-purple to-tech-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-rajdhani text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-orange to-white mx-auto rounded-full mb-4"></div>
          <p className="font-open-sans text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="font-rajdhani text-2xl text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-open-sans text-sm font-medium text-gray-200 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-tech-orange"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-open-sans text-sm font-medium text-gray-200 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-tech-orange"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-open-sans text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-300 focus:border-tech-orange resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-tech-orange hover:bg-tech-orange/90 text-white font-rajdhani text-lg py-3 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-rajdhani text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="font-open-sans text-gray-200 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about technology and innovation. Feel free to reach out through any of 
                the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{info.icon}</div>
                    <div>
                      <p className="font-open-sans text-sm text-gray-300">{info.label}</p>
                      <p className="font-open-sans font-medium text-white group-hover:text-tech-orange transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <h4 className="font-rajdhani text-xl font-semibold text-white mb-4">
                Available for Opportunities
              </h4>
              <p className="font-open-sans text-gray-200 mb-4">
                I'm currently open to internship opportunities, freelance projects, and collaborations 
                in IoT development, embedded systems, and web development.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-open-sans text-green-400 font-medium">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
