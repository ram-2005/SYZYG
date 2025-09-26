import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Mail, Phone, Building, MessageSquare, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    message: ''
  });

  // WhatsApp number (replace with your actual number)
  const WHATSAPP_NUMBER = '6374642974'; // Replace with your WhatsApp number

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Mobile:* ${formData.mobile}
*Company:* ${formData.company}

*Message:*
${formData.message}
    `.trim();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '6374642974')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 border-2 border-white/10 rounded-full"
          style={{
            transform: `translateY(${Math.sin(scrollY * 0.01) * 50}px) rotate(${scrollY * 0.1}deg)`
          }}
        />
        
        <div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg rotate-45"
          style={{
            transform: `translateY(${Math.cos(scrollY * 0.008) * 40}px) rotate(${45 + scrollY * 0.05}deg)`
          }}
        />
        
        <div 
          className="absolute bottom-1/4 left-1/4 w-40 h-40 border-2 border-pink-400/20 rounded-full"
          style={{
            transform: `translateX(${Math.sin(scrollY * 0.006) * 30}px) scale(${1 + Math.sin(scrollY * 0.01) * 0.1})`
          }}
        />

        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/2 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${Math.cos(scrollY * 0.005) * 50}px, ${Math.sin(scrollY * 0.008) * 30}px)`
          }}
        />
        
        <div 
          className="absolute bottom-20 right-32 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${Math.sin(scrollY * 0.007) * 40}px, ${Math.cos(scrollY * 0.006) * 35}px)`
          }}
        />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.03}px)`
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + (i * 5)}%`,
              transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title and Description */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="relative">
              <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-blue-300 leading-tight mb-6">
                Contact
              </h1>
              <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 leading-tight mb-8">
                Us
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Ready to transform your business? Let's discuss how we can help you achieve your goals with our innovative solutions.
              </p>
              
              <div className="flex items-center gap-4 text-gray-400">
                <MessageSquare className="w-6 h-6" />
                <span>We'll respond within 24 hours</span>
              </div>
              
              {/* Decorative Line */}
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Form Container */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Email"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Mobile Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                        placeholder="Mobile Number"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Company Field */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        placeholder="Company Name"
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="How can we help you?"
                        className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl flex items-center justify-center gap-3 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </button>
                  </form>
                ) : (
                  /* Success State */
                  <div className="text-center py-12">
                    <div className="mb-6">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent to WhatsApp. We'll get back to you soon!
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto" />
                  </div>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;