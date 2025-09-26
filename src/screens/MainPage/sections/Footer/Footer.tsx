import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  ArrowUp,
  Building2,
  Globe,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter subscription:', email);
      
      // Show success state
      setIsSubscribed(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const services = [
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'Cloud Solutions', href: '#' },
    { name: 'Consulting', href: '#' },
    { name: 'Support', href: '#' }
  ];

  return (
    <footer 
      ref={footerRef}
      className="relative"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.008) * 30}px) rotate(${scrollY * 0.05}deg)`
          }}
        />
        
        <div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg rotate-45"
          style={{
            transform: `translateY(${Math.cos(scrollY * 0.006) * 25}px) rotate(${45 + scrollY * 0.03}deg)`
          }}
        />
        
        <div 
          className="absolute bottom-1/4 left-1/4 w-40 h-40 border border-emerald-500/20 rounded-full"
          style={{
            transform: `translateX(${Math.sin(scrollY * 0.004) * 20}px) scale(${1 + Math.sin(scrollY * 0.008) * 0.05})`
          }}
        />

        {/* Gradient Orbs */}
        <div 
          className="absolute top-32 right-32 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${Math.cos(scrollY * 0.003) * 40}px, ${Math.sin(scrollY * 0.005) * 30}px)`
          }}
        />
        
        <div 
          className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          style={{
            transform: `translate(${Math.sin(scrollY * 0.004) * 35}px, ${Math.cos(scrollY * 0.003) * 25}px)`
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)`
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${5 + (i * 6)}%`,
              top: `${10 + (i * 4)}%`,
              transform: `translateY(${Math.sin(scrollY * 0.005 + i) * 15}px)`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}

        {/* Abstract SVG Shapes */}
        <svg className="absolute top-20 left-1/3 w-32 h-32 text-white/5" viewBox="0 0 100 100">
          <polygon 
            points="50,5 90,25 90,75 50,95 10,75 10,25" 
            fill="currentColor"
            style={{ transform: `rotate(${scrollY * 0.02}deg)` }}
          />
        </svg>
        
        <svg className="absolute bottom-40 right-1/4 w-24 h-24 text-white/5" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
          />
          <circle 
            cx="50" 
            cy="50" 
            r="20" 
            fill="currentColor"
            style={{ transform: `rotate(${scrollY * 0.05}deg)` }}
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-8 pt-20 pb-8">
        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Company Info */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">YourBusiness</h3>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We deliver cutting-edge digital experiences that drive growth and success.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">123 Business Street, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm">hello@yourbusiness.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-emerald-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-purple-400" />
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            {!isSubscribed ? (
              <div className="space-y-4">
                <form onSubmit={handleNewsletterSubmit} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-2 p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
                
                <div className="flex items-center gap-2 text-xs text-gray-900">
                  <Clock className="w-3 h-3" />
                  <span>We respect your privacy. Unsubscribe anytime.</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <div className="mb-3">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto animate-bounce" />
                </div>
                <h5 className="text-white font-semibold mb-2">Successfully Subscribed!</h5>
                <p className="text-gray-400 text-sm">
                  Thank you for subscribing to our newsletter.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div 
              className={`flex items-center gap-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div 
              className={`text-center lg:text-right transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              <p className="text-gray-900 text-sm mb-2">
                © 2024 YourBusiness. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-xs text-gray-900">
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 ${
          scrollY > 500 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}